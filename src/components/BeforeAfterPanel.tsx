import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { useFarm } from '../context/FarmContext';

export default function BeforeAfterPanel() {
  const { beforeData, afterData } = useFarm();

  const metrics = [
    { 
      label: 'Fertilizer Cost', 
      before: `₹${beforeData.fertilizerCost.toLocaleString()}`, 
      after: `₹${afterData.fertilizerCost.toLocaleString()}`,
      improvement: -((afterData.fertilizerCost - beforeData.fertilizerCost) / beforeData.fertilizerCost * 100),
      type: 'cost'
    },
    { 
      label: 'Yield', 
      before: `${beforeData.yield.toFixed(1)} tons`, 
      after: `${afterData.yield.toFixed(1)} tons`,
      improvement: ((afterData.yield - beforeData.yield) / beforeData.yield * 100),
      type: 'yield'
    },
    { 
      label: 'Profit', 
      before: `₹${beforeData.profit.toLocaleString()}`, 
      after: `₹${afterData.profit.toLocaleString()}`,
      improvement: ((afterData.profit - beforeData.profit) / beforeData.profit * 100),
      type: 'profit'
    },
    { 
      label: 'Risk', 
      before: `${beforeData.risk}%`, 
      after: `${afterData.risk}%`,
      improvement: -((afterData.risk - beforeData.risk) / beforeData.risk * 100),
      type: 'risk'
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/10 dark:via-emerald-900/10 dark:to-teal-900/10 rounded-2xl p-6 border-2 border-green-300 dark:border-green-700 shadow-xl">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 dark:bg-green-700/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200/20 dark:bg-emerald-700/10 rounded-full blur-3xl -z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-green-700 to-green-600 dark:from-white dark:via-green-400 dark:to-green-300 bg-clip-text text-transparent">Impact Analysis</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Before vs After AgriCortex</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-green-500/40 animate-pulse">
            +82% ROI Improvement
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-900 dark:to-green-900/20 border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-5 text-sm font-bold text-gray-700 dark:text-gray-300">Metric</th>
                <th className="text-center py-4 px-5 text-sm font-bold text-gray-700 dark:text-gray-300">Before AgriCortex</th>
                <th className="text-center py-4 px-5 text-sm font-bold text-gray-700 dark:text-gray-300"></th>
                <th className="text-center py-4 px-5 text-sm font-bold text-gray-700 dark:text-gray-300">After AgriCortex</th>
                <th className="text-center py-4 px-5 text-sm font-bold text-gray-700 dark:text-gray-300">Change</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors">
                  <td className="py-5 px-5 text-sm font-bold text-gray-900 dark:text-white">{metric.label}</td>
                  <td className="py-5 px-5 text-center text-sm font-medium text-gray-600 dark:text-gray-400">{metric.before}</td>
                  <td className="py-5 px-5 text-center">
                    <ArrowRight className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-5 px-5 text-center text-sm font-bold text-green-600 dark:text-green-400">{metric.after}</td>
                  <td className="py-5 px-5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {metric.improvement > 0 ? (
                        <>
                          <TrendingUp className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-bold text-green-600">+{metric.improvement.toFixed(0)}%</span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="w-5 h-5 text-red-600" />
                          <span className="text-sm font-bold text-red-600">{metric.improvement.toFixed(0)}%</span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 p-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-xl shadow-green-500/30">
          <p className="text-center font-bold text-lg">
            💰 Total Profit Increase: ₹{(afterData.profit - beforeData.profit).toLocaleString()} 
            <span className="ml-2 text-green-100">({((afterData.profit - beforeData.profit) / beforeData.profit * 100).toFixed(0)}% improvement)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
