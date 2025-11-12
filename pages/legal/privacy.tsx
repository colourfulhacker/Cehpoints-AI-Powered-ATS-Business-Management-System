import Link from 'next/link';
import LegalLayout from '../../components/legal/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information"
      lastUpdated="November 12, 2025"
    >
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">1. Introduction</h2>
          <p className="mb-4">
            At Cehpoint ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-Powered ATS + Business Management System.
          </p>
          <p>
            By using our platform, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">2.1 Personal Information</h3>
          <p className="mb-4">When you use Cehpoint, we may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Business Information:</strong> Company name, business type, industry, company size, GST number (if applicable)</li>
            <li><strong>Contact Information:</strong> Name, email address, phone number, WhatsApp number, business address</li>
            <li><strong>Account Credentials:</strong> Username, password (encrypted), security questions</li>
            <li><strong>Payment Information:</strong> Billing address, payment method details (processed through secure payment gateways)</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device information, access times, pages viewed</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">2.2 Candidate and Employee Data</h3>
          <p className="mb-4">As part of our ATS functionality, you may upload:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Candidate resumes and CVs</li>
            <li>Assessment responses and evaluation scores</li>
            <li>Interview notes and feedback</li>
            <li>Employment history and qualifications</li>
            <li>Contact details of candidates and employees</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">2.3 Client and Project Data</h3>
          <p className="mb-4">For business management features, we collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Client requirements and specifications</li>
            <li>Project details, timelines, and deliverables</li>
            <li>Quotations and invoices</li>
            <li>Communication records and reports</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our ATS and business management features</li>
            <li><strong>AI Processing:</strong> To generate assessment questions, analyze candidate responses, and create quotations</li>
            <li><strong>Communication:</strong> To send service updates, technical notices, and respond to your inquiries</li>
            <li><strong>Customization:</strong> To personalize your experience and provide industry-specific features</li>
            <li><strong>Analytics:</strong> To analyze usage patterns and improve our platform&apos;s performance and features</li>
            <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activities</li>
            <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">4. Data Sharing and Disclosure</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">4.1 We Do NOT Sell Your Data</h3>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your data belongs to you.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">4.2 Limited Sharing</h3>
          <p className="mb-4">We may share your information only in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our platform (hosting, payment processing, AI APIs), under strict confidentiality agreements</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified in advance)</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">4.3 Client Dashboard Access</h3>
          <p className="mb-4">
            If you use our client dashboard feature, your clients will have access only to the specific project information, quotations, and reports that you choose to share with them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">5. Data Security</h2>
          <p className="mb-4">We implement industry-standard security measures to protect your data:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Encryption:</strong> Data in transit is encrypted using SSL/TLS; sensitive data at rest is encrypted</li>
            <li><strong>Access Controls:</strong> Role-based access control ensures only authorized personnel can access your data</li>
            <li><strong>Regular Backups:</strong> Automated backups to prevent data loss</li>
            <li><strong>Security Audits:</strong> Regular security assessments and vulnerability testing</li>
            <li><strong>Secure Infrastructure:</strong> Hosting on secure, reputable cloud infrastructure</li>
          </ul>
          <p className="mb-4">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">6. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Active Accounts:</strong> Data is retained while your account is active and you continue using our services</li>
            <li><strong>Account Closure:</strong> Upon request, we will delete or anonymize your data within 90 days of account closure, except where we are legally required to retain certain information</li>
            <li><strong>Backups:</strong> Deleted data may persist in backup systems for up to 90 days before permanent deletion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">7. Your Rights and Choices</h2>
          <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
            <li><strong>Objection:</strong> Object to certain processing activities</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent was the legal basis</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at <a href="mailto:privacy@cehpoint.co.in" className="text-primary hover:underline">privacy@cehpoint.co.in</a> or call +91 33690 29331.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our platform. For detailed information about our use of cookies, please see our <Link href="/legal/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">9. Third-Party Links</h2>
          <p className="mb-4">
            Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">10. Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately so we can take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">11. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and maintained on servers located outside of your country of residence. By using our services, you consent to the transfer of your information to countries that may have different data protection laws than your country.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">12. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Posting the updated policy on our website with a new "Last Updated" date</li>
            <li>Sending an email notification to your registered email address</li>
            <li>Displaying a prominent notice on our platform</li>
          </ul>
          <p className="mb-4">
            Your continued use of our services after changes are posted constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">13. Contact Information</h2>
          <p className="mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-2"><strong>Cehpoint</strong></p>
            <p className="mb-2">Email: <a href="mailto:privacy@cehpoint.co.in" className="text-primary hover:underline">privacy@cehpoint.co.in</a></p>
            <p className="mb-2">Phone: +91 33690 29331</p>
            <p className="mb-2">WhatsApp: +91 9091156095</p>
            <p className="mb-2">Support Hours: Monday - Saturday, 9 AM - 7 PM IST</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">14. Consent</h2>
          <p>
            By using Cehpoint's platform and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, please discontinue use of our services immediately.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
