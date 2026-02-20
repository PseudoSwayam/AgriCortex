
import { CloudRain, TrendingDown } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { climateData } from '../mockData';

export default function ClimateSensitivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
          <CloudRain className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Climate Sensitivity Analysis
        </h2>
      </div>

      <div className="mb-4">
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              type="number"
              dataKey="rainfall"
              name="Rainfall"
              unit="mm"
              stroke="#6b7280"
              label={{ value: 'Rainfall (mm)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis
              type="number"
              dataKey="stability"
              name="Stability"
              stroke="#6b7280"
              label={{ value: 'Soil Stability', angle: -90, position: 'insideLeft' }}
              domain={[0, 100]}
            />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
              }}
            />
            <Scatter
              name="Rainfall vs Stability"
              data={climateData}
              fill="#3b82f6"
              shape="circle"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <p className="text-sm font-semibold text-orange-700 dark:text-orange-400">
              Key Insight
            </p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            High humidity increases nutrient loss risk by <span className="font-bold text-orange-600">35%</span>
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-2">
            <CloudRain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Rainfall Impact
            </p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Excessive rainfall (&gt;100mm) reduces stability by up to <span className="font-bold text-blue-600">40%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
