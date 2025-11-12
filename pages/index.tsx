import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const QuizModal = dynamic(() => import('../components/QuizModal'), { ssr: false });
const CountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });
const ROICalculator = dynamic(() => import('../components/ROICalculator'), { ssr: false });

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: "📄",
      title: "Resume Upload & Auto Question Generation",
      description: "Upload resumes and let AI automatically generate relevant assessment questions tailored to each candidate's profile."
    },
    {
      icon: "🛡️",
      title: "Cheating Protection for Fair Assessment",
      description: "Advanced monitoring and anti-cheating mechanisms ensure the integrity of your candidate assessments."
    },
    {
      icon: "🤖",
      title: "1-Click AI Answer Analysis",
      description: "Instantly analyze candidate responses with AI-powered evaluation, saving hours of manual review time."
    },
    {
      icon: "📋",
      title: "Client Requirement Collection",
      description: "Systematically gather and organize client requirements with structured forms and automated workflows."
    },
    {
      icon: "💰",
      title: "Auto Quotation Generation",
      description: "Generate professional quotations automatically based on client requirements and your pricing models."
    },
    {
      icon: "📊",
      title: "Project Assignment & Progress Tracking",
      description: "Assign tasks to team members and track project progress in real-time with intuitive dashboards."
    },
    {
      icon: "📈",
      title: "Automatic Report Generation",
      description: "Create comprehensive project reports automatically with zero manual effort - ready to share instantly."
    },
    {
      icon: "👥",
      title: "Multi-User Access & Payment Integration",
      description: "Role-based access for HR, employees, and clients, plus integrated payment tracking and client dashboard."
    }
  ];

  const benefits = [
    { icon: "⚡", text: "Lifetime Free Hosting" },
    { icon: "🔄", text: "Free Updates Forever" },
    { icon: "🌐", text: "Real-Time Client Dashboard" },
    { icon: "💳", text: "Integrated Payment Tracking" },
    { icon: "👥", text: "Multi-User Access Control" },
    { icon: "🔒", text: "Secure Data Management" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "HR Director",
      text: "Cehpoint reduced our hiring time by 60%. The AI-powered assessment is a game-changer!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Digital Innovations",
      role: "CEO",
      text: "Best investment we made. No more monthly fees and we get lifetime updates. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Growth Agency",
      role: "Operations Manager",
      text: "The automated quotation and project tracking features saved us countless hours every week.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What happens after I make the payment?",
      answer: "Within 24 hours, our team will set up your complete system, provide training, and ensure you're ready to start using all features. You'll get dedicated onboarding support."
    },
    {
      question: "Is the ₹15,000 really a one-time payment?",
      answer: "Yes! Pay once and own it forever. No monthly fees, no hidden costs, no recurring charges. You get lifetime access, free hosting, and all future updates included."
    },
    {
      question: "Can I really save money compared to other solutions?",
      answer: "Absolutely! Most HR and project management tools charge ₹5,000-20,000 per month. That's ₹60,000-2,40,000 per year! Our one-time ₹15,000 pays for itself in just 1-3 months."
    },
    {
      question: "What if I need help or have technical issues?",
      answer: "You get priority support via phone, WhatsApp, and email. Our expert team responds within hours to ensure your business never stops running."
    },
    {
      question: "How secure is my data?",
      answer: "We use bank-level SSL encryption, GDPR-compliant data handling, and secure cloud hosting. Your candidate and client data is completely safe and private."
    },
    {
      question: "Can the system grow with my business?",
      answer: "Yes! Whether you're hiring 5 or 500 people, managing 2 or 200 projects, our system scales seamlessly. Unlimited users, unlimited projects, unlimited growth."
    }
  ];

  const comparisonData = [
    { feature: "One-Time Payment", cehpoint: true, others: false },
    { feature: "Lifetime Updates", cehpoint: true, others: false },
    { feature: "Free Hosting Forever", cehpoint: true, others: false },
    { feature: "AI-Powered Assessments", cehpoint: true, others: "Paid Extra" },
    { feature: "Cheating Protection", cehpoint: true, others: false },
    { feature: "Auto Quotation System", cehpoint: true, others: false },
    { feature: "Client Dashboard", cehpoint: true, others: "Paid Extra" },
    { feature: "Priority Support", cehpoint: true, others: "Paid Extra" },
    { feature: "Setup & Training", cehpoint: "Free", others: "₹10,000+" },
    { feature: "Monthly Cost", cehpoint: "₹0", others: "₹5,000-20,000" }
  ];

  return (
    <>
      <Head>
        <title>Cehpoint - AI-Powered ATS + Business Management System | ₹15,000 Lifetime Access</title>
        <meta name="description" content="Revolutionize your hiring and project management with Cehpoint's AI-powered all-in-one system. Resume analysis, cheating protection, auto quotations, and more. Only ₹15,000 one-time payment with lifetime free hosting." />
        <meta name="keywords" content="ATS, applicant tracking system, business management, project management, AI hiring, recruitment software, HR software, project tracking, India, affordable ATS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Cehpoint - AI-Powered ATS + Business Management System" />
        <meta property="og:description" content="Complete hiring and project management solution. Only ₹15,000 one-time payment with lifetime benefits." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QuizModal />

      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">Cehpoint</span>
              </div>
              
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-darkgrey hover:text-primary transition-colors font-medium">Features</a>
                <a href="#pricing" className="text-darkgrey hover:text-primary transition-colors font-medium">Pricing</a>
                <a href="#contact" className="text-darkgrey hover:text-primary transition-colors font-medium">Contact</a>
              </div>

              <div className="hidden md:block">
                <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Get Started
                </a>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-darkgrey p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden pb-4 animate-slideUp">
                <div className="flex flex-col space-y-3 bg-white rounded-lg p-4 shadow-lg border border-gray-100">
                  <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Features</a>
                  <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Pricing</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Contact</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 active:bg-blue-800 shadow-md">Get Started</a>
                </div>
              </div>
            )}
          </div>
        </nav>

        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 AI-Powered Solution
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgrey mb-6 leading-tight">
                Revolutionize Your Hiring &<br />
                <span className="text-gradient">
                  Project Management
                </span>
              </h1>
              
              <div className="inline-block bg-yellow-100 border-2 border-yellow-400 px-4 md:px-6 py-2 rounded-full mb-4">
                <span className="text-accent font-bold text-xs md:text-sm">⚡ LIMITED TIME: Save ₹35,000 • Only 47 Spots Left!</span>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Complete AI-powered ATS + Business Management System.<br />
                Manage recruitment to project delivery in one intelligent platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <a href="#contact" className="group bg-secondary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-green-700 active:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 touch-manipulation">
                  Start Free Trial
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#features" className="bg-white text-primary border-2 border-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-lightgrey active:bg-blue-50 transition-all shadow-md hover:shadow-lg active:scale-95 touch-manipulation">
                  Explore Features
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-12">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Setup in 24 hours</span>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">₹15,000</div>
                    <div className="text-sm text-gray-600">One-Time Payment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">Lifetime</div>
                    <div className="text-sm text-gray-600">Free Hosting & Updates</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">8-in-1</div>
                    <div className="text-sm text-gray-600">Powerful Features</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Happy Businesses</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">10K+</div>
                <div className="text-gray-600">Candidates Screened</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">80%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-lightgrey">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkgrey mb-4">
                Everything You Need in One Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI-powered candidate assessment to automated project reporting,
                streamline your entire business workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-darkgrey mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary to-blue-700">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tired of Slow Hiring and Messy Project Handling?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              Cehpoint's intelligent system eliminates manual work, prevents assessment cheating,
              automates quotations, and gives your clients real-time project visibility.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="text-sm font-medium">{benefit.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                Why Businesses Choose Cehpoint
              </h2>
              <p className="text-xl text-gray-600">
                Experience the difference of a truly integrated solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-darkgrey mb-4">Lightning Fast Setup</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get up and running in minutes, not weeks. Our expert team handles the complete setup and training for you.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-darkgrey mb-4">No Recurring Fees</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike subscription-based tools that cost ₹5,000-20,000/month, pay once and own it forever with free lifetime updates.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-darkgrey mb-4">Dedicated Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get priority support from our expert team. We're always here to help you maximize your investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-lightgrey">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                See How Much You'll Save
              </h2>
              <p className="text-xl text-gray-600">
                Use our interactive calculator to discover your exact ROI
              </p>
            </div>
            <ROICalculator />
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24 px-4 bg-gradient-to-b from-lightgrey to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkgrey mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                No monthly fees. No hidden costs. Just one payment for lifetime access.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-primary">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white text-center py-6">
                  <div className="inline-block bg-yellow-400 text-darkgrey px-4 py-1 rounded-full text-sm font-bold mb-4">
                    ⭐ BEST VALUE - LIMITED TIME
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Complete Business Suite</h3>
                  <p className="text-blue-100 mt-2">Everything you need to scale your business</p>
                </div>

                <div className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-2xl text-gray-400 line-through">₹50,000</span>
                      <span className="text-5xl md:text-6xl font-bold text-primary">₹15,000</span>
                    </div>
                    <p className="text-gray-600 text-lg">One-time payment • $180 USD</p>
                    <div className="inline-block mt-4 bg-secondary/10 text-secondary px-6 py-2 rounded-full font-semibold">
                      Save ₹35,000 (70% OFF)
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>All 8 Premium Features</strong> - Complete ATS + Business Management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Lifetime Free Hosting</strong> - No server costs ever</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Free Updates Forever</strong> - Always get the latest features</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Multi-User Access</strong> - HR, Employees & Clients</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Priority Support</strong> - Expert assistance when you need it</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Setup & Training</strong> - We help you get started</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
                    <div className="text-center">
                      <p className="text-lg font-bold text-darkgrey mb-3">💰 Calculate Your Savings:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Other Tools (per year)</p>
                          <p className="text-2xl font-bold text-accent">₹60,000 - ₹2,40,000</p>
                          <p className="text-xs text-gray-500">Monthly subscriptions add up!</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Cehpoint (lifetime)</p>
                          <p className="text-2xl font-bold text-secondary">₹15,000</p>
                          <p className="text-xs text-gray-500">Pay once, save forever!</p>
                        </div>
                      </div>
                      <div className="bg-secondary text-white p-4 rounded-lg">
                        <p className="text-lg md:text-xl font-bold">
                          Save ₹45,000 - ₹2,25,000 in Year 1 Alone! 💰
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-primary rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-darkgrey mb-4 text-center text-lg">What You Get With Your ₹15,000 Investment:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Resume parsing AI (worth ₹8,000/year)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Cheating detection system (worth ₹10,000/year)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Project management suite (worth ₹15,000/year)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Client portal & dashboard (worth ₹12,000/year)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Unlimited cloud hosting (worth ₹8,000/year)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">✓</span>
                        <span>Premium support access (worth ₹6,000/year)</span>
                      </div>
                    </div>
                    <p className="text-center mt-4 font-bold text-primary">
                      Total Value: ₹59,000/year • You Pay: ₹15,000 Once
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="block w-full bg-gradient-to-r from-secondary to-green-600 text-white text-center py-5 rounded-xl font-bold text-xl hover:from-green-600 hover:to-secondary transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    Get Started Now →
                  </a>

                  <p className="text-center text-gray-500 text-sm mt-6">
                    🔒 Secure payment • 💯 100% satisfaction guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                🛡️ Our Iron-Clad Guarantees
              </h2>
              <p className="text-xl text-gray-600">
                Your success is guaranteed. We stand behind our product 100%
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-secondary hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-6xl mb-6 text-center">💯</div>
                <h3 className="text-2xl font-bold text-darkgrey mb-4 text-center">100% Satisfaction Guarantee</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Not happy? Get a full refund within 30 days. No questions asked. We're confident you'll love it, but your satisfaction is our priority.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-6xl mb-6 text-center">⚡</div>
                <h3 className="text-2xl font-bold text-darkgrey mb-4 text-center">24-Hour Setup Guarantee</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Your system will be fully operational within 24 hours of payment. If we miss this deadline, get ₹5,000 discount or free premium support upgrade.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-accent hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-6xl mb-6 text-center">🔒</div>
                <h3 className="text-2xl font-bold text-darkgrey mb-4 text-center">Lifetime Support Guarantee</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Priority support for life. Technical issues? Questions? We respond within 4 hours during business hours. Your success is our success.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  💰 ROI Guarantee: Break Even in 3 Months or Less
                </h3>
                <p className="text-lg md:text-xl leading-relaxed opacity-95">
                  If our system doesn't save you at least ₹5,000 in time and efficiency within 90 days, 
                  we'll work with you for FREE until it does. Your investment will pay for itself – guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                Cehpoint vs. Other Solutions
              </h2>
              <p className="text-xl text-gray-600">
                See why smart businesses choose Cehpoint
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-blue-700 text-white">
                    <th className="py-4 px-6 text-left text-lg font-bold">Feature</th>
                    <th className="py-4 px-6 text-center text-lg font-bold">Cehpoint</th>
                    <th className="py-4 px-6 text-center text-lg font-bold">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                      <td className="py-4 px-6 font-semibold text-darkgrey">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.cehpoint === true ? (
                          <div className="flex justify-center">
                            <div className="bg-secondary text-white rounded-full p-1">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <span className="font-bold text-primary">{row.cehpoint}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.others === false ? (
                          <div className="flex justify-center">
                            <div className="bg-accent text-white rounded-full p-1">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-600">{row.others}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <a href="#contact" className="inline-block bg-secondary text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105">
                Choose Cehpoint - Save ₹35,000 Today
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-lightgrey to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know before getting started
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-darkgrey mb-3 flex items-start gap-3">
                    <span className="text-primary text-2xl">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    <strong className="text-secondary">A:</strong> {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-blue-50 border-2 border-primary rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-darkgrey mb-4">Still Have Questions?</h3>
              <p className="text-gray-700 mb-6">Our team is ready to answer all your questions and show you how Cehpoint can transform your business.</p>
              <a href="#contact" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">
                Talk to Our Expert Team
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-lightgrey">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                Trusted by Growing Businesses Across India
              </h2>
              <p className="text-xl text-gray-600">
                See what our clients say about transforming their operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-bold text-darkgrey">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 flex-wrap justify-center">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkgrey mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600">
                Get in touch with our team and start your journey to smarter business management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <a
                href="tel:+913369029331"
                className="bg-gradient-to-br from-blue-50 to-primary/10 border-2 border-primary rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-darkgrey mb-2">Call Us</h3>
                <p className="text-primary font-semibold text-lg">+91 33690 29331</p>
                <p className="text-gray-600 text-sm mt-2">Mon-Sat, 9 AM - 7 PM IST</p>
              </a>

              <a
                href="https://wa.me/919091156095"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-green-50 to-secondary/10 border-2 border-secondary rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-darkgrey mb-2">WhatsApp</h3>
                <p className="text-secondary font-semibold text-lg">+91 9091156095</p>
                <p className="text-gray-600 text-sm mt-2">Instant chat support</p>
              </a>

              <a
                href="mailto:sales@cehpoint.co.in"
                className="bg-gradient-to-br from-red-50 to-accent/10 border-2 border-accent rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-darkgrey mb-2">Email</h3>
                <p className="text-accent font-semibold text-lg break-all">sales@cehpoint.co.in</p>
                <p className="text-gray-600 text-sm mt-2">We reply within 24 hours</p>
              </a>
            </div>

            <div className="mt-16 bg-gradient-to-r from-accent via-red-600 to-accent rounded-3xl p-8 md:p-12 text-white text-center max-w-5xl mx-auto shadow-2xl">
              <div className="inline-block bg-yellow-400 text-darkgrey px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                ⏰ LIMITED TIME OFFER - PRICE INCREASING SOON!
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Don't Miss Out: Only 47 Spots Left at This Price!
              </h3>
              <p className="text-xl md:text-2xl mb-6 opacity-95 leading-relaxed">
                After we reach 500 customers, the price will increase to ₹30,000. 
                <br />Lock in your ₹15,000 lifetime access NOW and save ₹15,000 more!
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-2xl font-bold mb-4">⚡ Act Fast: Offer Expires in</p>
                <CountdownTimer />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+913369029331" className="bg-white text-accent px-10 py-5 rounded-xl font-bold text-xl hover:bg-lightgrey transition-all shadow-2xl transform hover:scale-105">
                  🔥 Call Now: +91 33690 29331
                </a>
                <a href="https://wa.me/919091156095" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-700 transition-all shadow-2xl transform hover:scale-105">
                  💬 Get Started on WhatsApp
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Join 453 smart businesses who already locked in this price
              </p>
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Be Smart. Be Organized. Choose Cehpoint.
              </h3>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Join hundreds of businesses that have transformed their operations with our AI-powered system
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+913369029331" className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-lightgrey transition-all shadow-lg">
                  Call Now: +91 33690 29331
                </a>
                <a href="https://wa.me/919091156095" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-darkgrey text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">Cehpoint</span>
              <p className="text-gray-400 mt-2">AI-Powered ATS + Business Management System</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Cehpoint. All rights reserved. | Empowering businesses with intelligent automation.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
