import Head from 'next/head';
import Link from 'next/link';

export default function UseCases() {
  const useCases = [
    {
      title: "🚀 Solo Entrepreneur: Run Your Entire Company Alone",
      subtitle: "The Ultimate Game-Changer for One-Person Businesses",
      color: "from-purple-600 to-pink-600",
      challenge: "As a solo entrepreneur, you're the CEO, HR manager, project manager, sales team, and accountant—all at once. You're constantly juggling hiring, client communication, project tracking, quotations, and invoicing while trying to focus on actual business growth.",
      solution: "Cehpoint becomes your complete virtual team",
      benefits: [
        {
          icon: "🤖",
          title: "AI as Your HR Department",
          description: "Post jobs, screen resumes, conduct automated assessments, and get ranked candidates—all while you sleep. Hire better people in 1/10th the time."
        },
        {
          icon: "💼",
          title: "Auto-Generated Quotations",
          description: "Collect client requirements via WhatsApp forms, generate professional quotations instantly. No more spending hours on proposals."
        },
        {
          icon: "📊",
          title: "Project Management on Autopilot",
          description: "Assign tasks (even to yourself), track progress, generate client reports automatically. Your clients see real-time updates without you lifting a finger."
        },
        {
          icon: "💰",
          title: "Automated Invoicing & Payments",
          description: "Track payments, send automated reminders, maintain financial records. Focus on delivering work, not chasing payments."
        },
        {
          icon: "👥",
          title: "Client Self-Service Dashboard",
          description: "Clients can check project status, download reports, view invoices—reducing your back-and-forth emails by 70%."
        },
        {
          icon: "📈",
          title: "Business Intelligence",
          description: "Get insights on hiring efficiency, project profitability, client patterns. Make data-driven decisions without hiring an analyst."
        }
      ],
      realWorldExample: {
        title: "Real Story: Rajesh's Web Development Agency",
        before: "Rajesh was a solo web developer spending 15+ hours weekly on admin tasks: screening freelancers, creating quotes, updating clients, managing invoices. He could only handle 3-4 projects simultaneously.",
        after: "After implementing Cehpoint, admin tasks dropped to 3 hours/week. He now manages 8-10 projects, hired 2 contractors (vetted by AI), and tripled revenue. The system handles quotations, client updates, and payment tracking automatically.",
        impact: "5x productivity increase, 3x revenue growth, 80% less administrative stress"
      },
      pricing: "One-time ₹15,000 investment replaces ₹30,000+/month you'd spend on separate tools for ATS, project management, invoicing, and CRM."
    },
    {
      title: "🏢 IT Services Company: Scale Without Hiring Chaos",
      subtitle: "Automate Technical Screening & Client Delivery",
      color: "from-blue-600 to-cyan-600",
      challenge: "Your senior developers waste 10-15 hours monthly conducting preliminary technical interviews. HR struggles to evaluate candidates for specialized roles. Client projects need constant updates and manual report generation.",
      solution: "AI-powered technical screening + automated client management",
      benefits: [
        {
          icon: "⚡",
          title: "Technical Assessment Automation",
          description: "AI generates role-specific coding questions, detects cheating patterns, ranks candidates by skill level. Developers only interview top 20%."
        },
        {
          icon: "🎯",
          title: "Reclaim 40+ Hours Monthly",
          description: "Senior developers focus on architecture and coding instead of screening juniors who won't make the cut anyway."
        },
        {
          icon: "📋",
          title: "Client Transparency Without Micromanagement",
          description: "Clients see real-time project progress, sprint reports, and code commits. Reduces 'status update' meetings by 60%."
        },
        {
          icon: "💡",
          title: "Automated Documentation",
          description: "Generate technical documentation, API docs, and project handoff materials automatically from your workflow."
        }
      ],
      realWorldExample: {
        title: "Case Study: TechSprint Solutions (25-person IT firm)",
        before: "3 senior developers spent 12 hours/week screening candidates. Client status update meetings consumed 10+ hours weekly. Manual report generation delayed invoicing.",
        after: "AI screens 100+ candidates monthly. Only qualified developers reach human interviews. Client dashboards eliminated 80% of update meetings. Reports auto-generate every sprint.",
        impact: "144 developer hours saved yearly = ₹8-10 lakh in productivity gains. Faster hiring = projects delivered 20% faster."
      },
      pricing: "₹15,000 one-time vs ₹15,000/month for enterprise ATS + project tools"
    },
    {
      title: "🎨 Digital Agency: Focus on Creative Work, Not Admin Hell",
      subtitle: "Automate Non-Creative Tasks",
      color: "from-pink-600 to-orange-600",
      challenge: "Agency founders spend 50% of time on admin: screening designers/copywriters, creating proposals, updating clients on campaign progress, managing freelancers.",
      solution: "Cehpoint handles operations while you handle creativity",
      benefits: [
        {
          icon: "🖼️",
          title: "Portfolio-Based Candidate Screening",
          description: "AI evaluates design portfolios, writing samples, and past campaign results. Ranks candidates objectively."
        },
        {
          icon: "📝",
          title: "Instant Proposals & Quotes",
          description: "Client fills a form → System generates detailed proposal with deliverables, timelines, pricing. Ready in 5 minutes."
        },
        {
          icon: "🚀",
          title: "Campaign Progress Dashboards",
          description: "Clients see social metrics, ad performance, content calendars in real-time. No more manual reporting."
        },
        {
          icon: "👨‍💼",
          title: "Freelancer Management",
          description: "Assign tasks to contractors, track deliverables, automate payments. Manage 20+ freelancers without spreadsheet chaos."
        }
      ],
      realWorldExample: {
        title: "Success Story: CreativeEdge Marketing (8-person agency)",
        before: "Founders spent 20 hours/week on operations: client updates, freelancer coordination, proposals. Could handle 12 clients max.",
        after: "Operations time reduced to 5 hours/week. Now managing 25+ clients with same team size. Automated client dashboards eliminated 15+ update calls weekly.",
        impact: "2x client capacity, 75% reduction in admin work, happier team focusing on actual creative work"
      },
      pricing: "₹15,000 one-time vs ₹8,000-12,000/month for agency management tools"
    },
    {
      title: "👔 Recruitment Firm: 10x Your Placement Capacity",
      subtitle: "Screen More, Place Faster, Earn More",
      color: "from-green-600 to-emerald-600",
      challenge: "Manually screening 500+ resumes weekly. Maintaining candidate databases across spreadsheets. Clients demand faster placements with higher quality candidates.",
      solution: "AI-powered bulk screening + intelligent candidate matching",
      benefits: [
        {
          icon: "🔍",
          title: "Bulk Resume Processing",
          description: "Upload 1000 resumes → AI ranks them by relevance in minutes. Works 24/7, never gets tired."
        },
        {
          icon: "🎯",
          title: "Client-Candidate Matching",
          description: "AI suggests best-fit candidates for each job opening based on skills, experience, salary expectations, location."
        },
        {
          icon: "📞",
          title: "Automated Follow-ups",
          description: "System sends interview reminders, status updates, feedback requests automatically via WhatsApp/email."
        },
        {
          icon: "💼",
          title: "Centralized Candidate Database",
          description: "Never lose a candidate again. Search by skills, availability, salary range instantly."
        }
      ],
      realWorldExample: {
        title: "Real Results: HireFast Consultancy",
        before: "3 recruiters screening 300 profiles weekly manually. Average placement time: 18 days. Lost candidates due to disorganized tracking.",
        after: "Same 3 recruiters now handle 1000+ profiles weekly with AI pre-screening. Placement time reduced to 9 days. Candidate retention improved 40%.",
        impact: "3x candidate volume, 50% faster placements, 60% more revenue with same headcount"
      },
      pricing: "₹15,000 one-time vs ₹10,000-25,000/month for recruiter ATS platforms"
    },
    {
      title: "🌟 Startup Benefits: Your Initial Tech Partner",
      subtitle: "We Grow With You",
      color: "from-indigo-600 to-purple-600",
      challenge: "Early-stage startups can't afford expensive enterprise tools. Need proven systems fast without vendor lock-in.",
      solution: "Cehpoint as your foundational business infrastructure",
      benefits: [
        {
          icon: "💡",
          title: "Innovation Collaboration",
          description: "As we grow our platform, you get free access to new AI features, integrations, and capabilities. Your feedback shapes our roadmap."
        },
        {
          icon: "📞",
          title: "Priority Support & Customization",
          description: "Need custom workflows for your industry? We can build them in 48-72 hours. Direct line to our development team."
        },
        {
          icon: "🚀",
          title: "Scale Without Tool Chaos",
          description: "Start with hiring automation. Add project management as you grow. Enable client dashboards when needed. All in one system."
        },
        {
          icon: "💰",
          title: "Locked-In Lifetime Pricing",
          description: "Pay ₹15,000 today, never pay again—even when we charge ₹50,000+ to new customers next year."
        },
        {
          icon: "🔓",
          title: "Full Source Code Access",
          description: "Want to modify something? You own the code. No vendor lock-in. Complete transparency."
        },
        {
          icon: "🤝",
          title: "Partnership, Not Just Software",
          description: "We're invested in your success. Your growth stories become our case studies. We win when you win."
        }
      ],
      realWorldExample: {
        title: "Partner Story: SkillBridge EdTech",
        before: "Bootstrapped startup using 7 different tools (₹18,000/month combined). Hiring took 3 weeks. Project tracking on Trello. Client updates via email.",
        after: "Consolidated to Cehpoint for ₹15,000 one-time. Hiring reduced to 1 week. Clients love real-time dashboards. Saved ₹2+ lakh in first year alone.",
        impact: "89% cost reduction in tooling, streamlined operations, better client satisfaction, invested savings into growth"
      },
      pricing: "₹15,000 one-time = tool costs saved in first month. ROI positive from day 1."
    }
  ];

  return (
    <>
      <Head>
        <title>Cehpoint Use Cases India - Solo Entrepreneur, IT Companies, Agencies | Real Success Stories</title>
        <meta name="description" content="Discover how 380+ Indian businesses use Cehpoint: Solo entrepreneurs running complete operations, IT companies automating hiring, agencies saving 20+ hours weekly, recruitment firms growing placements. Real results from Mumbai, Delhi, Bangalore startups. ₹15,000 one-time investment transforming businesses across India." />
        <meta name="keywords" content="solo entrepreneur India case study, IT hiring automation success, agency management tools India, recruitment automation results, startup ATS success stories, business management case studies India, one-person business tools, freelancer management India, digital agency automation, IT company recruitment success, staffing firm automation, Bangalore startup tools, Mumbai entrepreneur software, Delhi business automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://offer.cehpoint.co.in/use-cases" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://offer.cehpoint.co.in/use-cases" />
        <meta property="og:title" content="Real Success Stories - How Indian Businesses Use Cehpoint ATS" />
        <meta property="og:description" content="From solo entrepreneurs to IT companies - see how Cehpoint transformed 380+ Indian businesses. Real results, real time savings, real growth." />
        <meta property="og:image" content="https://offer.cehpoint.co.in/og-usecase.jpg" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cehpoint Success Stories - Indian Business Transformations" />
        <meta name="twitter:description" content="Solo entrepreneurs, IT companies, agencies - discover how Cehpoint helps Indian businesses automate and grow." />
        
        {/* Structured Data - Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Real Business Use Cases - How Cehpoint Transforms Different Industries in India",
            "description": "Comprehensive use cases showing how solo entrepreneurs, IT companies, digital agencies, recruitment firms, and startups use Cehpoint to automate and scale their operations.",
            "author": {
              "@type": "Organization",
              "name": "Cehpoint"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cehpoint",
              "logo": {
                "@type": "ImageObject",
                "url": "https://offer.cehpoint.co.in/logo.png"
              }
            },
            "datePublished": "2025-11-12",
            "dateModified": "2025-11-12"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-lightgrey to-white">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-primary cursor-pointer">Cehpoint</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/">
                  <span className="text-darkgrey hover:text-primary transition-colors font-medium cursor-pointer">Home</span>
                </Link>
                <Link href="/use-cases">
                  <span className="text-primary font-semibold cursor-pointer">Use Cases</span>
                </Link>
                <a href="/#features" className="text-darkgrey hover:text-primary transition-colors font-medium">Features</a>
                <a href="/#pricing" className="text-darkgrey hover:text-primary transition-colors font-medium">Pricing</a>
                <a href="https://wa.me/919091156095" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Get Started
                </a>
              </div>
              <div className="md:hidden flex gap-3">
                <Link href="/">
                  <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold text-sm">
                    Home
                  </button>
                </Link>
                <a href="https://wa.me/919091156095" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">
                  Start
                </a>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Businesses. Real Results. Real Automation.
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              See how Cehpoint transforms operations across industries—from solo entrepreneurs managing everything alone to enterprises scaling hiring efficiently.
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
              <div className={`bg-gradient-to-r ${useCase.color} text-white p-8 md:p-12`}>
                <h2 className="text-3xl md:text-5xl font-bold mb-3">{useCase.title}</h2>
                <p className="text-xl md:text-2xl opacity-90">{useCase.subtitle}</p>
              </div>

              <div className="p-8 md:p-12 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-darkgrey mb-3 flex items-center gap-2">
                      <span className="text-2xl">❌</span> The Challenge
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{useCase.challenge}</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-secondary p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-darkgrey mb-3 flex items-center gap-2">
                      <span className="text-2xl">✅</span> The Solution
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-semibold">{useCase.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-darkgrey mb-6 text-center">
                    🎯 Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCase.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all">
                        <div className="text-4xl mb-3">{benefit.icon}</div>
                        <h4 className="font-bold text-darkgrey mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-primary/20">
                  <h3 className="text-2xl font-bold text-darkgrey mb-6 flex items-center gap-2">
                    <span className="text-3xl">📖</span> {useCase.realWorldExample.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400">
                      <h4 className="font-bold text-darkgrey mb-2 flex items-center gap-2">
                        <span className="text-lg">📉</span> Before Cehpoint
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{useCase.realWorldExample.before}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-secondary">
                      <h4 className="font-bold text-darkgrey mb-2 flex items-center gap-2">
                        <span className="text-lg">📈</span> After Cehpoint
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{useCase.realWorldExample.after}</p>
                    </div>

                    <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-6 rounded-xl text-center">
                      <h4 className="font-bold text-xl mb-2">💥 Impact</h4>
                      <p className="text-lg">{useCase.realWorldExample.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-2xl text-center">
                  <h4 className="font-bold text-darkgrey text-xl mb-3">💰 Investment vs. Savings</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">{useCase.pricing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join 453+ businesses that chose efficiency over chaos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all">
                  See Pricing & Features
                </button>
              </Link>
              <a href="https://wa.me/919091156095" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-darkgrey text-white py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Cehpoint. All rights reserved.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/legal/refund" className="hover:text-white transition-colors">Refund Policy</Link>
              <a href="mailto:sales@cehpoint.co.in" className="hover:text-white transition-colors">sales@cehpoint.co.in</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
