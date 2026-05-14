import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const order = body.data;

    if (!order) {
      return Response.json({ message: 'No order data, skipping.' });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

    const patientLines = (order.patients || []).map((p, i) =>
      `  Patient ${i + 1}: ${p.patient_first_name} ${p.patient_last_name}\n  Medications: ${p.medication_strength}`
    ).join('\n\n');

    const internalBody = [
      'A new prescription order request has been submitted.',
      '',
      'Customer Details:',
      order.customer_email ? `  • Email: ${order.customer_email}` : '',
      order.customer_telephone ? `  • Phone: ${order.customer_telephone}` : '',
      `  • Delivery/Pickup: ${order.delivery_or_pickup || 'N/A'}`,
      '',
      'Patients & Medications:',
      patientLines,
      '',
      'Please log in to review the full submission.',
    ].filter(line => line !== null).join('\n');

    const internalMime = [
      'To: easternpharmacylynn@gmail.com, store@easternpharmacylynn.com, evandostert@gmail.com',
      'From: Eastern Pharmacy <easternpharmacylynn@gmail.com>',
      'Subject: New Prescription Order Request Received',
      'Content-Type: text/plain; charset=utf-8',
      '',
      internalBody,
    ].join('\r\n');

    const encoded = btoa(unescape(encodeURIComponent(internalMime)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: encoded }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Gmail API error: ${err}`);
    }

    return Response.json({ message: 'Notification sent.' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});