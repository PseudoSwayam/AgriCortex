import { useState } from 'react';
import { FlaskConical, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WhatIfSimulator() {
  const [cropType, setCropType] = useState('wheat');
  const [soilType, setSoilType] = useState('loamy');
  const [irrigation, setIrrigation] = useState('evening');

  const baselineData = [
    { month: 'Mar', baseline: 3.5, simulated: 3.5 },
    { month: 'Apr', baseline: 3.8, simulated: 4.0 },
    { month: 'May', baseline: 4.2, simulated: 4.5 },
    { month: 'Jun', baseline: 4.5, simulated: 5.0 },
  ];

  const profitChange = cropType === 'wheat' && soilType === 'loamy' && irrigation === 'evening' ? '+18%' : '+12%';
  const color = profitChange.includes('+') ? 'text-green-600' : 'text-red-600';

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">What-If Simulator</h1>
        <p className="text-gray-600 dark:text-gray-400">Experiment with different scenarios</p>
      </div>

      {/* Parameters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FlaskConical className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Simulation Parameters</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Crop Type</label>
            <select
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="corn">Corn</option>
              <option value="soybean">Soybean</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Soil Type</label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="loamy">Loamy</option>
              <option value="clay">Clay</option>
              <option value="sandy">Sandy</option>
              <option value="silty">Silty</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Irrigation Timing</label>
            <select
              value={irrigation}
              onChange={(e) => setIrrigation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="morning">Morning (6-8 AM)</option>
              <option value="evening">Evening (6-8 PM)</option>
              <option value="afternoon">Afternoon (12-2 PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prediction Graph */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Yield Prediction Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={baselineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} label={{ value: 'Yield (tons/acre)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="baseline" stroke="#6b7280" strokeWidth={2} name="Baseline" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="simulated" stroke="#6366f1" strokeWidth={2} name="Simulated" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className={`w-5 h-5 ${color}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">Profit Change</span>
          </div>
          <div className={`text-4xl font-bold ${color} mb-2`}>{profitChange}</div>
          <p className="text-xs text-gray-500">vs baseline scenario</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">Simulated Yield</span>
          </div>
          <div className="text-4xl font-bold text-indigo-600 mb-2">5.0</div>
          <p className="text-xs text-gray-500">tons per acre (expected)</p>
        </div>
      </div>
    </div>
  );
}
