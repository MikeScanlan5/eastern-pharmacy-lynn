import React from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedLine from '../components/shared/AnimatedLine';

const sections = [
  {
    title: '1. Introduction',
    content: `EASTERN PHARMACY is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you.

This Privacy Policy explains how Eastern Pharmacy ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you visit our website or submit information through our online forms. Please read this policy carefully. If you disagree with its terms, please discontinue use of our Site.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following types of information:\n\n• Personal identification information such as your name, date of birth, email address, phone number, and mailing address.\n• Health-related information you voluntarily provide, including current medications, drug allergies, insurance details, and physician information, when submitting patient intake or transfer forms.\n• Facility and organizational information, including facility name, room number, and admitting physician.\n• Usage data such as IP address, browser type, pages visited, and time spent on the Site, collected automatically through standard web technologies.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect for the following purposes:\n\n• To process and fulfill pharmacy services, including prescription transfers and facility patient enrollment.\n• To communicate with you regarding your account, services, or inquiries submitted through the Site.\n• To contact you about our products, services, and other content that may be of interest to you (you may opt out at any time).\n• To comply with applicable federal and state laws, including HIPAA and Massachusetts state healthcare regulations.\n• To improve our website, services, and overall patient experience.\n• To respond to customer service requests and support needs.`,
  },
  {
    title: '4. HIPAA Compliance',
    content: `Eastern Pharmacy is a covered entity under the Health Insurance Portability and Accountability Act (HIPAA). Any protected health information (PHI) submitted through this Site is handled in strict accordance with HIPAA Privacy and Security Rules. We maintain appropriate administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of PHI. We do not sell, rent, or trade protected health information under any circumstances.`,
  },
  {
    title: '5. Sharing of Information',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:\n\n• With licensed healthcare providers, prescribers, and facilities involved in your care or pharmacy services.\n• With insurance companies for billing and reimbursement purposes.\n• With service providers who assist us in operating our website or conducting our business, subject to confidentiality agreements.\n• As required by law, regulation, court order, or governmental authority.\n• To protect the rights, safety, or property of Eastern Pharmacy, our patients, or the public.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain personal and health information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements. Pharmacy records are retained in accordance with Massachusetts Board of Pharmacy regulations and applicable federal law.`,
  },
  {
    title: '7. Cookies and Tracking Technologies',
    content: `Our Site may use cookies and similar tracking technologies to enhance your browsing experience and analyze Site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the Site may not function properly without cookies. We do not use tracking technologies to collect health information.`,
  },
  {
    title: '8. Your Rights and Choices',
    content: `You have the right to:\n\n• Access the personal information we hold about you.\n• Request correction of inaccurate or incomplete information.\n• Request deletion of your personal information, subject to legal and regulatory retention requirements.\n• Opt out of marketing communications at any time by contacting us directly or using the unsubscribe link in any email we send.\n• Request a copy of your HIPAA Notice of Privacy Practices by contacting our pharmacy directly.`,
  },
  {
    title: '9. Security',
    content: `We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our Site is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete such information.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the revised policy on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nEastern Pharmacy\n152 Lynnway, Suite 1C\nLynn, MA 01902\nPhone: 781-460-2000\nEmail: easternpharmacylynn@gmail.com`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Legal"
            title="Privacy Policy"
            description="Your privacy is important to us. This policy outlines how we collect, use, and protect your information."
            light
          />
          <p className="text-sm text-white/40 font-inter mt-2">Last updated: April 2026</p>
        </div>
      </section>

      <AnimatedLine />

      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-inter font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}