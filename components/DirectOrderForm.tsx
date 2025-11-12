import { useState } from 'react';
import Link from 'next/link';

export default function DirectOrderForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [includeGST, setIncludeGST] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    teamSize: '',
    currentChallenges: '',
    primaryUseCase: '',
    expectedStartDate: '',
    additionalRequirements: '',
  });

  const basePrice = 15000;
  const finalPrice = includeGST ? basePrice * 1.18 : basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const gstAmount = includeGST ? basePrice * 0.18 : 0;
    const orderDetails = `
🎯 NEW ORDER - CEHPOINT ATS+BMS

📋 COMPANY DETAILS:
━━━━━━━━━━━━━━━━━━
Company: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}

🏢 BUSINESS INFO:
━━━━━━━━━━━━━━━━━━
Industry: ${formData.industry}
Team Size: ${formData.teamSize}
Primary Use Case: ${formData.primaryUseCase}

💼 REQUIREMENTS:
━━━━━━━━━━━━━━━━━━
Current Challenges:
${formData.currentChallenges}

Expected Start Date: ${formData.expectedStartDate}

Additional Requirements:
${formData.additionalRequirements || 'None specified'}

💰 PRICING:
━━━━━━━━━━━━━━━━━━
Base Price: ₹${basePrice.toLocaleString()}
${includeGST ? `GST (18%): ₹${gstAmount.toLocaleString()}\nTotal Amount: ₹${finalPrice.toLocaleString()}` : 'GST: Not Required'}
${includeGST ? '✓ GST Invoice Required' : '✗ GST Invoice Not Required'}

━━━━━━━━━━━━━━━━━━
Order Date: ${new Date().toLocaleString('en-IN')}
    `.trim();

    const whatsappMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/919091156095?text=${whatsappMessage}`;

    const emailSubject = encodeURIComponent(`New Order: ${formData.companyName} - Cehpoint ATS+BMS`);
    const emailBody = encodeURIComponent(orderDetails);
    const emailUrl = `mailto:sales@cehpoint.co.in?subject=${emailSubject}&body=${emailBody}`;

    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      window.location.href = emailUrl;
    }, 1000);

    setIsOpen(false);
    alert('Order details prepared! We will contact you within 24 hours to confirm and begin setup.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-secondary to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
      >
        🚀 Order Now - Direct Purchase
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-t-3xl z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Direct Order - Cehpoint</h2>
                  <p className="opacity-90">Complete the form below to place your order</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-lg mb-6">
                <p className="text-gray-700 text-sm">
                  📧 Your order details will be sent to <strong>sales@cehpoint.co.in</strong> and our WhatsApp. We&apos;ll contact you within 24 hours to confirm and begin setup!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-darkgrey mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Company Pvt Ltd"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-darkgrey mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-darkgrey mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-darkgrey mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-darkgrey mb-2">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select Industry</option>
                    <option value="IT Services">IT Services & Software</option>
                    <option value="Digital Agency">Digital Marketing & Creative Agency</option>
                    <option value="Staffing">Staffing & Recruitment</option>
                    <option value="Consulting">Consulting & Professional Services</option>
                    <option value="Manufacturing">Manufacturing & Production</option>
                    <option value="Retail">Retail & E-commerce</option>
                    <option value="Solo Entrepreneur">Solo Entrepreneur</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-darkgrey mb-2">
                    Team Size *
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select Team Size</option>
                    <option value="Solo (Just Me)">Solo (Just Me)</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-25">11-25 people</option>
                    <option value="26-50">26-50 people</option>
                    <option value="51-100">51-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkgrey mb-2">
                  Primary Use Case *
                </label>
                <select
                  name="primaryUseCase"
                  value={formData.primaryUseCase}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select Primary Use Case</option>
                  <option value="Hiring Automation">Hiring & Recruitment Automation</option>
                  <option value="Project Management">Project & Task Management</option>
                  <option value="Client Management">Client & Quotation Management</option>
                  <option value="Complete Business Automation">Complete Business Automation (All Features)</option>
                  <option value="Solo Business Management">Solo Entrepreneur - Manage Entire Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkgrey mb-2">
                  Current Challenges (What problems are you facing?) *
                </label>
                <textarea
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  placeholder="e.g., Spending too much time on manual candidate screening, difficult to track project progress, quotation creation takes hours..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkgrey mb-2">
                  Expected Start Date *
                </label>
                <input
                  type="date"
                  name="expectedStartDate"
                  value={formData.expectedStartDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkgrey mb-2">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  placeholder="Any specific customizations, integrations, or features you need..."
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeGST}
                    onChange={(e) => setIncludeGST(e.target.checked)}
                    className="w-5 h-5 text-primary focus:ring-primary rounded mt-1"
                  />
                  <div>
                    <div className="font-semibold text-darkgrey">
                      I require GST billing (+18%)
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      GST applies only for purchases in INR. If you need a GST invoice for your business, check this box.
                    </div>
                  </div>
                </label>

                <div className="mt-6 border-t-2 border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Base Price:</span>
                    <span className="font-semibold">₹{basePrice.toLocaleString()}</span>
                  </div>
                  {includeGST && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">GST (18%):</span>
                      <span className="font-semibold">₹{(basePrice * 0.18).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-2xl font-bold text-primary border-t-2 border-primary pt-4">
                    <span>Total Amount:</span>
                    <span>₹{finalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
                >
                  📤 Submit Order (WhatsApp + Email)
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center">
                By submitting, you agree to our <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
