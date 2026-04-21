import React from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedLine from '../components/shared/AnimatedLine';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Eastern Pharmacy website (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this Site. Eastern Pharmacy reserves the right to update these Terms at any time without prior notice. Continued use of the Site following any changes constitutes your acceptance of the revised Terms.`,
  },
  {
    title: '2. Informational Purposes Only',
    content: `The content provided on this Site is for general informational purposes only and does not constitute medical, pharmaceutical, or professional healthcare advice. Nothing on this Site should be construed as a substitute for consultation with a licensed pharmacist, physician, or other qualified healthcare provider. Always seek professional guidance before making any healthcare or medication decisions.`,
  },
  {
    title: '3. Prescription Requirements',
    content: `Eastern Pharmacy is a licensed institutional pharmacy. All prescription medications dispensed by Eastern Pharmacy require a valid prescription from a licensed prescriber in accordance with applicable state and federal laws. Submitting a transfer or patient intake form does not constitute a guarantee of service or medication dispensing.`,
  },
  {
    title: '4. Privacy and Protected Health Information',
    content: `Eastern Pharmacy is committed to protecting the privacy of patient health information in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and all applicable Massachusetts state privacy laws. Any personal or health information submitted through this Site will be handled in accordance with our Privacy Policy and applicable legal requirements. We do not sell or share patient data with third parties for marketing purposes.`,
  },
  {
    title: '5. Submission of Forms',
    content: `Forms submitted through this Site (including patient transfer requests and facility patient intake forms) are for administrative intake purposes only. Submission of a form does not create a pharmacist-patient relationship, guarantee medication availability, or confirm enrollment. A member of our team will contact you to verify information and confirm next steps.`,
  },
  {
    title: '6. Accuracy of Information',
    content: `Eastern Pharmacy strives to ensure that all information on this Site is accurate and up to date. However, we make no warranties or representations of any kind — express or implied — regarding the completeness, accuracy, reliability, or suitability of any information on the Site. We reserve the right to correct errors or omissions at any time.`,
  },
  {
    title: '7. Intellectual Property',
    content: `All content on this Site, including but not limited to text, logos, graphics, images, and branding, is the property of Eastern Pharmacy and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content from this Site without prior written permission from Eastern Pharmacy.`,
  },
  {
    title: '8. Third-Party Links',
    content: `This Site may contain links to third-party websites for convenience. Eastern Pharmacy does not endorse, control, or assume responsibility for the content or practices of any third-party sites. Accessing third-party links is done at your own risk.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the fullest extent permitted by law, Eastern Pharmacy shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this Site, or from reliance on any information provided on the Site. This limitation applies regardless of the legal theory under which damages are sought.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Essex County, Massachusetts.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about these Terms and Conditions, please contact us:\n\nEastern Pharmacy\n152 Lynnway, Suite 1C\nLynn, MA 01902\nPhone: 781-460-2000\nEmail: easternpharmacylynn@gmail.com`,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Legal"
            title="Terms & Conditions"
            description="Please read these terms carefully before using our website or submitting any forms."
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