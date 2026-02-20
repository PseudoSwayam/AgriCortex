import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const farmData = [
  {
    name: 'Green Valley',
    stability: 88,
    yieldRisk: 28,
    roi: 22800,
  },
  {
    name: 'Sunrise Fields',
    stability: 76,
    yieldRisk: 42,
    roi: 18200,
  },
  {
    name: 'Golden Harvest',
    stability: 82,
    yieldRisk: 35,
    roi: 20500,
  },
];

export default function MultiFarm() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Data-Driven Multi-Farm Comparison</h1>
        <p className="text-gray-600 dark:text-gray-400">Compare performance across different farms</p>
      </div>

      {/* Comparison Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={farmData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Bar dataKey="stability" fill="#22c55e" name="Stability Score" radius={[8, 8, 0, 0]} />
            <Bar dataKey="yieldRisk" fill="#ef4444" name="Yield Risk %" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Detailed Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {farmData.map((farm, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{farm.name}</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Stability Score</span>
                    <span className="text-sm font-semibold text-green-600">{farm.stability}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${farm.stability}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Yield Risk</span>
                    <span className="text-sm font-semibold text-red-600">{farm.yieldRisk}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${farm.yieldRisk}%` }} />
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">ROI per acre</span>
                    <span className="text-sm font-semibold text-blue-600">₹{farm.roi.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
