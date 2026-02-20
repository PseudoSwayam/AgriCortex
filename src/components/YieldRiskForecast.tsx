import { TrendingDown, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { yieldRisk } from '../mockData';

export default function YieldRiskForecast() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
          <TrendingDown className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Yield Risk Forecast
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={yieldRisk.probabilities}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {yieldRisk.probabilities.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Expected Yield
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {yieldRisk.expectedYield} <span className="text-lg">± {yieldRisk.variance}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">tons per acre</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                Risk of Loss
              </p>
            </div>
            <p className="text-3xl font-bold text-red-700 dark:text-red-400">
              {yieldRisk.riskPercentage}%
            </p>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
            <p className="font-medium text-blue-700 dark:text-blue-400 mb-1">📊 Insight</p>
            <p>Current conditions suggest moderate risk. Follow AI advisories to optimize yield.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
