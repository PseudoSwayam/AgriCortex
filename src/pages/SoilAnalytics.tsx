import { TrendingDown, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const sensorHistory = [
  { date: 'Feb 14', moisture: 66, temp: 24, ph: 6.5 },
  { date: 'Feb 15', moisture: 68, temp: 25, ph: 6.6 },
  { date: 'Feb 16', moisture: 70, temp: 25, ph: 6.5 },
  { date: 'Feb 17', moisture: 67, temp: 26, ph: 6.4 },
  { date: 'Feb 18', moisture: 65, temp: 25, ph: 6.5 },
  { date: 'Feb 19', moisture: 66, temp: 24, ph: 6.6 },
  { date: 'Feb 20', moisture: 68, temp: 24, ph: 6.5 },
];

const stabilityProjection = [
  { day: 'Day 1', actual: 88, projected: 88 },
  { day: 'Day 5', actual: null, projected: 86 },
  { day: 'Day 10', actual: null, projected: 84 },
  { day: 'Day 15', actual: null, projected: 81 },
  { day: 'Day 20', actual: null, projected: 79 },
  { day: 'Day 25', actual: null, projected: 77 },
  { day: 'Day 30', actual: null, projected: 75 },
];

export default function SoilAnalytics() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-blue-600 dark:from-white dark:via-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-2">Data-Driven Soil Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Detailed sensor data and projections</p>
      </div>

      {/* Raw Sensor Data */}
      <div className="bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 rounded-2xl p-6 border-2 border-gray-100 dark:border-gray-700 shadow-lg mb-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Raw Sensor Data (7 Days)</h2>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sensorHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Line type="monotone" dataKey="moisture" stroke="#3b82f6" strokeWidth={3} name="Moisture (%)" dot={{ fill: '#3b82f6', r: 5, strokeWidth: 2, stroke: '#fff' }} />
            <Line type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={3} name="Temperature (°C)" dot={{ fill: '#f59e0b', r: 5, strokeWidth: 2, stroke: '#fff' }} />
            <Line type="monotone" dataKey="ph" stroke="#10b981" strokeWidth={3} name="pH Level" dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: '#fff' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Soil Stability Projection */}
      <div className="bg-gradient-to-br from-white to-red-50/30 dark:from-gray-800 dark:to-red-900/10 rounded-2xl p-6 border-2 border-gray-100 dark:border-gray-700 shadow-lg mb-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <TrendingDown className="w-6 h-6 text-red-600" />
              Soil Stability Projection (30 Days)
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Predicted degradation without intervention</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={stabilityProjection}>
            <defs>
              <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} domain={[0, 100]} />
            <Tooltip />
            <Area type="monotone" dataKey="projected" stroke="#ef4444" fillOpacity={1} fill="url(#colorProjected)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Degradation Speed Indicator */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="group bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-red-200 dark:border-red-800 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Degradation Speed</span>
          </div>
          <div className="text-4xl font-bold text-red-600">-0.43</div>
          <div className="text-xs text-gray-500 mt-1">points per day</div>
        </div>

        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Current pH Level</span>
          </div>
          <div className="text-4xl font-bold text-gray-900 dark:text-white">6.5</div>
          <div className="text-xs text-green-600 font-semibold mt-1">✓ Optimal range (6.0-7.0)</div>
        </div>

        <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Nutrient Retention</span>
          </div>
          <div className="text-4xl font-bold text-gray-900 dark:text-white">82%</div>
          <div className="text-xs text-gray-500 mt-1">Above average</div>
        </div>
      </div>
    </div>
  );
}
