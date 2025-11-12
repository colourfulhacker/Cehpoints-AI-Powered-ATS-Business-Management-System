import { useState } from 'react';

export default function ROICalculator() {
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  
  const hourlyRate = 500;
  const cehpointPrice = 15000;
  
  const yearlySoftwareCost = monthlySpend * 12;
  const yearlyTimeCost = hoursPerWeek * 52 * hourlyRate;
  const totalYearlyCost = yearlySoftwareCost + yearlyTimeCost;
  const firstYearSavings = totalYearlyCost - cehpointPrice;
  
  // Calculate monthly savings correctly: monthly spend + (weekly hours * 4 weeks * hourly rate)
  const monthlySavings = monthlySpend + (hoursPerWeek * 4 * hourlyRate);
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(cehpointPrice / monthlySavings) : 0;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-primary">
      <h3 className="text-2xl font-bold text-darkgrey mb-6 text-center">
        💰 Calculate Your ROI
      </h3>
      
      <div className="space-y-6 mb-6">
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

        <div>
          <label className="block text-sm font-semibold text-darkgrey mb-2">
            Hours spent per week on manual HR tasks
          </label>
          <input
            type="range"
            min="0"
            max="40"
            step="1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>0 hrs</span>
            <span className="font-bold text-primary text-lg">{hoursPerWeek} hours</span>
            <span>40 hrs</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Current Annual Cost</div>
            <div className="text-2xl font-bold text-accent">₹{totalYearlyCost.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Cehpoint Cost</div>
            <div className="text-2xl font-bold text-secondary">₹{cehpointPrice.toLocaleString()}</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary to-green-600 text-white rounded-lg p-6 text-center">
          <div className="text-sm opacity-90 mb-2">Your First Year Savings</div>
          <div className="text-4xl font-bold">
            {firstYearSavings > 0 ? `₹${firstYearSavings.toLocaleString()}` : '₹0'}
          </div>
          <div className="text-sm mt-3 opacity-95">
            {breakEvenMonths > 0 && breakEvenMonths < 100 ? (
              <>Break even in just <strong>{breakEvenMonths} month{breakEvenMonths !== 1 ? 's' : ''}</strong>!</>
            ) : (
              <span>Adjust sliders to see your savings</span>
            )}
          </div>
        </div>

        <div className="text-center text-sm text-gray-700">
          <strong>5-Year Savings:</strong> ₹{((totalYearlyCost * 5) - cehpointPrice).toLocaleString()}
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        *Calculation based on ₹{hourlyRate}/hour for HR tasks. Your actual savings may vary.
      </p>
    </div>
  );
}
