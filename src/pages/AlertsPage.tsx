import { AlertTriangle, CloudRain, TrendingUp, Thermometer, CheckCircle, XCircle, Clock } from 'lucide-react';

const alerts = [
  {
    id: 1,
    priority: 'high',
    type: 'weather',
    icon: CloudRain,
    title: 'Heavy Rainfall Alert',
    message: 'Rain expected in 24 hours (45mm). Postpone fertilizer application.',
    action: 'Reschedule Fertilizer',
    time: '2 hours ago',
    status: 'active',
  },
  {
    id: 2,
    priority: 'critical',
    type: 'temperature',
    icon: Thermometer,
    title: 'High Temperature Warning',
    message: 'Temperature expected to reach 38°C on Feb 22. Increase irrigation frequency.',
    action: 'Adjust Irrigation',
    time: '5 hours ago',
    status: 'active',
  },
  {
    id: 3,
    priority: 'medium',
    type: 'soil',
    icon: TrendingUp,
    title: 'Soil Stability Improvement',
    message: 'Soil stability improved by 12% this week. Conditions favorable for planting.',
    action: 'View Details',
    time: '1 day ago',
    status: 'active',
  },
  {
    id: 4,
    priority: 'low',
    type: 'general',
    icon: CheckCircle,
    title: 'Optimal Conditions',
    message: 'Current moisture levels (68%) are optimal for wheat growth.',
    action: 'Maintain Schedule',
    time: '2 days ago',
    status: 'resolved',
  },
];

const recommendations = [
  {
    id: 1,
    category: 'Irrigation',
    recommendation: 'Water crops tomorrow evening between 6-8 PM for optimal absorption.',
    confidence: 92,
  },
  {
    id: 2,
    category: 'Fertilizer',
    recommendation: 'Apply NPK fertilizer at 60 kg/acre after expected rainfall.',
    confidence: 88,
  },
  {
    id: 3,
    category: 'Pest Control',
    recommendation: 'Monitor for aphid activity. Consider preventive spray if detected.',
    confidence: 75,
  },
];

export default function AlertsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Alerts & Recommendations</h1>
        <p className="text-gray-600 dark:text-gray-400">Real-time alerts and data-driven recommendations</p>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500 opacity-20" />
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-700 dark:text-red-400">Critical</p>
              <p className="text-2xl font-bold text-red-600">1</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500 opacity-20" />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-700 dark:text-orange-400">High Priority</p>
              <p className="text-2xl font-bold text-orange-600">1</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500 opacity-20" />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 dark:text-green-400">Resolved</p>
              <p className="text-2xl font-bold text-green-600">1</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500 opacity-20" />
          </div>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Active Alerts</h2>
        <div className="space-y-4">
          {alerts.map((alert) => {
            const bgColor = alert.priority === 'critical' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' 
              : alert.priority === 'high' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
              : alert.priority === 'medium' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
              : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
            
            const Icon = alert.icon;
            
            return (
              <div key={alert.id} className={`${bgColor} border rounded-lg p-4`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${bgColor.split(' ')[0].replace('50', '100')} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{alert.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{alert.message}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        alert.priority === 'critical' ? 'bg-red-100 text-red-700' 
                        : alert.priority === 'high' ? 'bg-orange-100 text-orange-700'
                        : alert.priority === 'medium' ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                      }`}>
                        {alert.priority.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </div>
                      <button className="px-3 py-1.5 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        {alert.action}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AI Recommendations</h2>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold rounded mb-2">
                    {rec.category}
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{rec.recommendation}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs text-gray-600 dark:text-gray-400">Confidence:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${rec.confidence}%` }} />
                </div>
                <span className="text-xs font-semibold text-purple-600">{rec.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
