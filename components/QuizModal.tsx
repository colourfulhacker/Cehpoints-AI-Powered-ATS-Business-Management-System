import { useState, useEffect } from 'react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    needsProduct: boolean;
  }[];
}

const allQuestions: Question[] = [
  {
    id: 1,
    question: "How many hours per week does your team spend manually reviewing resumes?",
    options: [
      { text: "Less than 2 hours - we don't hire often", needsProduct: false },
      { text: "2-10 hours - occasional hiring", needsProduct: true },
      { text: "10-20 hours - regular hiring needs", needsProduct: true },
      { text: "20+ hours - we're constantly hiring", needsProduct: true }
    ]
  },
  {
    id: 2,
    question: "How do you currently track and manage multiple client projects?",
    options: [
      { text: "We only handle 1-2 projects, spreadsheets work fine", needsProduct: false },
      { text: "Email and shared documents - it's getting messy", needsProduct: true },
      { text: "Multiple tools (spreadsheets, email, chat) - chaotic", needsProduct: true },
      { text: "We have a system but it's not integrated", needsProduct: true }
    ]
  },
  {
    id: 3,
    question: "How often do candidates cheat during your online assessments?",
    options: [
      { text: "We don't conduct online assessments", needsProduct: false },
      { text: "Rarely - maybe 1-2 times a year", needsProduct: true },
      { text: "Sometimes - we suspect but can't prove it", needsProduct: true },
      { text: "Frequently - it's a major concern", needsProduct: true }
    ]
  },
  {
    id: 4,
    question: "How long does it take to create a project quotation for clients?",
    options: [
      { text: "We don't create quotations - fixed pricing only", needsProduct: false },
      { text: "30 minutes to 1 hour per quotation", needsProduct: true },
      { text: "1-3 hours - lots of back and forth", needsProduct: true },
      { text: "3+ hours - complex calculations and approvals", needsProduct: true }
    ]
  },
  {
    id: 5,
    question: "Do your clients frequently ask for project status updates?",
    options: [
      { text: "No, we have very few active clients", needsProduct: false },
      { text: "Occasionally - once a week", needsProduct: true },
      { text: "Regularly - multiple times per week", needsProduct: true },
      { text: "Constantly - daily update requests", needsProduct: true }
    ]
  },
  {
    id: 6,
    question: "How much time do you spend generating project reports manually?",
    options: [
      { text: "We don't generate reports", needsProduct: false },
      { text: "1-3 hours per month", needsProduct: true },
      { text: "4-10 hours per month", needsProduct: true },
      { text: "10+ hours per month", needsProduct: true }
    ]
  },
  {
    id: 7,
    question: "How many tools/platforms do you currently pay for to manage hiring and projects?",
    options: [
      { text: "None - we use free tools only", needsProduct: false },
      { text: "1-2 paid tools", needsProduct: true },
      { text: "3-5 paid tools - getting expensive", needsProduct: true },
      { text: "5+ paid tools - spending a lot monthly", needsProduct: true }
    ]
  },
  {
    id: 8,
    question: "How many employees/team members need access to your hiring and project data?",
    options: [
      { text: "Just 1-2 people (founders only)", needsProduct: false },
      { text: "3-5 team members", needsProduct: true },
      { text: "6-10 team members", needsProduct: true },
      { text: "10+ team members", needsProduct: true }
    ]
  },
  {
    id: 9,
    question: "Have you ever lost a client due to delayed communication or project updates?",
    options: [
      { text: "No, we have very few clients to manage", needsProduct: false },
      { text: "Not yet, but we've come close", needsProduct: true },
      { text: "Yes, once or twice", needsProduct: true },
      { text: "Yes, multiple times - it's a problem", needsProduct: true }
    ]
  },
  {
    id: 10,
    question: "How do you currently screen candidates before interviews?",
    options: [
      { text: "We don't screen - we interview everyone", needsProduct: false },
      { text: "Manual resume review only", needsProduct: true },
      { text: "Email questionnaires - hard to track", needsProduct: true },
      { text: "Phone screening - very time-consuming", needsProduct: true }
    ]
  },
  {
    id: 11,
    question: "What's your biggest frustration with your current project management approach?",
    options: [
      { text: "No frustration - we're not managing projects", needsProduct: false },
      { text: "Lack of real-time visibility", needsProduct: true },
      { text: "Too much manual work and data entry", needsProduct: true },
      { text: "Poor team collaboration and communication", needsProduct: true }
    ]
  },
  {
    id: 12,
    question: "How often do payment tracking and invoicing issues occur in your business?",
    options: [
      { text: "Never - we don't handle client payments", needsProduct: false },
      { text: "Rarely - maybe quarterly", needsProduct: true },
      { text: "Monthly - it's becoming a pattern", needsProduct: true },
      { text: "Weekly - major operational headache", needsProduct: true }
    ]
  },
  {
    id: 13,
    question: "Are you planning to scale your hiring in the next 6-12 months?",
    options: [
      { text: "No, team size is stable", needsProduct: false },
      { text: "Maybe 1-3 new hires", needsProduct: true },
      { text: "Yes, 4-10 new hires", needsProduct: true },
      { text: "Aggressive growth - 10+ new hires", needsProduct: true }
    ]
  },
  {
    id: 14,
    question: "How much do you currently spend per month on project management and HR tools?",
    options: [
      { text: "₹0 - we use only free tools", needsProduct: false },
      { text: "₹1,000 - ₹5,000 per month", needsProduct: true },
      { text: "₹5,000 - ₹15,000 per month", needsProduct: true },
      { text: "₹15,000+ per month", needsProduct: true }
    ]
  },
  {
    id: 15,
    question: "Do you struggle with organizing and analyzing candidate assessment results?",
    options: [
      { text: "No, we don't conduct assessments", needsProduct: false },
      { text: "Sometimes - with high volume hiring", needsProduct: true },
      { text: "Yes, it's manual and time-consuming", needsProduct: true },
      { text: "Absolutely - we need AI assistance", needsProduct: true }
    ]
  },
  {
    id: 16,
    question: "How important is having a centralized dashboard for clients to view project progress?",
    options: [
      { text: "Not important - we don't work with external clients", needsProduct: false },
      { text: "Somewhat important", needsProduct: true },
      { text: "Very important - clients keep asking", needsProduct: true },
      { text: "Critical - we're losing clients without it", needsProduct: true }
    ]
  },
  {
    id: 17,
    question: "Would automated question generation for candidate assessments save you time?",
    options: [
      { text: "No, we don't assess candidates", needsProduct: false },
      { text: "Yes, would save 1-2 hours per week", needsProduct: true },
      { text: "Yes, would save 3-5 hours per week", needsProduct: true },
      { text: "Yes, would save 5+ hours per week", needsProduct: true }
    ]
  },
  {
    id: 18,
    question: "How often do you need to share different project information with different team roles?",
    options: [
      { text: "Rarely - small team, everyone knows everything", needsProduct: false },
      { text: "Weekly - some role-based access needed", needsProduct: true },
      { text: "Daily - different views for HR, employees, clients", needsProduct: true },
      { text: "Constantly - critical security and privacy concern", needsProduct: true }
    ]
  },
  {
    id: 19,
    question: "What would be the business impact of reducing hiring time by 50%?",
    options: [
      { text: "Minimal - we hire once a year or less", needsProduct: false },
      { text: "Moderate - would help somewhat", needsProduct: true },
      { text: "Significant - faster growth capability", needsProduct: true },
      { text: "Transformational - major competitive advantage", needsProduct: true }
    ]
  },
  {
    id: 20,
    question: "Are you currently paying monthly/yearly subscriptions for business management software?",
    options: [
      { text: "No, we avoid subscription costs", needsProduct: false },
      { text: "Yes, but looking for cost-effective alternatives", needsProduct: true },
      { text: "Yes, spending a lot - open to one-time payment solutions", needsProduct: true },
      { text: "Yes, tired of recurring fees - want lifetime access", needsProduct: true }
    ]
  }
];

export default function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});
  const [showResult, setShowResult] = useState(false);
  const [needsProduct, setNeedsProduct] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
      setCurrentQuestions(shuffled.slice(0, 3));
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (questionId: number, optionNeedsProduct: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionNeedsProduct }));
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < 3) {
      alert('Please answer all questions before submitting');
      return;
    }

    const needsCount = Object.values(answers).filter(Boolean).length;
    setNeedsProduct(needsCount >= 2);
    setShowResult(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
        <div className="p-6 md:p-8">
          {!showResult ? (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-darkgrey mb-2">
                    Quick Business Assessment
                  </h2>
                  <p className="text-gray-600">
                    Help us understand your needs better (3 quick questions)
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{Object.keys(answers).length}/3 answered</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(Object.keys(answers).length / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-6">
                {currentQuestions.map((q, index) => (
                  <div key={q.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="font-semibold text-darkgrey mb-3 text-lg">
                      {index + 1}. {q.question}
                    </h3>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <label
                          key={optIndex}
                          className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            answers[q.id] !== undefined && option.needsProduct === answers[q.id]
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-gray-200 hover:border-primary hover:shadow-md'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            onChange={() => handleAnswer(q.id, option.needsProduct)}
                            className="mt-1 mr-3 text-primary focus:ring-primary w-5 h-5"
                          />
                          <span className="text-gray-700 flex-1">{option.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                See Results
              </button>
            </>
          ) : (
            <div className="text-center py-8">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                needsProduct ? 'bg-secondary' : 'bg-gray-100'
              }`}>
                {needsProduct ? (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              {needsProduct ? (
                <>
                  <h3 className="text-2xl md:text-3xl font-bold text-darkgrey mb-4">
                    Great News! We Can Help You
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Based on your responses, Cehpoint's AI-Powered ATS + Business Management System 
                    is perfect for your needs. You could save significant time and money while 
                    scaling your operations efficiently.
                  </p>
                  <div className="bg-lightgrey p-6 rounded-xl mb-6">
                    <p className="text-3xl font-bold text-primary mb-2">₹15,000</p>
                    <p className="text-gray-600">One-time payment • Lifetime access</p>
                    <p className="text-sm text-secondary mt-2">
                      Free hosting & updates forever
                    </p>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="#contact"
                      onClick={handleClose}
                      className="block w-full bg-secondary text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
                    >
                      Get Started Now
                    </a>
                    <button
                      onClick={handleClose}
                      className="w-full bg-white text-primary border-2 border-primary py-4 rounded-xl font-semibold text-lg hover:bg-lightgrey transition-colors"
                    >
                      Learn More About Features
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-2xl md:text-3xl font-bold text-darkgrey mb-4">
                    You're All Set!
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Based on your responses, it seems your current workflow is working well for you. 
                    Feel free to explore our features anyway - you might discover ways to further 
                    optimize your processes!
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={handleClose}
                      className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      Explore Features Anyway
                    </button>
                    <a
                      href="#contact"
                      onClick={handleClose}
                      className="block w-full bg-white text-primary border-2 border-primary py-4 rounded-xl font-semibold text-lg hover:bg-lightgrey transition-colors"
                    >
                      Contact Us for Questions
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
