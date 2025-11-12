export default function IndustryGuarantees() {
  const guarantees = [
    {
      icon: "⚡",
      title: "24-48 Hour Setup Guarantee",
      description: "Your system will be up and running within 24-48 hours, or we'll refund your money. No excuses, no delays.",
      industries: "All Industries"
    },
    {
      icon: "💰",
      title: "ROI Within 3 Months or Money Back",
      description: "If you don't save at least 15 hours/month within 90 days, we'll give you a full refund. We're that confident.",
      industries: "All Industries"
    },
    {
      icon: "🔒",
      title: "Your Data, Your Control",
      description: "100% data ownership. Export anytime. We don't sell your data. Period.",
      industries: "All Industries"
    },
    {
      icon: "🎯",
      title: "Custom Industry Fit Guarantee",
      description: "Not a generic solution. We customize the platform for your industry within 72 hours at no extra cost.",
      industries: "IT, Agencies, Consulting, Manufacturing"
    },
    {
      icon: "👨‍💼",
      title: "Human-in-the-Loop Promise",
      description: "Our AI assists, but YOU stay in control. HR makes all hiring decisions. No automation without your approval.",
      industries: "All Industries"
    },
    {
      icon: "📞",
      title: "Priority Support Guarantee",
      description: "Reach a real human within 2-4 hours (Mon-Sat, 9 AM - 7 PM IST). No chatbots, no endless tickets.",
      industries: "All Industries"
    },
    {
      icon: "🔄",
      title: "Lifetime Free Updates",
      description: "Every new feature we build is yours—forever. No upgrade fees, no additional costs. Ever.",
      industries: "All Industries"
    },
    {
      icon: "🌐",
      title: "99.9% Uptime Guarantee",
      description: "Your business doesn't stop, neither do we. Reliable hosting with enterprise-grade infrastructure.",
      industries: "All Industries"
    },
    {
      icon: "📊",
      title: "Transparent Pricing Promise",
      description: "₹15,000 one-time. No hidden fees, no monthly subscriptions, no surprise charges. What you see is what you pay.",
      industries: "All Industries"
    },
    {
      icon: "🚫",
      title: "No Vendor Lock-In",
      description: "Source code access for eligible customers. Connect your own domain. Move your data anytime. You're never trapped.",
      industries: "Tech Companies, Agencies"
    },
    {
      icon: "✅",
      title: "Compliance & Security Guarantee",
      description: "GDPR & SOC 2 compliant. Your candidate and client data is protected with bank-level encryption.",
      industries: "Staffing, Consulting, All Regulated Industries"
    },
    {
      icon: "🎓",
      title: "Free Training & Onboarding",
      description: "Personalized training for your team. We don't just hand you software—we ensure you know how to use it.",
      industries: "All Industries"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🛡️ Our Ironclad Guarantees
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkgrey mb-6">
            We Stand Behind Every Promise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No fluff. No fine print. Just honest commitments backed by real action. Here's what you can count on when you choose Cehpoint.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-secondary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{guarantee.icon}</div>
              <h3 className="text-xl font-bold text-darkgrey mb-3">{guarantee.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{guarantee.description}</p>
              <div className="inline-block bg-blue-50 text-primary px-3 py-1.5 rounded-lg text-xs font-semibold">
                {guarantee.industries}
              </div>
            </div>
          ))}
        </div>

        {/* Special Industry-Specific Guarantees */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Value Guarantees
            </h3>
            <p className="text-xl opacity-90">
              We understand different industries have different needs. Here's what we guarantee for your sector:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">💻</div>
              <h4 className="text-2xl font-bold mb-3">Tech Companies</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Developers save 8-12 hours/month on screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Technical assessments tailored to your tech stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Client documentation auto-generated from requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="text-2xl font-bold mb-3">Agencies</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Instant client quotations improve conversion by 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Portfolio-based creative assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Automated campaign reports save 15+ hours/month</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">👔</div>
              <h4 className="text-2xl font-bold mb-3">Staffing Firms</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Process 3x more candidates with same team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Bulk resume processing and auto-scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Client dashboards eliminate "Where's my candidate?" calls</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="text-2xl font-bold mb-3">Consulting</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>60% faster proposal generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Case-study assessments for consultant hiring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Real-time project transparency builds client trust</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">🛒</div>
              <h4 className="text-2xl font-bold mb-3">E-commerce/Retail</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Handle seasonal hiring spikes effortlessly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Bulk customer support and sales assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Vendor management and auto quotations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">🏭</div>
              <h4 className="text-2xl font-bold mb-3">Manufacturing</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>RFQ response time drops from days to hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Technical skill assessments for engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Compliance and quality reports auto-generated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="inline-block bg-yellow-400 text-darkgrey px-6 py-3 rounded-full text-lg font-bold mb-6">
            🏆 Our Ultimate Guarantee
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-darkgrey mb-6">
            If We Don't Deliver, You Don't Pay
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're not just selling software—we're investing in your success. If Cehpoint doesn't save you time, reduce workload, or improve your business operations, we'll refund every rupee. No questions asked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919091156095?text=Hi!%20I%20want%20to%20learn%20more%20about%20Cehpoint's%20guarantees%20and%20how%20they%20apply%20to%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ask About Our Guarantees
            </a>
            <a
              href="/legal/refund"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-lightgrey transition-all shadow-md"
            >
              Read Our Refund Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
