export default function AffordabilityMessage() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
            🤔 Why So Affordable? Here's The Truth.
          </h2>
          <p className="text-xl text-gray-600">
            We believe in rapid business adoption over high profit margins
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-darkgrey mb-4 flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  Other SaaS Platforms
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">→</span>
                    <span>₹5,000-20,000 <strong>every month</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">→</span>
                    <span>Hidden charges for storage, users, features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">→</span>
                    <span>Lock you into long-term contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">→</span>
                    <span><strong>₹60,000-2,40,000 per year!</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">💸 Traditional Cost Over 3 Years</h4>
                <div className="text-4xl font-bold">₹1.8L - ₹7.2L+</div>
                <p className="text-sm opacity-90 mt-2">Plus setup fees, training costs, and integration charges</p>
              </div>
            </div>

            <div>
              <div className="bg-green-50 border-l-4 border-secondary p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold text-darkgrey mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Cehpoint's Strategy
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">→</span>
                    <span><strong>₹15,000 one-time</strong> (or ₹17,700 with GST)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">→</span>
                    <span>Zero monthly fees. Forever.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">→</span>
                    <span>Free lifetime hosting + updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">→</span>
                    <span>Full source code access included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary to-green-600 text-white p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">🎯 Your Cost Over 3 Years</h4>
                <div className="text-4xl font-bold">₹15,000</div>
                <p className="text-sm opacity-90 mt-2">That's it. Nothing more. Ever.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t-2 border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-center text-darkgrey mb-6">
              🚀 Our Mission: Faster Business Adoption
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="font-bold text-darkgrey mb-2">Accessibility First</h4>
                <p className="text-gray-600 text-sm">
                  We want every startup, agency, and solo entrepreneur to access enterprise-grade automation—not just big corporations.
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-darkgrey mb-2">Rapid Deployment</h4>
                <p className="text-gray-600 text-sm">
                  Lower barrier = faster onboarding. Get 100 businesses automated faster than getting 10 at ₹10,000/month.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl mb-3">💚</div>
                <h4 className="font-bold text-darkgrey mb-2">Long-Term Partnership</h4>
                <p className="text-gray-600 text-sm">
                  We grow when you grow. Happy clients refer others, creating sustainable growth for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 text-center">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong className="text-yellow-700">⚠️ Honest Disclaimer:</strong> This introductory pricing won't last forever. 
              As we add more advanced AI features and scale our infrastructure, prices will increase for new customers. 
              <strong className="text-primary"> Lock in ₹15,000 today</strong> and own it for life—even when we raise prices to ₹25,000+ next year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
