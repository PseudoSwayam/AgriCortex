
import { Bot, Clock } from 'lucide-react';
import { aiAdvisories } from '../mockData';

export default function AIAdvisory() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      default:
        return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          AI Advisory Panel
        </h2>
      </div>

      <div className="space-y-4">
        {aiAdvisories.map((advisory) => (
          <div
            key={advisory.id}
            className={`border-l-4 ${getPriorityColor(advisory.priority)} rounded-r-xl p-4`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                  {advisory.message}
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  {advisory.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
          <Bot className="w-4 h-4" />
          Get More Recommendations
        </button>
      </div>
    </div>
  );
}
