import LegalLayout from '../../components/legal/LegalLayout';

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      description="Our refund and cancellation policy for Cehpoint services"
      lastUpdated="November 12, 2025"
    >
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">1. Overview</h2>
          <p className="mb-4">
            At Cehpoint, we are committed to delivering a high-quality AI-Powered ATS + Business Management System that meets your business needs. This Refund Policy outlines the circumstances under which refunds may be issued and the process for requesting them.
          </p>
          <p className="mb-4">
            We encourage you to thoroughly review our features, pricing, and service descriptions before making a purchase. If you have questions, our team is available to help you make an informed decision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">2. One-Time Payment Model</h2>
          <p className="mb-4">
            Cehpoint operates on a one-time payment model. The current price is <strong>₹15,000</strong> for lifetime access, which includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Full access to all features (ATS, business management, AI tools, client dashboards)</li>
            <li>Lifetime free hosting on our secure servers</li>
            <li>All future software updates and feature additions at no extra cost</li>
            <li>Priority customer support</li>
            <li>Setup, customization, and personalized training</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">3. Refund Eligibility</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">3.1 7-Day Money-Back Guarantee</h3>
          <p className="mb-4">
            We offer a <strong>7-day money-back guarantee</strong> from the date of purchase under the following conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Technical Issues:</strong> If our system has critical technical issues that prevent you from using core features, and our support team is unable to resolve them within a reasonable timeframe</li>
            <li><strong>Service Non-Delivery:</strong> If we fail to set up your system within the agreed-upon timeline (typically 24-48 hours, or as communicated) due to reasons within our control</li>
            <li><strong>Misrepresentation:</strong> If the delivered product materially differs from the features and functionality described on our website and in our communications</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">3.2 Refunds Will NOT Be Issued For</h3>
          <p className="mb-4">Refunds will not be provided in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Change of Mind:</strong> If you simply change your mind or no longer need the service after setup has been completed</li>
            <li><strong>Lack of Use:</strong> If you purchased the service but did not utilize it or upload any data</li>
            <li><strong>User Error:</strong> If issues arise due to incorrect use, failure to follow instructions, or not utilizing provided training resources</li>
            <li><strong>Third-Party Issues:</strong> Problems caused by third-party services, integrations, or your own IT infrastructure</li>
            <li><strong>After 7 Days:</strong> Refund requests submitted more than 7 days after the purchase date</li>
            <li><strong>Partial Use:</strong> If you have actively used the system, uploaded candidate data, generated quotations, or created projects</li>
            <li><strong>Custom Development Completed:</strong> If custom features or industry-specific modifications were delivered as requested</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">4. How to Request a Refund</h2>
          <p className="mb-4">If you believe you are eligible for a refund, please follow these steps:</p>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">Step 1: Contact Support</h3>
          <p className="mb-4">
            Reach out to our support team within 7 days of your purchase date. You can contact us via:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Email: <a href="mailto:refunds@cehpoint.co.in" className="text-primary hover:underline">refunds@cehpoint.co.in</a></li>
            <li>Phone: +91 33690 29331</li>
            <li>WhatsApp: +91 9091156095</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">Step 2: Provide Details</h3>
          <p className="mb-4">In your refund request, please include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your full name and business name</li>
            <li>Account email address and phone number</li>
            <li>Purchase date and transaction/invoice number</li>
            <li>Detailed reason for the refund request</li>
            <li>Screenshots or documentation of any technical issues (if applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">Step 3: Allow Us to Resolve</h3>
          <p className="mb-4">
            Before processing a refund, our support team will attempt to resolve your concerns. Many issues can be quickly addressed through technical support, additional training, or minor adjustments to the system.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">Step 4: Refund Review</h3>
          <p className="mb-4">
            If the issue cannot be resolved and your request meets our eligibility criteria, we will review your refund request within 2-3 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">5. Refund Processing</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">5.1 Approval and Timeline</h3>
          <p className="mb-4">
            Once your refund request is approved, we will process the refund within 7-10 business days. The refund will be issued to the original payment method used for the purchase.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">5.2 Refund Amount</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Full refunds will be issued if no setup or customization work has been completed</li>
            <li>Partial refunds may be considered if custom development work was completed before the refund request, deducting the cost of work already delivered</li>
            <li>Payment gateway fees (if applicable) may be non-refundable as they are charged by third-party processors</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">5.3 Account Deactivation</h3>
          <p className="mb-4">
            Upon refund approval, your account will be deactivated, and access to the platform will be revoked. Any data stored in your account will be deleted in accordance with our data retention policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">6. Cancellations Before Service Delivery</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">6.1 Pre-Setup Cancellations</h3>
          <p className="mb-4">
            If you cancel your order before we begin setting up your system (i.e., before any work has started), you are eligible for a full refund.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">6.2 During Setup Cancellations</h3>
          <p className="mb-4">
            If you cancel during the setup process after work has commenced, a partial refund may be issued based on the extent of work completed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">7. Non-Refundable Items and Services</h2>
          <p className="mb-4">The following are non-refundable:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Custom Development:</strong> Once custom features specific to your business have been developed and delivered, those costs are non-refundable</li>
            <li><strong>Third-Party Costs:</strong> Any third-party service fees (e.g., payment gateway fees, domain registration if provided) are non-refundable</li>
            <li><strong>Training Sessions Completed:</strong> Personalized training and onboarding sessions that have already been conducted</li>
            <li><strong>Data Migration Services:</strong> If data migration from your existing systems has been completed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">8. Our Commitment to Customer Satisfaction</h2>
          <p className="mb-4">
            While we have this refund policy in place, our primary goal is to ensure you are completely satisfied with Cehpoint. We are committed to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Providing transparent information about our features and capabilities before purchase</li>
            <li>Delivering high-quality service and support</li>
            <li>Responding promptly to any concerns or technical issues</li>
            <li>Working collaboratively with you to resolve problems and ensure success</li>
          </ul>
          <p className="mb-4">
            We encourage open communication. If you're experiencing any issues or have concerns, please contact us immediately so we can help.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">9. Disputes and Chargebacks</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">9.1 Contact Us First</h3>
          <p className="mb-4">
            If you have any billing disputes or concerns about your purchase, please contact our support team before initiating a chargeback with your bank or payment provider. Most issues can be resolved quickly through direct communication.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">9.2 Chargeback Policy</h3>
          <p className="mb-4">
            Initiating a chargeback without first contacting us may result in immediate account suspension and termination of services. Chargebacks are costly to process and often unnecessary when a simple refund request would suffice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">10. Changes to This Refund Policy</h2>
          <p className="mb-4">
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website with an updated "Last Updated" date. Your purchase is subject to the Refund Policy in effect at the time of your transaction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">11. Contact Information</h2>
          <p className="mb-4">
            For questions about refunds, cancellations, or this policy, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-2"><strong>Cehpoint - Refunds & Billing</strong></p>
            <p className="mb-2">Email: <a href="mailto:refunds@cehpoint.co.in" className="text-primary hover:underline">refunds@cehpoint.co.in</a></p>
            <p className="mb-2">Support Email: <a href="mailto:sales@cehpoint.co.in" className="text-primary hover:underline">sales@cehpoint.co.in</a></p>
            <p className="mb-2">Phone: +91 33690 29331</p>
            <p className="mb-2">WhatsApp: +91 9091156095</p>
            <p className="mb-2">Support Hours: Monday - Saturday, 9 AM - 7 PM IST</p>
          </div>
        </section>

        <section className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-darkgrey mb-3">Our Promise</h3>
          <p className="text-gray-700">
            We stand behind our product and are confident that Cehpoint will transform the way you manage hiring and projects. Our 7-day money-back guarantee gives you peace of mind to try our system risk-free. If you're not satisfied within the first 7 days, we'll work with you to make it right or process a refund—no questions asked.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
