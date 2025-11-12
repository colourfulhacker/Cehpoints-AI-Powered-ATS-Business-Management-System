import { useState, useEffect } from 'react';

export default function BusinessAssessment() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showThankYou, setShowThankYou] = useState(false);

  const questions = [
    {
      question: "How many people do you hire per month?",
      options: ["1-5", "6-15", "16-30", "30+"]
    },
    {
      question: "How much time does your HR spend on screening candidates daily?",
      options: ["Less than 1 hour", "1-3 hours", "3-5 hours", "More than 5 hours"]
    },
    {
      question: "Do you involve senior developers in technical interviews?",
      options: ["Never", "Rarely", "Often", "Always"]
    },
    {
      question: "How do you currently manage client requirements?",
      options: ["Email/WhatsApp", "Spreadsheets", "Dedicated software", "No formal process"]
    },
    {
      question: "What's your biggest challenge in business operations?",
      options: ["Hiring quality candidates", "Managing projects", "Client communication", "All of the above"]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => {
        setShowThankYou(true);
      }, 500);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowThankYou(false);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleSkip = () => {
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-blue-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center gap-2 animate-bounce"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Quick Assessment
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-slideUp">
            {!showThankYou ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-darkgrey">
                    Quick Business Assessment
                  </h3>
                  <button
                    onClick={handleSkip}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <button
                      onClick={handleSkip}
                      className="text-sm text-primary hover:text-blue-700 font-medium"
                    >
                      Skip Assessment
                    </button>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-darkgrey mb-6">
                    {questions[currentQuestion].question}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="bg-gradient-to-br from-blue-50 to-white border-2 border-gray-200 hover:border-primary hover:bg-blue-50 rounded-xl p-4 text-left transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                      >
                        <span className="font-medium text-darkgrey">{option}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Takes less than 60 seconds • Helps us understand your needs better
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-3xl font-bold text-darkgrey mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Your assessment is complete! Our team will analyze your responses and contact you with a personalized solution tailored to your business needs.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 mb-6">
                  <p className="text-sm text-darkgrey font-semibold mb-2">
                    What happens next?
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 text-left max-w-md mx-auto">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>Our experts will review your requirements within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>You'll receive a customized solution proposal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>Schedule a free consultation with our team</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={handleClose}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all shadow-lg"
                >
                  Got It, Thanks!
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
