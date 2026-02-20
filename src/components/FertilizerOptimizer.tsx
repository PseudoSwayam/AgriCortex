
import { DollarSign, TrendingUp, Award } from 'lucide-react';
import { fertilizerOptions } from '../mockData';

export default function FertilizerOptimizer() {
  const bestOption = fertilizerOptions.reduce((max, option) =>
    option.profitIncrease > max.profitIncrease ? option : max
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Fertilizer ROI Optimizer
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Fertilizer Type
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Cost (₹/acre)
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Yield Gain (t)
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Profit Increase
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {fertilizerOptions.map((option, index) => {
              const isBest = option.type === bestOption.type;
              return (
                <tr
                  key={index}
                  className={`border-b border-gray-100 dark:border-gray-700 ${
                    isBest ? 'bg-green-50 dark:bg-green-900/20' : ''
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {option.type}
                      </span>
                      {isBest && (
                        <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    ₹{option.cost.toLocaleString()}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      {option.yieldGain}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      +₹{option.profitIncrease.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {isBest && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                        Best Choice
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-700 dark:text-blue-400">
          <span className="font-semibold">💡 Recommendation:</span> NPK (17-17-17) offers the highest ROI with ₹22,800 profit increase and 1.5 tons yield gain per acre.
        </p>
      </div>
    </div>
  );
}
