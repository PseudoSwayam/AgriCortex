
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { multiFarmData } from '../mockData';

export default function MultiFarmView() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Multi-Farm Comparison
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={multiFarmData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
            }}
          />
          <Legend />
          <Bar dataKey="stability" fill="#22c55e" name="Stability Score" radius={[8, 8, 0, 0]} />
          <Bar dataKey="yieldRisk" fill="#ef4444" name="Yield Risk %" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {multiFarmData.map((farm, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
          >
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">{farm.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Stability:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">{farm.stability}/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Yield Risk:</span>
                <span className="font-semibold text-red-600 dark:text-red-400">{farm.yieldRisk}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">ROI:</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">₹{farm.roi.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
