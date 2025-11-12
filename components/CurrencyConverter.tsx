import { useState } from 'react';

interface Currency {
  code: string;
  symbol: string;
  rate: number;
  flag: string;
}

const currencies: Currency[] = [
  { code: 'INR', symbol: '₹', rate: 1, flag: '🇮🇳' },
  { code: 'USD', symbol: '$', rate: 0.012, flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', rate: 0.011, flag: '🇪🇺' },
  { code: 'GBP', symbol: '£', rate: 0.0095, flag: '🇬🇧' },
  { code: 'AED', symbol: 'د.إ', rate: 0.044, flag: '🇦🇪' },
  { code: 'SGD', symbol: 'S$', rate: 0.016, flag: '🇸🇬' },
  { code: 'AUD', symbol: 'A$', rate: 0.018, flag: '🇦🇺' },
  { code: 'CAD', symbol: 'C$', rate: 0.017, flag: '🇨🇦' },
];

export default function CurrencyConverter() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [includeGST, setIncludeGST] = useState(false);

  const basePrice = 15000;
  const priceWithGST = basePrice * 1.18;
  const finalPrice = includeGST ? priceWithGST : basePrice;
  const convertedPrice = Math.round(finalPrice * selectedCurrency.rate);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-darkgrey mb-2">
          💰 Pricing in Your Currency
        </h3>
        <p className="text-gray-600">
          One-time payment. Lifetime ownership. No hidden fees.
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-darkgrey mb-3">
          Select Your Currency
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency)}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedCurrency.code === currency.code
                  ? 'border-primary bg-primary text-white shadow-lg scale-105'
                  : 'border-gray-200 hover:border-primary hover:shadow-md'
              }`}
            >
              <div className="text-2xl mb-1">{currency.flag}</div>
              <div className="font-semibold text-sm">{currency.code}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            checked={includeGST}
            onChange={(e) => setIncludeGST(e.target.checked)}
            className="w-5 h-5 text-primary focus:ring-primary rounded"
          />
          <span className="text-gray-700">
            <strong>Add GST Billing</strong> (18% additional for Indian businesses requiring GST invoice)
          </span>
        </label>
      </div>

      <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl text-center">
        <div className="text-sm opacity-90 mb-2">One-Time Investment</div>
        <div className="text-5xl font-bold mb-4">
          {selectedCurrency.symbol}{convertedPrice.toLocaleString()}
        </div>
        {includeGST && (
          <div className="text-sm opacity-90 mb-4">
            (₹{basePrice.toLocaleString()} + ₹{(priceWithGST - basePrice).toLocaleString()} GST)
          </div>
        )}
        <div className="space-y-2 text-sm opacity-95">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">✓</span>
            <span>Lifetime hosting included</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">✓</span>
            <span>Free updates forever</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">✓</span>
            <span>No recurring monthly fees</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          * Exchange rates are approximate and updated periodically. Final amount will be calculated at checkout.
        </p>
      </div>
    </div>
  );
}
