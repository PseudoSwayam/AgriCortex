import { CloudRain, Thermometer, Droplets } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const rainfallStabilityData = [
  { rainfall: 20, stability: 85 },
  { rainfall: 35, stability: 78 },
  { rainfall: 50, stability: 72 },
  { rainfall: 80, stability: 65 },
  { rainfall: 120, stability: 58 },
  { rainfall: 150, stability: 52 },
];

export default function ClimateImpact() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Climate Impact Analysis</h1>
        <p className="text-gray-600 dark:text-gray-400">Understanding weather effects on soil and yield</p>
      </div>

      {/* Rainfall vs Stability */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Rainfall vs Soil Stability</h2>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" dataKey="rainfall" name="Rainfall" unit="mm" stroke="#6b7280" label={{ value: 'Rainfall (mm)', position: 'insideBottom', offset: -5 }} />
            <YAxis type="number" dataKey="stability" name="Stability" stroke="#6b7280" label={{ value: 'Soil Stability', angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Data Points" data={rainfallStabilityData} fill="#3b82f6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Climate Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Heat Stress Risk</span>
          </div>
          <div className="text-3xl font-bold text-red-600 mb-2">High</div>
          <p className="text-xs text-gray-500">Expected max: 38°C on Feb 22</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <CloudRain className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Rainfall Sensitivity</span>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
          <p className="text-xs text-gray-500">Stability drops at &gt;100mm</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Humidity Impact</span>
          </div>
          <div className="text-3xl font-bold text-orange-600 mb-2">35%</div>
          <p className="text-xs text-gray-500">Nutrient loss increase</p>
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
          <h3 className="font-semibold text-orange-900 dark:text-orange-400 mb-2">⚠️ Key Insight</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            High humidity levels increase nutrient loss risk by up to 35%. Consider protected cultivation during monsoon.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-2">💧 Rainfall Impact</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Excessive rainfall (&gt;100mm) reduces soil stability by up to 40%. Plan drainage systems accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}
