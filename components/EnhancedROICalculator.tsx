import { useState } from 'react';

export default function EnhancedROICalculator() {
  const [industry, setIndustry] = useState('it-services');
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [hrScreeningHours, setHrScreeningHours] = useState(15);
  const [interviewHours, setInterviewHours] = useState(10);
  const [devTechRoundHours, setDevTechRoundHours] = useState(8);
  
  const hourlyRates = {
    hr: 500,
    interviewer: 800,
    seniorDev: 1500
  };
  
  const cehpointPrice = 15000;
  
  const industries = [
    { id: 'it-services', name: 'IT Services / Software Development' },
    { id: 'agency', name: 'Digital Marketing / Creative Agency' },
    { id: 'staffing', name: 'Staffing / Recruitment Firm' },
    { id: 'consulting', name: 'Consulting / Professional Services' },
    { id: 'manufacturing', name: 'Manufacturing / Production' },
    { id: 'retail', name: 'Retail / E-commerce' }
  ];
  
  const yearlySoftwareCost = monthlySpend * 12;
  
  const hrScreeningMonthlyCost = hrScreeningHours * 4 * hourlyRates.hr;
  const hrScreeningYearlyCost = hrScreeningMonthlyCost * 12;
  
  const interviewMonthlyCost = interviewHours * 4 * hourlyRates.interviewer;
  const interviewYearlyCost = interviewMonthlyCost * 12;
  
  const devTechRoundMonthlyCost = devTechRoundHours * 4 * hourlyRates.seniorDev;
  const devTechRoundYearlyCost = devTechRoundMonthlyCost * 12;
  
  const totalYearlyTimeCost = hrScreeningYearlyCost + interviewYearlyCost + devTechRoundYearlyCost;
  const totalYearlyCost = yearlySoftwareCost + totalYearlyTimeCost;
  const firstYearSavings = totalYearlyCost - cehpointPrice;
  
  const monthlyTotalCost = monthlySpend + hrScreeningMonthlyCost + interviewMonthlyCost + devTechRoundMonthlyCost;
  const breakEvenMonths = monthlyTotalCost > 0 ? Math.ceil(cehpointPrice / monthlyTotalCost) : 0;

  const hrProductiveHours = hrScreeningHours + (interviewHours * 0.3);

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-primary">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-darkgrey mb-2">
          💰 Calculate Your True ROI
        </h3>
        <p className="text-gray-600">
          Beyond money: See how much time your team can reclaim for productive work
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-primary p-4 mb-6 rounded">
        <p className="text-sm text-darkgrey">
          <strong>✨ Need a customized solution?</strong> We can deliver a tailored version for your industry in just <strong className="text-primary">72 hours</strong>!
        </p>
      </div>
      
      <div className="space-y-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-darkgrey mb-3">
            Your Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-darkgrey font-medium"
          >
            {industries.map((ind) => (
              <option key={ind.id} value={ind.id}>{ind.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-darkgrey mb-2">
            Current monthly spend on HR/Project tools (₹)
          </label>
          <input
            type="range"
            min="0"
            max="30000"
            step="1000"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>₹0</span>
            <span className="font-bold text-primary text-lg">₹{monthlySpend.toLocaleString()}</span>
            <span>₹30,000</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-5 rounded-xl border-2 border-orange-200">
          <h4 className="font-bold text-darkgrey mb-4 flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            Time Your Team Currently Wastes (per month)
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-darkgrey mb-2">
                HR screening candidates (hours/month)
              </label>
              <input
                type="range"
                min="0"
                max="80"
                step="1"
                value={hrScreeningHours}
                onChange={(e) => setHrScreeningHours(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>0h</span>
                <span className="font-bold text-accent text-lg">{hrScreeningHours}h</span>
                <span>80h</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-darkgrey mb-2">
                Conducting interviews (hours/month)
              </label>
              <input
                type="range"
                min="0"
                max="60"
                step="1"
                value={interviewHours}
                onChange={(e) => setInterviewHours(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>0h</span>
                <span className="font-bold text-accent text-lg">{interviewHours}h</span>
                <span>60h</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-darkgrey mb-2">
                Senior developers in technical rounds (hours/month)
              </label>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={devTechRoundHours}
                onChange={(e) => setDevTechRoundHours(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>0h</span>
                <span className="font-bold text-accent text-lg">{devTechRoundHours}h</span>
                <span>40h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 space-y-4 mb-4">
        <h4 className="font-bold text-darkgrey text-lg mb-3">💡 What Your Team Could Do Instead</h4>
        
        <div className="bg-white rounded-lg p-4 border-2 border-green-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-darkgrey">HR Time Reclaimed</span>
            <span className="text-2xl font-bold text-secondary">{Math.round(hrProductiveHours)}h/month</span>
          </div>
          <p className="text-xs text-gray-600">
            Instead of screening resumes, your HR can focus on: employee engagement, training programs, culture building, retention strategies
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-darkgrey">Developer Time Saved</span>
            <span className="text-2xl font-bold text-primary">{devTechRoundHours}h/month</span>
          </div>
          <p className="text-xs text-gray-600">
            Senior developers can focus on: building features, architecture improvements, mentoring juniors, technical debt reduction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Software Costs/Year</div>
            <div className="text-xl font-bold text-accent">₹{yearlySoftwareCost.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Time Costs/Year</div>
            <div className="text-xl font-bold text-accent">₹{totalYearlyTimeCost.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Cehpoint (One-time)</div>
            <div className="text-xl font-bold text-secondary">₹{cehpointPrice.toLocaleString()}</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary to-green-600 text-white rounded-lg p-6 text-center">
          <div className="text-sm opacity-90 mb-2">Your First Year Total Savings</div>
          <div className="text-4xl font-bold mb-3">
            {firstYearSavings > 0 ? `₹${firstYearSavings.toLocaleString()}` : '₹0'}
          </div>
          <div className="text-sm opacity-95">
            {breakEvenMonths > 0 && breakEvenMonths < 100 ? (
              <>Pays for itself in just <strong className="text-yellow-300">{breakEvenMonths} month{breakEvenMonths !== 1 ? 's' : ''}</strong>!</>
            ) : (
              <span>Adjust values to see your savings</span>
            )}
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="text-sm text-gray-700">
            <strong>5-Year Total Savings:</strong> <span className="text-secondary text-lg font-bold">₹{((totalYearlyCost * 5) - cehpointPrice).toLocaleString()}</span>
          </div>
          <div className="text-sm text-gray-700">
            <strong>Time Reclaimed (5 years):</strong> <span className="text-primary text-lg font-bold">{Math.round((hrProductiveHours + devTechRoundHours) * 60)} hours</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        *Calculations based on industry-standard hourly rates: HR ₹{hourlyRates.hr}/h, Interviewer ₹{hourlyRates.interviewer}/h, Senior Dev ₹{hourlyRates.seniorDev}/h. Your actual savings may vary based on your team structure and rates.
      </p>
    </div>
  );
}
