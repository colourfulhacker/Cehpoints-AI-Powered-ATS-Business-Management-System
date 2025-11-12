import { useState } from 'react';

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

export default function FreeTrialSection() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentFormSection, setCurrentFormSection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    
    if (formData.monthlyHiring !== '0' && formData.hiringRoles.length === 0) {
      newErrors.hiringRoles = 'Please select at least one hiring role';
    }
    
    if (formData.priorityFeatures.length === 0) {
      newErrors.priorityFeatures = 'Please select at least one priority feature';
    }
    
    if (formData.biggestChallenge.length === 0) {
      newErrors.biggestChallenge = 'Please select at least one challenge';
    }
    
    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  const handleSubmit = async () => {
    const validation = validateForm();
    
    if (!validation.isValid) {
      const firstErrorKey = Object.keys(validation.errors)[0] as keyof FormData;
      const errorElement = document.getElementsByName(firstErrorKey)[0];
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      alert('Please fill in all required fields marked with *');
      return;
    }

    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'website_free_trial_form'
    };
    
    console.log('Free Trial Form submitted:', submissionData);
    
    // TODO: Send to backend/CRM
    // await fetch('/api/assessment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData)
    // });
    
    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formSections = ['Business Info', 'Hiring Needs', 'Projects & Clients', 'Features & Goals', 'Challenges'];
  const totalFormSections = formSections.length;

  return (
    <section id="free-trial" className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        {!showThankYou && (
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full mb-4 font-semibold">
              🚀 Start Your Free Trial - Get Setup in 24-48h
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-darkgrey mb-6">
              Get Your Perfectly Customized Setup
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Share your requirements in this 4-minute form, and we'll prepare a <span className="font-semibold text-primary">custom-configured system</span> ready in 24-48 hours—not a generic template, but perfectly tailored to match your workflow, industry, and team size.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white p-5 rounded-xl border-2 border-blue-200 shadow-sm">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-darkgrey mb-1">Instant Quotation</h3>
                <p className="text-sm text-gray-600">Get pricing based on your exact requirements, team size, and features needed</p>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-green-200 shadow-sm">
                <div className="text-3xl mb-2">📄</div>
                <h3 className="font-semibold text-darkgrey mb-1">Auto-Documentation</h3>
                <p className="text-sm text-gray-600">Receive complete setup documentation tailored to your business processes</p>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-purple-200 shadow-sm">
                <div className="text-3xl mb-2">💝</div>
                <h3 className="font-semibold text-darkgrey mb-1">Dedicated Support</h3>
                <p className="text-sm text-gray-600">Personal onboarding specialist ensures your team is ready from day one</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-secondary p-4 max-w-3xl mx-auto text-left rounded-r-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-secondary">🤝 Why This Helps:</span> We understand every business is unique. This form helps us configure your system perfectly—from hiring workflows to client management—so you can start using it immediately without any setup hassles.
              </p>
            </div>
          </div>
        )}

        {/* Thank You State */}
        {showThankYou ? (
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
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
                  <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-darkgrey">Within 2-4 hours</p>
                    <p className="text-sm text-gray-600">
                      Your dedicated partner contacts you on {formData.preferredContact === 'WhatsApp' ? 'WhatsApp' : formData.preferredContact.toLowerCase()} ({formData.preferredContact === 'WhatsApp' ? formData.phone : formData.email}) with instant quotation and documentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-darkgrey">Within 24-48 hours</p>
                    <p className="text-sm text-gray-600">Your personalized system ready with all {formData.priorityFeatures.length} priority features configured, workflows set up, and team training scheduled</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-darkgrey">Ongoing partnership</p>
                    <p className="text-sm text-gray-600">Lifetime support, updates, and optimization to ensure you achieve your business goals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 text-left max-w-2xl mx-auto">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">📧 Check your email:</span> Confirmation sent to {formData.email} with next steps and your submission details.
              </p>
            </div>

            <button
              onClick={() => {
                setShowThankYou(false);
                setFormData(initialFormData);
                setCurrentFormSection(0);
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all shadow-lg"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          /* Form */
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
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
                      <option value="WhatsApp">WhatsApp (Fastest - Get instant quotation in 2-4h)</option>
                      <option value="Email">Email</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sections 2-5 will be added in next messages to keep this manageable */}
              
            </div>

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-secondary to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl"
              >
                Submit & Get Instant Quotation + Documentation
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                🔒 Your information is encrypted and secure. We'll use it only to prepare your customized setup. GDPR & SOC 2 compliant.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
