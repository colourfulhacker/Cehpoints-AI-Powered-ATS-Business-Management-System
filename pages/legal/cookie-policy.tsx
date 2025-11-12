import LegalLayout from '../../components/legal/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      description="How we use cookies and similar tracking technologies"
      lastUpdated="November 12, 2025"
    >
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">1. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember your preferences, improve your browsing experience, and provide analytics data to help us understand how you use our platform.
          </p>
          <p className="mb-4">
            This Cookie Policy explains what cookies are, how we use them on Cehpoint's platform, and how you can manage your cookie preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">2. Why We Use Cookies</h2>
          <p className="mb-4">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Enable Core Functionality:</strong> Allow you to log in, navigate the platform, and use essential features</li>
            <li><strong>Remember Your Preferences:</strong> Store your settings, language preferences, and customization choices</li>
            <li><strong>Improve Security:</strong> Protect your account from unauthorized access and prevent fraudulent activity</li>
            <li><strong>Analyze Usage:</strong> Understand how users interact with our platform to improve performance and user experience</li>
            <li><strong>Provide Better Service:</strong> Optimize loading times, remember your session, and reduce the need for re-authentication</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">3.1 Strictly Necessary Cookies</h3>
          <p className="mb-4">
            These cookies are essential for the platform to function properly. Without them, you would not be able to use core features such as logging in, accessing your dashboard, or navigating between pages.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-2"><strong>Examples:</strong></p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>Session Cookies:</strong> Keep you logged in during your session</li>
              <li><strong>Authentication Tokens:</strong> Verify your identity and maintain secure access</li>
              <li><strong>Security Cookies:</strong> Protect against cross-site request forgery (CSRF) attacks</li>
            </ul>
          </div>
          <p className="mb-4">
            <strong>Can you disable them?</strong> No. These cookies are required for the platform to work. Disabling them will prevent you from using Cehpoint.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">3.2 Functional Cookies</h3>
          <p className="mb-4">
            Functional cookies allow us to remember your preferences and settings, providing a more personalized experience.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-2"><strong>Examples:</strong></p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>Preference Cookies:</strong> Remember your language, timezone, and display settings</li>
              <li><strong>Feature Toggles:</strong> Remember which features or views you prefer</li>
              <li><strong>UI State:</strong> Recall whether you've minimized or expanded certain sections</li>
            </ul>
          </div>
          <p className="mb-4">
            <strong>Can you disable them?</strong> Yes. However, disabling functional cookies may result in a less personalized experience and require you to re-enter preferences each time you visit.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">3.3 Performance and Analytics Cookies</h3>
          <p className="mb-4">
            These cookies help us understand how users interact with our platform, which pages are most popular, and where users encounter issues. This data is anonymized and used solely to improve our services.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-2"><strong>Examples:</strong></p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>Page View Tracking:</strong> Count visits to different pages</li>
              <li><strong>Session Duration:</strong> Measure how long users spend on the platform</li>
              <li><strong>Error Tracking:</strong> Identify technical issues and bugs</li>
              <li><strong>Feature Usage:</strong> Understand which features are most used</li>
            </ul>
          </div>
          <p className="mb-4">
            <strong>Can you disable them?</strong> Yes. Disabling analytics cookies will not affect your ability to use the platform, but it will limit our ability to improve based on user feedback and behavior.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">3.4 Marketing and Advertising Cookies (Not Currently Used)</h3>
          <p className="mb-4">
            At this time, Cehpoint <strong>does not use</strong> third-party advertising or marketing cookies to track you across other websites. If we decide to use such cookies in the future, we will update this policy and seek your consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">4. Third-Party Cookies</h2>
          <p className="mb-4">
            We may use select third-party services that set their own cookies to provide functionality on our platform. These include:
          </p>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">4.1 AI and Cloud Services</h3>
          <p className="mb-4">
            Our AI-powered features (resume parsing, question generation, answer analysis) may use third-party AI APIs that set cookies for authentication and session management.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">4.2 Payment Gateways</h3>
          <p className="mb-4">
            When you make a payment, our payment processors (e.g., Razorpay, Stripe) may set cookies to securely process your transaction. These cookies are governed by the respective third party's privacy policy.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">4.3 Analytics Services</h3>
          <p className="mb-4">
            We may use analytics tools (such as Google Analytics or similar services) to understand user behavior and improve our platform. These services may set their own cookies. You can opt out of Google Analytics tracking by using Google's opt-out browser add-on.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">4.4 Communication Tools</h3>
          <p className="mb-4">
            If you use integrated communication features (e.g., WhatsApp, email), those services may set cookies as per their own policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">5. How Long Do Cookies Last?</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">5.1 Session Cookies</h3>
          <p className="mb-4">
            Session cookies are temporary and are deleted when you close your browser. They are primarily used to maintain your login session and navigate the platform securely.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">5.2 Persistent Cookies</h3>
          <p className="mb-4">
            Persistent cookies remain on your device for a set period (e.g., 30 days, 1 year) or until you manually delete them. They are used to remember your preferences and settings across multiple sessions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">6. How to Manage and Control Cookies</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">6.1 Browser Settings</h3>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>View and delete cookies stored on your device</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies (not recommended, as this may prevent you from using many websites)</li>
            <li>Set your browser to notify you when a cookie is being set</li>
          </ul>
          <p className="mb-4">
            For instructions on managing cookies in your browser, visit the help section of your browser:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
            <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
            <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
          </ul>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">6.2 Opt-Out of Analytics</h3>
          <p className="mb-4">
            To opt out of Google Analytics tracking across all websites, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">6.3 Impact of Disabling Cookies</h3>
          <p className="mb-4">
            Please note that disabling or blocking cookies may:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Prevent you from logging in to your Cehpoint account</li>
            <li>Cause certain features to malfunction or become unavailable</li>
            <li>Require you to re-enter information or preferences each time you visit</li>
            <li>Result in a less personalized and optimized experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">7. Other Tracking Technologies</h2>
          
          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">7.1 Web Beacons and Pixels</h3>
          <p className="mb-4">
            We may use web beacons (also known as "tracking pixels") to track email open rates and measure the effectiveness of our communications. These are tiny, invisible images embedded in emails or web pages.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">7.2 Local Storage</h3>
          <p className="mb-4">
            We may use browser local storage (HTML5 local storage) to store data locally on your device for performance optimization and to improve user experience. This is similar to cookies but can store larger amounts of data.
          </p>

          <h3 className="text-xl font-semibold text-darkgrey mb-3 mt-4">7.3 Device Fingerprinting</h3>
          <p className="mb-4">
            We do <strong>not</strong> currently use device fingerprinting techniques. If this changes in the future, we will update this policy and notify you accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">8. Your Consent</h2>
          <p className="mb-4">
            By using Cehpoint's platform, you consent to our use of cookies as described in this Cookie Policy. When you first visit our website, you may see a cookie consent banner allowing you to accept or customize your cookie preferences.
          </p>
          <p className="mb-4">
            You can withdraw your consent at any time by adjusting your browser settings or contacting us at <a href="mailto:privacy@cehpoint.co.in" className="text-primary hover:underline">privacy@cehpoint.co.in</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">9. Updates to This Cookie Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. When we make changes, we will update the "Last Updated" date at the top of this page.
          </p>
          <p className="mb-4">
            We encourage you to review this policy periodically to stay informed about how we use cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">10. More Information</h2>
          <p className="mb-4">
            For more details on how we collect, use, and protect your personal data, please see our <a href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
          <p className="mb-4">
            If you want to learn more about cookies in general, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">allaboutcookies.org</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-darkgrey mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-2"><strong>Cehpoint - Privacy & Cookies</strong></p>
            <p className="mb-2">Email: <a href="mailto:privacy@cehpoint.co.in" className="text-primary hover:underline">privacy@cehpoint.co.in</a></p>
            <p className="mb-2">Phone: +91 33690 29331</p>
            <p className="mb-2">WhatsApp: +91 9091156095</p>
            <p className="mb-2">Support Hours: Monday - Saturday, 9 AM - 7 PM IST</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
