import { useState, useEffect } from 'react';

interface FormData {
  // Business Information
  companyName: string;
  industry: string;
  teamSize: string;
  contactName: string;
  email: string;
  phone: string;
  preferredContact: string;
  
  // Hiring Needs
  monthlyHiring: string;
  hiringRoles: string[];
  hiringLocations: string;
  hrScreeningHours: string;
  developerInterviewHours: string;
  currentATSUsage: string;
  
  // Project Management
  activeProjects: string;
  projectManagementTool: string;
  clientCount: string;
  quotationFrequency: string;
  reportingNeeds: string;
  
  // Feature Priorities & Configuration
  priorityFeatures: string[];
  integrationNeeds: string[];
  dataToMigrate: string;
  successMetrics: string[];
  
  // Pain Points & Requirements
  biggestChallenge: string[];
  currentMonthlySpend: string;
  setupUrgency: string;
  decisionAuthority: string;
  specificRequirements: string;
}

const initialFormData: FormData = {
  companyName: '',
  industry: '',
  teamSize: '',
  contactName: '',
  email: '',
  phone: '',
  preferredContact: '',
  monthlyHiring: '',
  hiringRoles: [],
  hiringLocations: '',
  hrScreeningHours: '',
  developerInterviewHours: '',
  currentATSUsage: '',
  activeProjects: '',
  projectManagementTool: '',
  clientCount: '',
  quotationFrequency: '',
  reportingNeeds: '',
  priorityFeatures: [],
  integrationNeeds: [],
  dataToMigrate: '',
  successMetrics: [],
  biggestChallenge: [],
  currentMonthlySpend: '',
  setupUrgency: '',
  decisionAuthority: '',
  specificRequirements: ''
};

interface ComprehensiveAssessmentProps {
  triggerOpen?: boolean;
  onClose?: () => void;
}

export default function ComprehensiveAssessment({ triggerOpen = false, onClose }: ComprehensiveAssessmentProps = {}) {
  const [isVisible, setIsVisible] = useState(true); // Always show floating button
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1 = form, 2 = thank you
  const [currentFormSection, setCurrentFormSection] = useState(0); // Track which section of form
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // Handle external trigger (from buttons)
  useEffect(() => {
    if (triggerOpen) {
      setIsOpen(true);
      setCurrentStep(0);
      setCurrentFormSection(0);
    }
  }, [triggerOpen]);

  const handleSkip = () => {
    if (currentStep === 1 && currentFormSection > 0) {
      // Confirm before skipping if they've started filling
      const confirmSkip = window.confirm('You have unsaved progress. Are you sure you want to skip?');
      if (!confirmSkip) return;
    }
    
    localStorage.setItem('cehpoint_assessment_seen', 'skipped');
    setIsOpen(false);
    setCurrentStep(0);
    setCurrentFormSection(0);
    if (onClose) onClose();
  };

  const handleReopen = () => {
    setIsOpen(true);
    setCurrentStep(0);
    setCurrentFormSection(0);
  };

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxChange = (field: 'hiringRoles' | 'biggestChallenge' | 'priorityFeatures' | 'integrationNeeds' | 'successMetrics', value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    handleInputChange(field, newValues);
  };

  const validateForm = (): { isValid: boolean; errors: Partial<Record<keyof FormData, string>> } => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    // Required fields
    if (!formData.companyName.trim()) newErrors.companyName = 'Required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.industry) newErrors.industry = 'Required';
    if (!formData.teamSize) newErrors.teamSize = 'Required';
    if (!formData.monthlyHiring) newErrors.monthlyHiring = 'Required';
    if (!formData.preferredContact) newErrors.preferredContact = 'Required';
    
    // Require at least one hiring role if they hire
    if (formData.monthlyHiring !== '0' && formData.hiringRoles.length === 0) {
      newErrors.hiringRoles = 'Please select at least one hiring role';
    }
    
    // Require at least one priority feature
    if (formData.priorityFeatures.length === 0) {
      newErrors.priorityFeatures = 'Please select at least one priority feature';
    }
    
    // Require at least one pain point/challenge
    if (formData.biggestChallenge.length === 0) {
      newErrors.biggestChallenge = 'Please select at least one challenge';
    }
    
    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  const handleStartTrial = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async () => {
    const validation = validateForm();
    
    if (!validation.isValid) {
      // Scroll to first error using the newly generated errors
      const firstErrorKey = Object.keys(validation.errors)[0] as keyof FormData;
      const errorElement = document.getElementsByName(firstErrorKey)[0];
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      alert('Please fill in all required fields marked with *');
      return;
    }

    // Here you would send the data to your backend/CRM
    // For now, we'll prepare the data structure for submission
    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'website_assessment'
    };
    
    console.log('Form submitted:', submissionData);
    
    // TODO: Send to backend/CRM
    // await fetch('/api/assessment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData)
    // });
    
    localStorage.setItem('cehpoint_assessment_seen', 'completed');
    setCurrentStep(2);
  };

  const formSections = ['Business Info', 'Hiring Needs', 'Projects & Clients', 'Features & Goals', 'Challenges'];
  const totalFormSections = formSections.length;

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Reopen Button */}
      {!isOpen && (
        <button
          onClick={handleReopen}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-blue-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center gap-2 animate-bounce"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Quick Assessment
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 animate-slideUp max-h-[90vh] overflow-y-auto">
            
            {/* Step 0: Introduction */}
            {currentStep === 0 && (
              <div className="p-8 md:p-12 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-darkgrey mb-4">
                    Start Your Free Trial
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                    Join <span className="font-semibold text-secondary">500+ businesses</span> that trust us. Share your needs in this 4-minute assessment, and our <span className="font-semibold text-primary">expert team will prepare a perfectly customized setup</span> ready in 24-48 hours—not a generic template, but a system tailored to your exact workflow.
                  </p>
                  
                  <div className="bg-green-50 border-l-4 border-secondary p-4 mb-6 text-left max-w-2xl mx-auto">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-secondary">🤝 Human-in-the-Loop Approach:</span> You get both AI efficiency AND expert human guidance. Your dedicated onboarding partner will personally train your team and ensure perfect implementation.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
                  <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                    <div className="text-2xl mb-2">⚡</div>
                    <h3 className="font-semibold text-darkgrey mb-1">Zero Guesswork Setup</h3>
                    <p className="text-sm text-gray-600">We configure <strong>everything</strong> based on your exact requirements—no generic templates</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                    <div className="text-2xl mb-2">🎯</div>
                    <h3 className="font-semibold text-darkgrey mb-1">Perfect Day-One Match</h3>
                    <p className="text-sm text-gray-600">Your system matches your workflow from the first login—ready to use immediately</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200">
                    <div className="text-2xl mb-2">💝</div>
                    <h3 className="font-semibold text-darkgrey mb-1">Dedicated Partner</h3>
                    <p className="text-sm text-gray-600">Personal onboarding specialist ensures your team is confident and productive</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl mb-8 max-w-2xl mx-auto">
                  <p className="text-sm text-gray-600 mb-3">
                    <strong className="text-darkgrey">Real Success Story:</strong>
                  </p>
                  <p className="text-gray-700 italic mb-2">
                    "We were hiring 15 developers monthly. HR spent 40+ hours screening. Now it's 8 hours. Our senior devs got 20 hours back per month. Setup took 36 hours."
                  </p>
                  <p className="text-sm text-gray-600">— Rajesh K., IT Services Company (87 employees)</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleStartTrial}
                    className="bg-gradient-to-r from-secondary to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Start Free Trial →
                  </button>
                  <button
                    onClick={handleSkip}
                    className="bg-white text-gray-600 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all"
                  >
                    Maybe Later
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-6">
                  ✓ No credit card • ✓ No commitment • ✓ Your data is 100% secure • ✓ GDPR compliant
                </p>
              </div>
            )}

            {/* Step 1: Comprehensive Form */}
            {currentStep === 1 && (
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-darkgrey">
                    Tell Us About Your Business
                  </h3>
                  <button
                    onClick={handleSkip}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Form Progress Indicator */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 font-medium">
                      Progress: {Math.round(((currentFormSection + 1) / totalFormSections) * 100)}% Complete
                    </span>
                    <span className="text-xs text-gray-500">~{4 - currentFormSection} min remaining</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-gradient-to-r from-primary via-purple-500 to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentFormSection + 1) / totalFormSections) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    {formSections.map((section, idx) => (
                      <span
                        key={idx}
                        className={`${
                          idx === currentFormSection
                            ? 'text-primary font-semibold'
                            : idx < currentFormSection
                            ? 'text-secondary'
                            : 'text-gray-400'
                        }`}
                      >
                        {idx < currentFormSection ? '✓ ' : ''}{section}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Section 1: Business Information */}
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-darkgrey mb-4 flex items-center gap-2">
                      <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                      Business Information
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          onFocus={() => setCurrentFormSection(0)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Industry <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={(e) => handleInputChange('industry', e.target.value)}
                          onFocus={() => setCurrentFormSection(0)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.industry ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select industry</option>
                          <option value="IT Services & Software Development">IT Services & Software Development</option>
                          <option value="Digital Marketing & Agencies">Digital Marketing & Agencies</option>
                          <option value="Staffing & Recruitment">Staffing & Recruitment</option>
                          <option value="Consulting">Consulting</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Retail & E-commerce">Retail & E-commerce</option>
                          <option value="Education & Training">Education & Training</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Fintech & Financial Services">Fintech & Financial Services</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Team Size <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={(e) => handleInputChange('teamSize', e.target.value)}
                          onFocus={() => setCurrentFormSection(0)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.teamSize ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select team size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange('contactName', e.target.value)}
                          onFocus={() => setCurrentFormSection(0)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.contactName ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onFocus={() => setCurrentFormSection(0)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onFocus={() => setCurrentFormSection(0)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="+91 9876543210"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Contact Method <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          onFocus={() => setCurrentFormSection(0)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.preferredContact ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">How should we reach you?</option>
                          <option value="WhatsApp">WhatsApp (Fastest)</option>
                          <option value="Email">Email</option>
                          <option value="Phone Call">Phone Call</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Hiring Needs */}
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-darkgrey mb-4 flex items-center gap-2">
                      <span className="bg-secondary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                      Hiring & Recruitment Needs
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          How many people do you hire per month? <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="monthlyHiring"
                          value={formData.monthlyHiring}
                          onChange={(e) => handleInputChange('monthlyHiring', e.target.value)}
                          onFocus={() => setCurrentFormSection(1)}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.monthlyHiring ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <option value="">Select range</option>
                          <option value="0">We don&apos;t hire currently</option>
                          <option value="1-5">1-5 per month</option>
                          <option value="6-15">6-15 per month</option>
                          <option value="16-30">16-30 per month</option>
                          <option value="30+">30+ per month</option>
                          <option value="seasonal">Seasonal hiring (specific periods)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What roles do you typically hire for? <span className="text-red-500">*</span>
                        </label>
                        {errors.hiringRoles && <p className="text-xs text-red-500 mb-2">{errors.hiringRoles}</p>}
                        <input type="hidden" name="hiringRoles" />
                        <div className="grid grid-cols-2 gap-2">
                          {['Developers/Engineers', 'Designers', 'Sales/Marketing', 'HR/Operations', 'Customer Support', 'Management', 'Interns', 'Other'].map(role => (
                            <label key={role} className="flex items-center gap-2 p-2 border rounded hover:bg-white cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.hiringRoles.includes(role)}
                                onChange={() => handleCheckboxChange('hiringRoles', role)}
                                onFocus={() => setCurrentFormSection(1)}
                                className="text-primary focus:ring-primary rounded"
                              />
                              <span className="text-sm text-gray-700">{role}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Hiring locations / geographies
                        </label>
                        <input
                          type="text"
                          value={formData.hiringLocations}
                          onChange={(e) => handleInputChange('hiringLocations', e.target.value)}
                          onFocus={() => setCurrentFormSection(1)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g., India, Remote, USA, Global"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            HR screening time per month
                          </label>
                          <select
                            value={formData.hrScreeningHours}
                            onChange={(e) => handleInputChange('hrScreeningHours', e.target.value)}
                            onFocus={() => setCurrentFormSection(1)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select hours</option>
                            <option value="0-5">0-5 hours</option>
                            <option value="5-15">5-15 hours</option>
                            <option value="15-30">15-30 hours</option>
                            <option value="30-50">30-50 hours</option>
                            <option value="50+">50+ hours</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Developer interview time per month
                          </label>
                          <select
                            value={formData.developerInterviewHours}
                            onChange={(e) => handleInputChange('developerInterviewHours', e.target.value)}
                            onFocus={() => setCurrentFormSection(1)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select hours</option>
                            <option value="0">Not applicable</option>
                            <option value="1-5">1-5 hours</option>
                            <option value="5-10">5-10 hours</option>
                            <option value="10-20">10-20 hours</option>
                            <option value="20+">20+ hours</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Do you currently use any ATS or hiring software?
                        </label>
                        <select
                          value={formData.currentATSUsage}
                          onChange={(e) => handleInputChange('currentATSUsage', e.target.value)}
                          onFocus={() => setCurrentFormSection(1)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select option</option>
                          <option value="No">No, manual process</option>
                          <option value="Spreadsheets">Yes, spreadsheets/Excel</option>
                          <option value="Free Tools">Yes, free tools</option>
                          <option value="Paid ATS">Yes, paid ATS (want to switch)</option>
                          <option value="Multiple Tools">Yes, multiple disconnected tools</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Project Management */}
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-darkgrey mb-4 flex items-center gap-2">
                      <span className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
                      Project & Client Management
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Active projects at any given time
                        </label>
                        <select
                          value={formData.activeProjects}
                          onChange={(e) => handleInputChange('activeProjects', e.target.value)}
                          onFocus={() => setCurrentFormSection(2)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="0">No active projects</option>
                          <option value="1-5">1-5 projects</option>
                          <option value="6-15">6-15 projects</option>
                          <option value="16-30">16-30 projects</option>
                          <option value="30+">30+ projects</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of active clients
                        </label>
                        <select
                          value={formData.clientCount}
                          onChange={(e) => handleInputChange('clientCount', e.target.value)}
                          onFocus={() => setCurrentFormSection(2)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="0">No external clients</option>
                          <option value="1-10">1-10 clients</option>
                          <option value="11-50">11-50 clients</option>
                          <option value="51-100">51-100 clients</option>
                          <option value="100+">100+ clients</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current project management tool
                        </label>
                        <select
                          value={formData.projectManagementTool}
                          onChange={(e) => handleInputChange('projectManagementTool', e.target.value)}
                          onFocus={() => setCurrentFormSection(2)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select tool</option>
                          <option value="None">No formal tool</option>
                          <option value="Email/WhatsApp">Email/WhatsApp only</option>
                          <option value="Spreadsheets">Spreadsheets/Google Sheets</option>
                          <option value="Trello/Asana">Trello/Asana</option>
                          <option value="Jira/Monday">Jira/Monday.com</option>
                          <option value="Other">Other paid tool</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quotation frequency
                        </label>
                        <select
                          value={formData.quotationFrequency}
                          onChange={(e) => handleInputChange('quotationFrequency', e.target.value)}
                          onFocus={() => setCurrentFormSection(2)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select frequency</option>
                          <option value="Never">Don&apos;t create quotations</option>
                          <option value="1-5/month">1-5 per month</option>
                          <option value="6-15/month">6-15 per month</option>
                          <option value="15+/month">15+ per month</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Reporting requirements
                        </label>
                        <select
                          value={formData.reportingNeeds}
                          onChange={(e) => handleInputChange('reportingNeeds', e.target.value)}
                          onFocus={() => setCurrentFormSection(2)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select need</option>
                          <option value="None">No reporting needed</option>
                          <option value="Basic">Basic reports (monthly/quarterly)</option>
                          <option value="Regular">Regular client updates (weekly)</option>
                          <option value="Real-time">Real-time dashboards needed</option>
                          <option value="Custom">Custom reports for different stakeholders</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Feature Priorities & Configuration */}
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-darkgrey mb-4 flex items-center gap-2">
                      <span className="bg-orange-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">4</span>
                      Features & Configuration Priorities
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Which features are most important to you? <span className="text-red-500">* (Select at least 1)</span>
                        </label>
                        {errors.priorityFeatures && <p className="text-xs text-red-500 mb-2">{errors.priorityFeatures}</p>}
                        <input type="hidden" name="priorityFeatures" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            'AI-Powered Screening & Assessments',
                            'Resume Parser & Management',
                            'Anti-Cheating Detection',
                            'Project Management System',
                            'Quotation Generation',
                            'Client Management Portal',
                            'Task & Assignment Tracking',
                            'Automated Reporting & Analytics'
                          ].map(feature => (
                            <label key={feature} className="flex items-start gap-2 p-2 border rounded hover:bg-white cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.priorityFeatures.includes(feature)}
                                onChange={() => handleCheckboxChange('priorityFeatures', feature)}
                                onFocus={() => setCurrentFormSection(3)}
                                className="text-primary focus:ring-primary rounded mt-1"
                              />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What integrations do you need?
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            'Email (Gmail/Outlook)',
                            'Slack',
                            'WhatsApp Business',
                            'Calendar (Google/Outlook)',
                            'Payment Gateways',
                            'Existing HR Tools',
                            'CRM Systems',
                            'None needed'
                          ].map(integration => (
                            <label key={integration} className="flex items-center gap-2 p-2 border rounded hover:bg-white cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.integrationNeeds.includes(integration)}
                                onChange={() => handleCheckboxChange('integrationNeeds', integration)}
                                onFocus={() => setCurrentFormSection(3)}
                                className="text-primary focus:ring-primary rounded"
                              />
                              <span className="text-sm text-gray-700">{integration}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Do you have existing data to migrate?
                        </label>
                        <select
                          value={formData.dataToMigrate}
                          onChange={(e) => handleInputChange('dataToMigrate', e.target.value)}
                          onFocus={() => setCurrentFormSection(3)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select option</option>
                          <option value="No">No, fresh start</option>
                          <option value="Candidate resumes">Yes, candidate resumes/data</option>
                          <option value="Client/project data">Yes, client/project data</option>
                          <option value="Both">Yes, both hiring and project data</option>
                          <option value="Other">Yes, other data</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What success metrics matter most to you?
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            'Time saved in screening',
                            'Faster hiring cycles',
                            'Better candidate quality',
                            'Reduced tool costs',
                            'Improved client satisfaction',
                            'Better team productivity',
                            'Real-time visibility',
                            'ROI within 3 months'
                          ].map(metric => (
                            <label key={metric} className="flex items-center gap-2 p-2 border rounded hover:bg-white cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.successMetrics.includes(metric)}
                                onChange={() => handleCheckboxChange('successMetrics', metric)}
                                onFocus={() => setCurrentFormSection(3)}
                                className="text-primary focus:ring-primary rounded"
                              />
                              <span className="text-sm text-gray-700">{metric}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Pain Points & Requirements */}
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-darkgrey mb-4 flex items-center gap-2">
                      <span className="bg-yellow-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">5</span>
                      Current Challenges & Goals
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What are your biggest operational challenges? <span className="text-red-500">* (Select at least 1)</span>
                        </label>
                        {errors.biggestChallenge && <p className="text-xs text-red-500 mb-2">{errors.biggestChallenge}</p>}
                        <input type="hidden" name="biggestChallenge" />
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            'Screening too many unqualified candidates',
                            'HR team overwhelmed with manual tasks',
                            'Senior developers wasting time on interviews',
                            'No centralized system for client communication',
                            'Difficulty tracking project progress',
                            'Manual quotation creation takes too long',
                            'Can\'t generate reports quickly',
                            'Scattered data across multiple tools',
                            'Poor visibility into team workload',
                            'Client complaints about communication'
                          ].map(challenge => (
                            <label key={challenge} className="flex items-start gap-2 p-2 border rounded hover:bg-white cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.biggestChallenge.includes(challenge)}
                                onChange={() => handleCheckboxChange('biggestChallenge', challenge)}
                                onFocus={() => setCurrentFormSection(4)}
                                className="text-primary focus:ring-primary rounded mt-1"
                              />
                              <span className="text-sm text-gray-700">{challenge}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current monthly spend on software tools
                          </label>
                          <select
                            value={formData.currentMonthlySpend}
                            onChange={(e) => handleInputChange('currentMonthlySpend', e.target.value)}
                            onFocus={() => setCurrentFormSection(4)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select range</option>
                            <option value="₹0">₹0 (using free tools)</option>
                            <option value="₹1,000-5,000">₹1,000 - ₹5,000</option>
                            <option value="₹5,000-15,000">₹5,000 - ₹15,000</option>
                            <option value="₹15,000-30,000">₹15,000 - ₹30,000</option>
                            <option value="₹30,000+">₹30,000+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            How soon do you need the system ready?
                          </label>
                          <select
                            value={formData.setupUrgency}
                            onChange={(e) => handleInputChange('setupUrgency', e.target.value)}
                            onFocus={() => setCurrentFormSection(4)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select urgency</option>
                            <option value="Immediately">Immediately (this week)</option>
                            <option value="Within 2 weeks">Within 2 weeks</option>
                            <option value="Within a month">Within a month</option>
                            <option value="Planning for next quarter">Planning for next quarter</option>
                            <option value="Just exploring">Just exploring options</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Are you the final decision-maker?
                        </label>
                        <select
                          value={formData.decisionAuthority}
                          onChange={(e) => handleInputChange('decisionAuthority', e.target.value)}
                          onFocus={() => setCurrentFormSection(4)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select option</option>
                          <option value="Yes">Yes, I can make this decision</option>
                          <option value="Joint">Joint decision with team/partners</option>
                          <option value="Need approval">Need approval from management</option>
                          <option value="Just researching">Just researching options</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Any specific requirements or customizations needed?
                        </label>
                        <textarea
                          value={formData.specificRequirements}
                          onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                          onFocus={() => setCurrentFormSection(4)}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Tell us about any specific features you need, integrations with existing tools, unique workflows, compliance requirements, or any other details that will help us prepare the perfect setup for you..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-secondary to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Submit & Start Free Trial
                  </button>
                  <button
                    onClick={handleSkip}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    Skip
                  </button>
                </div>

                <p className="text-xs text-center text-gray-500 mt-4">
                  🔒 We respect your privacy. Your information is encrypted and will only be used to prepare your customized setup. GDPR & SOC 2 compliant.
                </p>
              </div>
            )}

            {/* Step 2: Thank You */}
            {currentStep === 2 && (
              <div className="p-8 md:p-12 text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-3xl font-bold text-darkgrey mb-4">
                  Perfect! We're On It!
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                  Thank you, <span className="font-semibold text-primary">{formData.contactName}</span>! Our expert team is already reviewing your requirements and will prepare a <span className="font-semibold text-secondary">perfectly customized setup</span> tailored to {formData.companyName}'s exact needs.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                  <h4 className="font-semibold text-darkgrey mb-4 text-xl">What Happens Next?</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</div>
                      <div>
                        <p className="font-medium text-darkgrey">Within 2-4 hours</p>
                        <p className="text-sm text-gray-600">
                          Your dedicated onboarding partner will contact you on {formData.preferredContact === 'WhatsApp' ? 'WhatsApp' : formData.preferredContact.toLowerCase()} ({formData.preferredContact === 'WhatsApp' ? formData.phone : formData.email}) to confirm details and understand any additional requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</div>
                      <div>
                        <p className="font-medium text-darkgrey">Within 24-48 hours</p>
                        <p className="text-sm text-gray-600">Your personalized system will be ready with all {formData.priorityFeatures.length} priority features configured, integrations set up, and your workflows pre-configured</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</div>
                      <div>
                        <p className="font-medium text-darkgrey">Personalized onboarding session</p>
                        <p className="text-sm text-gray-600">Your dedicated partner will train your team, answer questions, and ensure everyone is confident using the system (scheduled at your convenience)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">4</div>
                      <div>
                        <p className="font-medium text-darkgrey">Ongoing expert support</p>
                        <p className="text-sm text-gray-600">Lifetime access to our team for any questions, customizations, or optimizations (typical response: 2-4 hours)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 text-left max-w-2xl mx-auto">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">📧 Check your email:</span> We&apos;ve sent a confirmation to {formData.email} with next steps and your submission details. {formData.preferredContact === 'WhatsApp' && "Add our number to your contacts so you don&apos;t miss our WhatsApp message!"}
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-secondary p-4 mb-6 text-left max-w-2xl mx-auto">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-secondary">💡 Meanwhile:</span> Feel free to explore our <a href="#features" className="text-primary underline">features</a>, check the <a href="#roi-calculator" className="text-primary underline">ROI calculator</a>, or review our <a href="#faq" className="text-primary underline">FAQs</a> to see how we&apos;ll solve your specific challenges.
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all shadow-lg"
                >
                  Got It, Thanks!
                </button>

                <p className="text-xs text-gray-500 mt-4">
                  Questions? Our team is available via {formData.preferredContact.toLowerCase()} during business hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
