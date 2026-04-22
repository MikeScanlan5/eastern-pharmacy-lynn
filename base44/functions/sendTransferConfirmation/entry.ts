import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const patient = body.data;
    if (!patient || !patient.email) {
      return Response.json({ message: 'No email address on record, skipping.' });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

    const patientName = `${patient.patient_first_name} ${patient.patient_last_name}`;

    const emailBody = [
      `Dear ${patientName},`,
      '',
      'Thank you for submitting your pharmacy transfer request to Eastern Pharmacy. We have received your information and our team will begin processing your transfer shortly.',
      '',
      'Here is a summary of your request:',
      `  • Name: ${patientName}`,
      `  • Address: ${patient.street_address_1}${patient.street_address_2 ? ', ' + patient.street_address_2 : ''}, ${patient.city}, ${patient.state || ''} ${patient.zip_code || ''}`.trim(),
      patient.current_pharmacy ? `  • Current Pharmacy: ${patient.current_pharmacy}` : '',
      '',
      'If you have any questions, please don\'t hesitate to contact us:',
      '  📞 781-460-2000',
      '  📠 Fax: 855-641-2315',
      '  ✉️  easternpharmacylynn@gmail.com',
      '  📍 152 Lynnway Suite 1C, Lynn, MA 01902',
      '',
      'We look forward to serving you.',
      '',
      'Warm regards,',
      'Eastern Pharmacy Team',
      'Lynn, Massachusetts',
    ].filter(line => line !== null).join('\n');

    const subject = 'Your Transfer Request Has Been Received — Eastern Pharmacy';

    const mimeMessage = [
      `To: ${patient.email}`,
      'From: Eastern Pharmacy <easternpharmacylynn@gmail.com>',
      `Subject: ${subject}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      emailBody,
    ].join('\r\n');

    const encoded = btoa(unescape(encodeURIComponent(mimeMessage)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Send confirmation to patient
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

    // Send internal notification to Eastern Pharmacy
    const internalBody = [
      'A new patient transfer request has been submitted.',
      '',
      'Patient Details:',
      `  • Name: ${patientName}`,
      `  • Email: ${patient.email}`,
      `  • Phone: ${patient.telephone || 'N/A'}`,
      `  • Address: ${patient.street_address_1}${patient.street_address_2 ? ', ' + patient.street_address_2 : ''}, ${patient.city}, ${patient.state || ''} ${patient.zip_code || ''}`.trim(),
      patient.current_pharmacy ? `  • Current Pharmacy: ${patient.current_pharmacy}` : '',
      patient.insurance ? `  • Insurance: ${patient.insurance}` : '',
      patient.drug_allergies ? `  • Drug Allergies: ${patient.drug_allergies}` : '',
      '',
      'Please log in to review the full submission.',
    ].filter(Boolean).join('\n');

    const internalMime = [
      'To: easternpharmacylynn@gmail.com',
      'From: Eastern Pharmacy <easternpharmacylynn@gmail.com>',
      'Subject: New Patient Transfer Request Received',
      'Content-Type: text/plain; charset=utf-8',
      '',
      internalBody,
    ].join('\r\n');

    const encodedInternal = btoa(unescape(encodeURIComponent(internalMime)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: encodedInternal }),
    });

    return Response.json({ message: `Confirmation email sent to ${patient.email} and notification sent to Eastern Pharmacy.` });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});