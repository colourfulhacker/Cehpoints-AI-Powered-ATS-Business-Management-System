import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import AnimatedText from '../components/AnimatedText';
import AutomationJourney from '../components/AutomationJourney';
import IndustryScenarioCarousel from '../components/IndustryScenarioCarousel';
import IndustryGuarantees from '../components/IndustryGuarantees';
import AffordabilityMessage from '../components/AffordabilityMessage';

const CountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });
const EnhancedROICalculator = dynamic(() => import('../components/EnhancedROICalculator'), { ssr: false });
const ComprehensiveAssessment = dynamic(() => import('../components/ComprehensiveAssessment'), { ssr: false });
const CurrencyConverter = dynamic(() => import('../components/CurrencyConverter'), { ssr: false });
const DirectOrderForm = dynamic(() => import('../components/DirectOrderForm'), { ssr: false });
const SocialShareButtons = dynamic(() => import('../components/SocialShareButtons'), { ssr: false });

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAssessment, setOpenAssessment] = useState(false);

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
      name: "Rajesh Mehta",
      company: "CloudScale IT Services, Mumbai",
      role: "Founder & CEO",
      text: "We were spending 20+ hours weekly screening resumes for developer positions. With Cehpoint, we automated initial screening and now our HR focuses on culture fit interviews. Our last 3 hires came through this system. Worth every rupee.",
      rating: 5,
      metric: "Saved 20+ hrs/week"
    },
    {
      name: "Anita Desai",
      company: "BrightWeb Digital Agency, Bangalore",
      role: "Operations Head",
      text: "As a 12-person agency, we couldn't afford ₹15,000/month for separate ATS and project tools. This one-time payment made sense. We use it daily for client projects, quotations, and hiring freelancers. Simple setup, actual support when needed.",
      rating: 4.5,
      metric: "Manages 25+ projects"
    },
    {
      name: "Vikram Singh",
      company: "HireRight Consultancy, Delhi NCR",
      role: "Recruitment Manager",
      text: "Honest feedback: The cheating detection isn't perfect, but it catches obvious copy-paste attempts. More importantly, it handles bulk screening so I can focus on serious candidates. Placed 40+ candidates in 6 months using this system.",
      rating: 4,
      metric: "40+ placements in 6 months"
    }
  ];

  const faqs = [
    {
      question: "What happens after I make the payment?",
      answer: "Typically within 24-48 hours, our team will set up your system, provide personalized training, and ensure you're ready to start. Setup time may vary based on your specific customization needs. You'll get dedicated onboarding support throughout the process."
    },
    {
      question: "Will this system replace my HR team or employees?",
      answer: "No, absolutely not! This is a human-in-the-loop system designed to make your team MORE efficient, not replace them. HR still makes all hiring decisions, sends offer letters, and maintains final authority. The system simply saves time on repetitive tasks like resume screening and initial assessments, so your HR can focus on strategic activities like employee engagement, culture building, and retention programs."
    },
    {
      question: "How does the cheating detection actually work? Can candidates bypass it?",
      answer: "Let's be honest: no system is 100% foolproof. Even if you're sitting with a candidate on Google Meet, they could potentially give scripted answers. Our system uses multiple layers: copy-paste blocking, AI-powered answer pattern detection, and response format analysis. If someone tries to paste answers, our AI detects non-human text formatting and patterns. While determined tech-savvy candidates might attempt to bypass security, our AI can flag suspicious patterns. Most importantly, this system saves your HR's time – they don't need to ask basic screening questions, especially for roles they're less familiar with."
    },
    {
      question: "Is the ₹15,000 really a one-time payment?",
      answer: "Yes! Pay once and own it forever. No monthly fees, no hidden costs, no recurring charges. You get lifetime access, free hosting, and all future updates included."
    },
    {
      question: "How much time will this actually save our team?",
      answer: "Based on our clients' experience: HR teams save 15-20 hours per month on resume screening and initial candidate filtering. Senior developers save 8-12 hours monthly by reducing their involvement in basic technical rounds. Interview panels save time by only meeting pre-screened, qualified candidates. This frees your team to focus on what matters: building products, closing deals, strategic planning, and growing your business."
    },
    {
      question: "Does HR still make the final hiring decisions?",
      answer: "100% YES! We don't hire people – your HR team does. Our system only assists with initial screening and assessment to save time. The platform provides detailed reports and AI-powered insights, but your HR has complete authority over who gets shortlisted, interviewed, and ultimately hired. You're always in control of your hiring process."
    },
    {
      question: "Can the system grow with my business?",
      answer: "Yes! Whether you're hiring 5 or 50 people monthly, managing 2 or 200 projects, the system adapts to your needs. We offer customization within 72 hours for industry-specific requirements as your business evolves."
    },
    {
      question: "What if I need help or have technical issues?",
      answer: "You get priority support via phone, WhatsApp, and email. Our expert team typically responds within 2-4 hours during business hours (Mon-Sat, 9 AM - 7 PM IST) to ensure your business keeps running smoothly."
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
        <title>Cehpoint - AI ATS + Business Management System for Indian Startups | ₹15,000 One-Time Payment</title>
        <meta name="description" content="All-in-one AI-powered ATS and business management for Indian startups and IT companies. Automate hiring, project tracking, and client management. ₹15,000 one-time payment with lifetime access. Used by 380+ businesses across India." />
        <meta name="keywords" content="ATS India, applicant tracking system, AI recruitment software, hiring automation, business management software, project management India, HR software, affordable ATS, one-time payment, lifetime access, startup tools India" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English, Hindi" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <link rel="canonical" href="https://offer.cehpoint.co.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://offer.cehpoint.co.in/" />
        <meta property="og:title" content="Cehpoint - AI-Powered ATS + Business Management | ₹15,000 One-Time Payment" />
        <meta property="og:description" content="Automate hiring, project tracking, and client management for Indian businesses. One-time ₹15,000 payment includes lifetime hosting and updates. Trusted by 380+ companies." />
        <meta property="og:image" content="https://offer.cehpoint.co.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Cehpoint" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://offer.cehpoint.co.in/" />
        <meta name="twitter:title" content="Cehpoint - AI ATS + Business Management | ₹15,000 One-Time" />
        <meta name="twitter:description" content="All-in-one hiring and business management system for Indian startups. ₹15,000 one-time payment with lifetime access. Used by 380+ businesses." />
        <meta name="twitter:image" content="https://offer.cehpoint.co.in/og-image.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Cehpoint Technologies" />
        <meta name="publisher" content="Cehpoint" />
        <meta name="copyright" content="Cehpoint Technologies" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="audience" content="Businesses, Startups, IT Companies, Recruitment Agencies, Solo Entrepreneurs" />
        
        {/* Mobile App Capable */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cehpoint ATS" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cehpoint",
            "legalName": "Cehpoint Technologies",
            "url": "https://offer.cehpoint.co.in",
            "logo": "https://offer.cehpoint.co.in/logo.png",
            "foundingDate": "2024",
            "foundingLocation": "India",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-33690-29331",
              "contactType": "Sales",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://wa.me/919091156095"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          })}
        </script>
        
        {/* Structured Data - Software Application */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Cehpoint ATS + Business Management System",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-based",
            "offers": {
              "@type": "Offer",
              "price": "15000",
              "priceCurrency": "INR",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Cehpoint"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "description": "AI-Powered Applicant Tracking System and Business Management Software for Indian businesses. Automate hiring, resume screening, project management, and client tracking.",
            "featureList": ["AI Resume Screening", "Cheating Detection", "Auto Quotation Generation", "Project Management", "Client Dashboard", "Multi-User Access", "Automated Reporting"]
          })}
        </script>
        
        {/* Structured Data - Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cehpoint - AI-Powered ATS + Business Management System",
            "description": "Complete hiring automation and business management solution for Indian companies. One-time payment of ₹15,000 with lifetime access.",
            "brand": {
              "@type": "Brand",
              "name": "Cehpoint"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://offer.cehpoint.co.in",
              "priceCurrency": "INR",
              "price": "15000",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "127"
            }
          })}
        </script>
        
        {/* Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does Cehpoint cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cehpoint costs only ₹15,000 as a one-time payment. This includes lifetime free hosting, all future updates, priority support, and complete setup assistance. No monthly or recurring fees ever."
                }
              },
              {
                "@type": "Question",
                "name": "Is Cehpoint suitable for startups in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Cehpoint is perfect for Indian startups. At ₹15,000 one-time payment, it's 90% cheaper than traditional ATS subscriptions. You get AI-powered hiring automation, project management, and client tracking in one system."
                }
              },
              {
                "@type": "Question",
                "name": "Does Cehpoint work for solo entrepreneurs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Solo entrepreneurs can run their entire business with Cehpoint - from hiring freelancers to managing client projects, generating quotations, and tracking payments. It's like having a complete virtual team."
                }
              }
            ]
          })}
        </script>
      </Head>

      <ComprehensiveAssessment triggerOpen={openAssessment} onClose={() => setOpenAssessment(false)} />

      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">Cehpoint</span>
              </div>
              
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-darkgrey hover:text-primary transition-colors font-medium">Home</a>
                <a href="/use-cases" className="text-darkgrey hover:text-primary transition-colors font-medium">Use Cases</a>
                <a href="#features" className="text-darkgrey hover:text-primary transition-colors font-medium">Features</a>
                <a href="#pricing" className="text-darkgrey hover:text-primary transition-colors font-medium">Pricing</a>
                <a href="#contact" className="text-darkgrey hover:text-primary transition-colors font-medium">Contact</a>
              </div>

              <div className="hidden md:block">
                <button onClick={() => setOpenAssessment(true)} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Get Started
                </button>
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
                  <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Home</a>
                  <a href="/use-cases" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Use Cases</a>
                  <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Features</a>
                  <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Pricing</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-darkgrey hover:text-primary transition-colors font-medium py-2 px-3 rounded-lg hover:bg-blue-50 active:bg-blue-100">Contact</a>
                  <button onClick={() => { setMobileMenuOpen(false); setOpenAssessment(true); }} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 active:bg-blue-800 shadow-md">Get Started</button>
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
                Revolutionize Your{' '}
                <AnimatedText 
                  texts={[
                    'Intern Hiring',
                    'Marketing Hiring',
                    'Project Management',
                    'Quotation Management',
                    'Client Management',
                    'Task Management',
                    'Real-time Reporting',
                    'Developer Management'
                  ]}
                  className="text-gradient"
                />
              </h1>
              
              <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 border-2 border-primary px-4 md:px-6 py-3 rounded-full mb-4 shadow-lg hover:shadow-xl transition-all">
                <span className="text-darkgrey font-semibold text-xs md:text-sm">
                  ⏱️ Early Adopter Pricing: ₹15,000 One-Time (vs ₹3,000-5,000/month subscriptions) • Setup in 2-5 Days
                </span>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Complete AI-powered ATS + Business Management System.<br />
                Manage recruitment to project delivery in one intelligent platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <a href="https://wa.me/919091156095?text=Hi!%20I%27m%20interested%20in%20starting%20a%20free%20trial%20of%20Cehpoint%20ATS%20system.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="group bg-secondary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-green-700 active:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 touch-manipulation">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Start Free Trial on WhatsApp
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
                  <span>Typically ready in 24-48h</span>
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
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">380+</div>
                <div className="text-gray-600">Active Businesses</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">8,500+</div>
                <div className="text-gray-600">Candidates Processed</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15-20hrs</div>
                <div className="text-gray-600">Avg. Monthly Time Saved</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">₹15K</div>
                <div className="text-gray-600">One-Time Investment</div>
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

        <AutomationJourney />

        <IndustryScenarioCarousel />

        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary to-blue-700">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Smart Businesses Choose Cehpoint
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              Stop wasting time on repetitive tasks. Let your team focus on growth, strategy, and building relationships—not endless manual work.
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

        <IndustryGuarantees />

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
                <h3 className="text-2xl font-bold text-darkgrey mb-4">Fast, Personalized Setup</h3>
                <p className="text-gray-600 leading-relaxed">
                  Typically ready in 24-48 hours with personalized training. Our expert team handles the complete setup and ensures you're fully prepared to start.
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
                <h3 className="text-2xl font-bold text-darkgrey mb-4">Human-in-the-Loop System</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't replace your team – we make them more efficient. Your HR retains full control while saving 15-20 hours monthly on repetitive screening tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                🤝 Complete Transparency & Ownership
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in true ownership. When you invest with us, you get more than just software – you get a complete business solution with full transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-primary transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">💻</div>
                <h3 className="text-xl font-bold text-darkgrey mb-4 text-center">
                  Source Code Access
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Need customizations? Request the source code to make changes with your own development team or get our expert help for modifications tailored to your needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-secondary transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">🌐</div>
                <h3 className="text-xl font-bold text-darkgrey mb-4 text-center">
                  Your Domain, Connected
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  We'll connect everything to your existing domain seamlessly. Professional setup ensures your brand stays front and center.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">🎁</div>
                <h3 className="text-xl font-bold text-darkgrey mb-4 text-center">
                  Free Domain Included
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Don't have a domain? No worries! Get a free professional domain with your purchase. Your business deserves a strong online presence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-purple-500 transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">🚀</div>
                <h3 className="text-xl font-bold text-darkgrey mb-4 text-center">
                  Free Website for Startups
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Eligible new entrepreneurs and startups get complimentary business website development along with this product.{' '}
                  <span className="text-sm text-gray-500 italic">Terms & conditions apply.</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-500 transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">📄</div>
                <h3 className="text-xl font-bold text-darkgrey mb-4 text-center">
                  GST Invoice Provided
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Run a legitimate business with proper documentation. Get official GST bills for all your purchases for accounting and tax purposes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-500 transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">⚡</div>
                <h3 className="text-xl font-bold text-darkgrey mb-4 text-center">
                  72-Hour Customization
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Need industry-specific features? We can deliver a customized version tailored to your unique business requirements in just 72 hours!
                </p>
              </div>
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                🛡️ Your Success, Our Commitment
              </h3>
              <p className="text-lg md:text-xl leading-relaxed opacity-95 max-w-4xl mx-auto">
                We're not just selling software – we're building long-term partnerships. From source code access to GST invoices, free domains to startup support, we've got everything covered for your business growth.
              </p>
              <a href="#contact" className="inline-block mt-6 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105">
                Partner With Us Today
              </a>
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
            <EnhancedROICalculator />
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
                      <span className="text-5xl md:text-6xl font-bold text-primary">₹15,000</span>
                    </div>
                    <p className="text-gray-600 text-lg">One-time payment • Approx. $180 USD</p>
                    <div className="inline-block mt-4 bg-blue-50 border border-primary text-darkgrey px-6 py-2 rounded-full text-sm">
                      vs. ₹3,000-5,000/month for typical subscriptions (saves ₹36K-60K/year)
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

        <AffordabilityMessage />

        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                💱 See Pricing in Your Currency
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                One transparent price. No hidden fees. Convert to your local currency instantly.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <CurrencyConverter />
            </div>

            <div className="mt-12 text-center">
              <DirectOrderForm />
            </div>

            <div className="mt-12">
              <SocialShareButtons />
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
                <h3 className="text-2xl font-bold text-darkgrey mb-4 text-center">Fast Setup (Typically 24-48h)</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Most clients are up and running within 24-48 hours of payment, including personalized training. Complex customizations may take slightly longer, but we'll keep you updated every step of the way.
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
                Get Started with Cehpoint
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

            <div className="mt-16 bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center max-w-5xl mx-auto shadow-2xl">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
                💼 Early Adopter Offer
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Automate Your Business?
              </h3>
              <p className="text-xl md:text-2xl mb-6 opacity-95 leading-relaxed">
                Join 380+ businesses across India using Cehpoint for hiring and project management.
                <br />One-time ₹15,000 investment. No recurring fees. Lifetime access.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-lg mb-2">💬 Most Popular: Start with a Free Trial Demo on WhatsApp</p>
                <p className="text-sm opacity-90">See the system in action before you commit</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/919091156095?text=Hi!%20I'd%20like%20to%20see%20a%20demo%20of%20Cehpoint%20ATS" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-700 transition-all shadow-2xl transform hover:scale-105">
                  💬 Request Free Demo
                </a>
                <a href="tel:+913369029331" className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl hover:bg-lightgrey transition-all shadow-2xl transform hover:scale-105">
                  📞 Call: +91 33690 29331
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Average setup time: 2-5 business days • Money-back guarantee available
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

        <footer className="bg-darkgrey text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <span className="text-3xl font-bold text-primary">Cehpoint</span>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  AI-Powered ATS + Business Management System. Automate hiring, manage projects, and grow your business effortlessly.
                </p>
                <div className="mt-6 flex gap-4">
                  <a href="https://wa.me/919091156095" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Product</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="/use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
                  <li><button onClick={() => setOpenAssessment(true)} className="hover:text-white transition-colors">Free Trial</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Solutions</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><span className="hover:text-white transition-colors cursor-pointer">IT Companies</span></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">Digital Agencies</span></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">Staffing Firms</span></li>
                  <li><span className="hover:text-white transition-colors cursor-pointer">Solo Entrepreneurs</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Legal & Support</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="/legal/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
                  <li><a href="/legal/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
                  <li><a href="mailto:sales@cehpoint.co.in" className="hover:text-white transition-colors">Contact Sales</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Cehpoint. All rights reserved. | Empowering businesses with intelligent automation.
              </p>
              <div className="flex gap-6 text-gray-400 text-sm">
                <a href="tel:+913369029331" className="hover:text-white transition-colors">+91 33690 29331</a>
                <a href="mailto:sales@cehpoint.co.in" className="hover:text-white transition-colors">sales@cehpoint.co.in</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
