export default function AutomationJourney() {
  const journeySteps = [
    {
      step: "1",
      title: "Client Sends Requirements",
      icon: "📝",
      description: "Your client fills out a simple requirement form via WhatsApp or your portal. No lengthy emails, no confusion.",
      benefits: [
        "Structured requirement gathering",
        "No back-and-forth emails",
        "Automatic data validation"
      ],
      automation: "100% automated intake"
    },
    {
      step: "2",
      title: "Instant Quotation Generation",
      icon: "💰",
      description: "Based on requirements, our AI instantly generates professional quotations. Your client gets pricing immediately.",
      benefits: [
        "No manual calculation needed",
        "Consistent pricing logic",
        "Professional PDF quotations",
        "Client sees value breakdown"
      ],
      automation: "Generated in seconds"
    },
    {
      step: "3",
      title: "Auto Development Documentation",
      icon: "📄",
      description: "Upon project acceptance, detailed development documentation is automatically generated and shared with your developers.",
      benefits: [
        "Clear project specifications",
        "No manual documentation work",
        "Developers know exactly what to build",
        "Timeline and milestones auto-created"
      ],
      automation: "Zero manual effort"
    },
    {
      step: "4",
      title: "Project Delivery & Reports",
      icon: "📊",
      description: "Automated progress tracking, client dashboards, and report generation. Your client stays informed without constant calls.",
      benefits: [
        "Real-time client visibility",
        "Automatic status reports",
        "No 'Where is my project?' calls",
        "Professional delivery reports"
      ],
      automation: "Always up-to-date"
    }
  ];

  const teamBenefits = [
    {
      role: "HR Team",
      icon: "👥",
      before: "Spending 15-20 hours/month screening resumes, scheduling interviews, and filtering unqualified candidates",
      after: "Focus on strategic hiring, employee engagement, culture building, and retention programs",
      timeSaved: "15-20 hours/month"
    },
    {
      role: "Sales/Project Team",
      icon: "💼",
      before: "Manually creating quotations, chasing clients for requirements, explaining project scope repeatedly",
      after: "More time for client relationships, closing deals, and strategic planning",
      timeSaved: "10-15 hours/month"
    },
    {
      role: "Developers",
      icon: "💻",
      before: "Conducting basic technical rounds for every candidate, explaining requirements to HR",
      after: "Only interview pre-screened top candidates, focus on building products and features",
      timeSaved: "8-12 hours/month"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Complete Automation Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkgrey mb-6">
            From Client Requirement to Project Delivery
            <br />
            <span className="text-gradient">Fully Automated</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Cehpoint eliminates repetitive tasks and lets your team focus on what matters—growing your business.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%+1rem)] w-6 h-0.5 bg-gradient-to-r from-primary to-secondary z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                    <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{step.icon}</div>
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-darkgrey mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                
                <div className="space-y-2 mb-4">
                  {step.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-block bg-green-50 text-secondary px-3 py-1.5 rounded-lg text-xs font-semibold">
                  ⚡ {step.automation}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Benefits Section */}
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Team Won't Work Harder—They'll Work Smarter
            </h3>
            <p className="text-xl opacity-90">
              No additional hiring needed. No HR overload. Just someone to send links to candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{benefit.role}</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm opacity-75 mb-2">Before Cehpoint:</p>
                    <p className="text-sm bg-red-500/20 p-3 rounded-lg">{benefit.before}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm opacity-75 mb-2">After Cehpoint:</p>
                    <p className="text-sm bg-green-500/20 p-3 rounded-lg">{benefit.after}</p>
                  </div>

                  <div className="bg-yellow-400/90 text-darkgrey px-4 py-2 rounded-lg font-bold text-center">
                    ⏱️ {benefit.timeSaved} reclaimed
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-xl font-semibold mb-2">
                💡 Human-in-the-Loop Approach
              </p>
              <p className="text-lg opacity-90">
                We don't replace your team—we supercharge them. HR still makes all hiring decisions. 
                Your team still controls everything. The system just handles the boring, repetitive stuff.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919091156095?text=Hi!%20I%20want%20to%20learn%20more%20about%20how%20Cehpoint%20automates%20my%20business%20workflow."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            See How It Works for Your Business
          </a>
        </div>
      </div>
    </section>
  );
}
