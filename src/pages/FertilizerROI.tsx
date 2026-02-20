import { useState } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const fertilizerOptions = [
  { type: 'Urea (46-0-0)', cost: 850, yieldGain: 0.8, profit: 12500 },
  { type: 'DAP (18-46-0)', cost: 1200, yieldGain: 1.2, profit: 18500 },
  { type: 'NPK (17-17-17)', cost: 1450, yieldGain: 1.5, profit: 22800, recommended: true },
  { type: 'Organic Compost', cost: 650, yieldGain: 0.6, profit: 9200 },
];

export default function FertilizerROI() {
  const [amount, setAmount] = useState(50);
  const [rainfall, setRainfall] = useState(100);
  const [price, setPrice] = useState(5000);

  const roiData = [
    { amount: 0, roi: 0 },
    { amount: 20, roi: 8000 },
    { amount: 40, roi: 14000 },
    { amount: 60, roi: 18000 },
    { amount: 80, roi: 20000 },
    { amount: 100, roi: 21000 },
  ];

  const calculatedROI = ((amount / 100) * (rainfall / 100) * price * 0.4).toFixed(0);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fertilizer ROI Simulator</h1>
        <p className="text-gray-600 dark:text-gray-400">Optimize fertilizer investment for maximum returns</p>
      </div>

      {/* Sliders */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Simulation Parameters</h2>
        <div className="space-y-6">
          <div>
            <label className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span>Fertilizer Amount</span>
              <span className="font-semibold">{amount} kg/acre</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div>
            <label className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span>Expected Rainfall</span>
              <span className="font-semibold">{rainfall} mm</span>
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={rainfall}
              onChange={(e) => setRainfall(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
              <span>Crop Price per Ton</span>
              <span className="font-semibold">₹{price}</span>
            </label>
            <input
              type="range"
              min="3000"
              max="8000"
              step="100"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Estimated ROI</p>
              <p className="text-3xl font-bold text-green-600 mt-1">₹{calculatedROI}</p>
            </div>
            <DollarSign className="w-12 h-12 text-green-600 opacity-20" />
          </div>
        </div>
      </div>

      {/* ROI Graph */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">ROI vs Fertilizer Amount</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={roiData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="amount" stroke="#6b7280" style={{ fontSize: '12px' }} label={{ value: 'Fertilizer (kg/acre)', position: 'insideBottom', offset: -5 }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} label={{ value: 'ROI (₹)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="roi" stroke="#16a34a" strokeWidth={3} dot={{ fill: '#16a34a', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recommendation Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fertilizer Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Cost/acre</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Yield Gain</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Profit Increase</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {fertilizerOptions.map((option, index) => (
                <tr key={index} className={`border-b border-gray-100 dark:border-gray-700 ${option.recommended ? 'bg-green-50 dark:bg-green-900/10' : ''}`}>
                  <td className="py-4 px-4 text-sm text-gray-900 dark:text-white font-medium">{option.type}</td>
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">₹{option.cost}</td>
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      {option.yieldGain} tons
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-green-600">+₹{option.profit.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm">
                    {option.recommended && (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Best Choice
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
