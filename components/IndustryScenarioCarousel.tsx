import { useState } from 'react';

export default function IndustryScenarioCarousel() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      industry: "IT Services & Software Development",
      icon: "💻",
      color: "from-blue-500 to-blue-700",
      painPoints: [
        "Senior developers wasting 10-12 hours/month on basic technical screening",
        "HR struggling to evaluate technical candidates they don't understand",
        "Clients constantly asking for project updates and quotations",
        "Manual documentation eating up development time"
      ],
      automationWorkflow: [
        "AI screens technical candidates automatically, filters out unqualified applicants",
        "Senior developers only interview top 20% pre-screened candidates",
        "Client requirement → Auto quotation → Auto project documentation",
        "Clients get real-time dashboards, no more 'Where is my project?' calls"
      ],
      results: {
        timeSaved: "30-40 hours/month team-wide",
        efficiency: "85% faster hiring process",
        clientSatisfaction: "95% reduction in status update calls",
        roi: "₹2-3 lakhs saved annually in productive time"
      },
      testimonial: {
        quote: "Our developers are building features again instead of interviewing every candidate. Game changer.",
        author: "Rahul Mehta",
        role: "CTO, CloudTech Solutions"
      }
    },
    {
      industry: "Digital Marketing & Creative Agencies",
      icon: "🎨",
      color: "from-purple-500 to-pink-600",
      painPoints: [
        "HR doesn't know how to evaluate creative portfolios or marketing skills",
        "Hiring graphic designers, content writers takes forever with subjective assessments",
        "Clients need frequent campaign reports and quotations for new projects",
        "Juggling multiple clients and projects manually is chaotic"
      ],
      automationWorkflow: [
        "Upload candidate portfolios, AI generates relevant creative assessment questions",
        "Automated initial screening saves HR 15+ hours/month on filtering",
        "Client submits campaign requirement → Instant quotation with timeline",
        "Auto-generated campaign reports and progress dashboards for clients"
      ],
      results: {
        timeSaved: "20-25 hours/month across team",
        efficiency: "70% faster creative hiring",
        clientSatisfaction: "Instant quotations improve conversion by 40%",
        roi: "₹1.5-2 lakhs saved annually"
      },
      testimonial: {
        quote: "We used to spend days creating client reports. Now it's automatic. More time for creative work!",
        author: "Sneha Kapoor",
        role: "Founder, BrandVibe Agency"
      }
    },
    {
      industry: "Staffing & Recruitment Agencies",
      icon: "👔",
      color: "from-green-500 to-teal-600",
      painPoints: [
        "Screening hundreds of candidates monthly is overwhelming",
        "Clients demand fast turnaround for candidate shortlists",
        "Manual resume parsing and organization is time-consuming",
        "Sending individual reports to each client is repetitive"
      ],
      automationWorkflow: [
        "Bulk resume upload → AI auto-generates questions based on job requirements",
        "Automated cheating detection ensures assessment integrity",
        "Shortlisted candidates auto-generated with scores and analysis",
        "Clients get instant access to candidate reports via dashboard"
      ],
      results: {
        timeSaved: "40-50 hours/month (high-volume screening)",
        efficiency: "Process 3x more candidates with same team",
        clientSatisfaction: "Clients love instant candidate visibility",
        roi: "₹3-4 lakhs saved annually"
      },
      testimonial: {
        quote: "We tripled our candidate processing capacity without hiring more HR staff. Incredible ROI.",
        author: "Vikram Singh",
        role: "MD, TalentBridge Recruitment"
      }
    },
    {
      industry: "Consulting & Professional Services",
      icon: "💼",
      color: "from-indigo-500 to-blue-600",
      painPoints: [
        "Hiring consultants requires evaluating complex problem-solving skills",
        "Creating customized proposals and quotations for each client is tedious",
        "Clients need transparency on project milestones and deliverables",
        "Manual tracking of multiple consulting engagements is error-prone"
      ],
      automationWorkflow: [
        "AI generates case-study style assessments for consultant candidates",
        "Client requirement forms → Auto quotation with scope and timeline",
        "Project milestones auto-created and visible to clients in real-time",
        "Automated reporting on consulting deliverables and outcomes"
      ],
      results: {
        timeSaved: "25-30 hours/month",
        efficiency: "60% faster proposal generation",
        clientSatisfaction: "Real-time visibility builds trust and reduces churn",
        roi: "₹2-2.5 lakhs saved annually"
      },
      testimonial: {
        quote: "Clients appreciate the transparency. We close deals faster with instant, professional quotations.",
        author: "Anjali Desai",
        role: "Partner, Strategy First Consulting"
      }
    },
    {
      industry: "E-commerce & Retail Businesses",
      icon: "🛒",
      color: "from-red-500 to-orange-600",
      painPoints: [
        "Hiring customer support, warehouse staff, sales associates in bulk is chaotic",
        "High turnover means constant recruitment cycles",
        "Vendor quotations and inventory project management is manual",
        "Tracking seasonal hiring and project deadlines is stressful"
      ],
      automationWorkflow: [
        "Bulk candidate screening for customer support and sales roles",
        "AI-generated assessments for customer service skills and product knowledge",
        "Vendor/supplier requirement → Auto quotation and order tracking",
        "Automated hiring reports and workforce planning dashboards"
      ],
      results: {
        timeSaved: "30-35 hours/month during peak hiring seasons",
        efficiency: "Handle seasonal hiring spikes without panic",
        clientSatisfaction: "Better vendor communication with auto quotations",
        roi: "₹2.5-3 lakhs saved annually"
      },
      testimonial: {
        quote: "Seasonal hiring used to be a nightmare. Now we onboard 50+ people in days, not weeks.",
        author: "Karan Bhatia",
        role: "Operations Head, ShopEase Retail"
      }
    },
    {
      industry: "Manufacturing & Industrial",
      icon: "🏭",
      color: "from-gray-600 to-gray-800",
      painPoints: [
        "Hiring skilled technicians and engineers requires technical evaluation",
        "Client RFQs (Request for Quotations) require manual calculations",
        "Project tracking across multiple production lines is complex",
        "Compliance documentation and reporting is labor-intensive"
      ],
      automationWorkflow: [
        "Technical skill assessments for engineers and technicians",
        "Client RFQ → Auto quotation based on material costs and timelines",
        "Production project tracking with auto-generated progress reports",
        "Compliance and quality reports auto-generated for clients"
      ],
      results: {
        timeSaved: "25-30 hours/month",
        efficiency: "Faster RFQ response time improves win rate",
        clientSatisfaction: "Clients trust transparent production tracking",
        roi: "₹2-3 lakhs saved annually"
      },
      testimonial: {
        quote: "RFQ response time dropped from days to hours. We're winning more contracts now.",
        author: "Suresh Naidu",
        role: "GM Operations, PrecisionTech Manufacturing"
      }
    }
  ];

  const handlePrevious = () => {
    setActiveScenario((prev) => (prev === 0 ? scenarios.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveScenario((prev) => (prev === scenarios.length - 1 ? 0 : prev + 1));
  };

  const scenario = scenarios[activeScenario];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-lightgrey to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎯 Real Industry Scenarios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkgrey mb-4">
            Does This Sound Like Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses in different industries are saving time and growing faster with Cehpoint
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {scenarios.map((s, index) => (
            <button
              key={index}
              onClick={() => setActiveScenario(index)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                activeScenario === index
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {s.icon} {s.industry.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Scenario Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${scenario.color} text-white p-8 md:p-12`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">{scenario.icon}</div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold">{scenario.industry}</h3>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Pain Points */}
              <div>
                <h4 className="text-2xl font-bold text-accent mb-4">😫 Common Pain Points</h4>
                <ul className="space-y-3">
                  {scenario.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cehpoint Solution */}
              <div>
                <h4 className="text-2xl font-bold text-secondary mb-4">✅ How Cehpoint Helps</h4>
                <ul className="space-y-3">
                  {scenario.automationWorkflow.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
              <h4 className="text-2xl font-bold text-darkgrey mb-4">📊 Real Results</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{scenario.results.timeSaved}</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">{scenario.results.efficiency}</div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">{scenario.results.roi}</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">⭐⭐⭐⭐⭐</div>
                  <div className="text-sm text-gray-600">Client Trust</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6">
              <p className="text-lg italic mb-4">"{scenario.testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  {scenario.icon}
                </div>
                <div>
                  <p className="font-bold">{scenario.testimonial.author}</p>
                  <p className="text-sm opacity-90">{scenario.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            className="bg-white border-2 border-primary text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="Previous scenario"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-gray-600 font-medium">
            {activeScenario + 1} / {scenarios.length}
          </div>

          <button
            onClick={handleNext}
            className="bg-white border-2 border-primary text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="Next scenario"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            👆 If any of these scenarios match your business, Cehpoint can help.
          </p>
          <a
            href="https://wa.me/919091156095?text=Hi!%20I%20saw%20the%20industry%20scenarios%20and%20want%20to%20discuss%20how%20Cehpoint%20can%20help%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Discuss Your Custom Needs
          </a>
        </div>
      </div>
    </section>
  );
}
