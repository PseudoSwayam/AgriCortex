
import { Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { historicalTrends } from '../mockData';

export default function HistoricalTrends() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Historical Trends (14 Days)
        </h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={historicalTrends}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="soilMoisture"
            stroke="#3b82f6"
            strokeWidth={2}
            name="Soil Moisture (%)"
            dot={{ fill: '#3b82f6', r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="soilTemperature"
            stroke="#f59e0b"
            strokeWidth={2}
            name="Soil Temperature (°C)"
            dot={{ fill: '#f59e0b', r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Avg Soil Moisture</p>
          <p className="text-xl font-bold text-blue-600 dark:text-blue-400">65%</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 border border-orange-200 dark:border-orange-800">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Avg Soil Temperature</p>
          <p className="text-xl font-bold text-orange-600 dark:text-orange-400">24.2°C</p>
        </div>
      </div>
    </div>
  );
}
