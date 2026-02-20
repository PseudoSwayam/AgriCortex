import { Droplets, Thermometer, Wind, Sun, TrendingUp, DollarSign, Shield, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useFarm } from '../context/FarmContext';
import RecommendationTimeline from '../components/RecommendationTimeline';
import BeforeAfterPanel from '../components/BeforeAfterPanel';

const sensorData = [
  { label: 'Soil Moisture', value: 68, unit: '%', icon: Droplets, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Temperature', value: 24, unit: '°C', icon: Thermometer, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Humidity', value: 62, unit: '%', icon: Wind, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { label: 'Light Intensity', value: 78, unit: '%', icon: Sun, color: 'text-yellow-600', bg: 'bg-yellow-50' },
];

const stabilityTrend = [
  { date: 'Feb 14', score: 72 },
  { date: 'Feb 15', score: 75 },
  { date: 'Feb 16', score: 78 },
  { date: 'Feb 17', score: 76 },
  { date: 'Feb 18', score: 82 },
  { date: 'Feb 19', score: 85 },
  { date: 'Feb 20', score: 88 },
];

const alerts = [
  { type: 'warning', message: 'Rain expected in 24 hours. Postpone fertilizer application.' },
  { type: 'info', message: 'Soil stability improved by 12% this week.' },
  { type: 'danger', message: 'High temperature alert: 38°C expected on Feb 22.' },
];

export default function Overview() {
  const { selectedPersona, afterData } = useFarm();
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-green-700 to-green-600 dark:from-white dark:via-green-400 dark:to-green-300 bg-clip-text text-transparent mb-2">Data-Driven Overview</h1>
        <p className="text-gray-600 dark:text-gray-400">Real-time monitoring and key insights for {selectedPersona.name}</p>
      </div>

      {/* Before/After Impact Panel */}
      <div className="mb-6">
        <BeforeAfterPanel />
      </div>

      {/* Sensor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {sensorData.map((sensor, index) => (
          <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl p-5 border-2 border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 rounded-xl ${sensor.bg} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <sensor.icon className={`w-6 h-6 ${sensor.color}`} />
              </div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {sensor.value}
                <span className="text-sm text-gray-500 ml-1">{sensor.unit}</span>
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{sensor.label}</p>
          </div>
        ))}
      </div>

      {/* Soil Stability Index */}
      <div className="bg-gradient-to-br from-white to-green-50/30 dark:from-gray-800 dark:to-green-900/10 rounded-2xl p-6 border-2 border-gray-100 dark:border-gray-700 shadow-lg mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              Soil Stability Index
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">7-day trend analysis</p>
          </div>
          <div className="text-right bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4 shadow-lg shadow-green-500/30">
            <div className="text-4xl font-bold">88</div>
            <div className="text-xs text-green-100">out of 100</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={stabilityTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#16a34a" strokeWidth={3} dot={{ fill: '#16a34a', r: 5, strokeWidth: 2, stroke: '#fff' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Economic Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-200 dark:border-green-800 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-all">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Estimated Profit</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">₹{afterData.profit.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">per acre this season</div>
        </div>

        <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-5 border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-all">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Fertilizer Cost</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">₹{afterData.fertilizerCost.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">optimized application</div>
        </div>

        <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-5 border-2 border-purple-200 dark:border-purple-800 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-all">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Risk Reduction</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{afterData.riskScore}%</div>
          <div className="text-xs text-gray-500 mt-1">compared to baseline</div>
        </div>
      </div>

      {/* Recommendation Timeline */}
      <div className="mb-6">
        <RecommendationTimeline />
      </div>

      {/* Active Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-100 dark:border-gray-700 shadow-lg">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Active Alerts
          </h2>
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-red-500/30">
            {alerts.length} Active
          </span>
        </div>
        <div className="space-y-3">
          {alerts.map((alert, index) => {
            const bgColor = alert.type === 'danger' ? 'bg-gradient-to-r from-red-50 to-orange-50 border-red-300' : alert.type === 'warning' ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-300';
            const textColor = alert.type === 'danger' ? 'text-red-700' : alert.type === 'warning' ? 'text-amber-700' : 'text-blue-700';
            const iconColor = alert.type === 'danger' ? 'text-red-600' : alert.type === 'warning' ? 'text-amber-600' : 'text-blue-600';
            return (
              <div key={index} className={`${bgColor} border-2 rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-all`}>
                <AlertTriangle className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                <p className={`text-sm font-medium ${textColor}`}>{alert.message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
