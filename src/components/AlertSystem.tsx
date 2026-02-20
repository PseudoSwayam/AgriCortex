
import { CloudRain, TrendingUp, AlertTriangle } from 'lucide-react';
import { alerts } from '../mockData';

export default function AlertSystem() {
  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'danger':
        return {
          bg: 'bg-red-50 dark:bg-red-900/20',
          border: 'border-red-200 dark:border-red-800',
          icon: 'text-red-600 dark:text-red-400',
          text: 'text-red-700 dark:text-red-300',
        };
      case 'warning':
        return {
          bg: 'bg-yellow-50 dark:bg-yellow-900/20',
          border: 'border-yellow-200 dark:border-yellow-800',
          icon: 'text-yellow-600 dark:text-yellow-400',
          text: 'text-yellow-700 dark:text-yellow-300',
        };
      default:
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-800',
          icon: 'text-blue-600 dark:text-blue-400',
          text: 'text-blue-700 dark:text-blue-300',
        };
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudRain':
        return CloudRain;
      case 'TrendingUp':
        return TrendingUp;
      case 'AlertTriangle':
        return AlertTriangle;
      default:
        return AlertTriangle;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Active Alerts
        </h2>
        <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold px-2.5 py-1 rounded-full">
          {alerts.length} Active
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const style = getAlertStyle(alert.type);
          const Icon = getIcon(alert.icon);
          
          return (
            <div
              key={alert.id}
              className={`${style.bg} border ${style.border} rounded-xl p-4 flex items-start gap-3`}
            >
              <div className={`flex-shrink-0 ${style.icon}`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className={`text-sm ${style.text} leading-relaxed`}>
                {alert.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
