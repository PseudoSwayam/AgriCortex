import { Brain, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const featureImportance = [
  { feature: 'Soil Moisture', importance: 85, impact: 'positive' },
  { feature: 'Temperature', importance: 72, impact: 'negative' },
  { feature: 'Rainfall Pattern', importance: 68, impact: 'negative' },
  { feature: 'Nutrient Levels', importance: 62, impact: 'positive' },
  { feature: 'pH Balance', importance: 55, impact: 'neutral' },
  { feature: 'Pest Activity', importance: 48, impact: 'negative' },
];

export default function AIExplanation() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Explainability Panel</h1>
        <p className="text-gray-600 dark:text-gray-400">Understanding AI predictions and feature importance</p>
      </div>

      {/* Feature Importance Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Feature Importance (SHAP Values)</h2>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={featureImportance} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis dataKey="feature" type="category" stroke="#6b7280" style={{ fontSize: '12px' }} width={150} />
            <Tooltip />
            <Bar dataKey="importance" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top 3 Factors */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top 3 Factors Affecting Yield Risk</h2>
        <div className="space-y-4">
          {featureImportance.slice(0, 3).map((item, index) => {
            const Icon = item.impact === 'positive' ? TrendingUp : item.impact === 'negative' ? TrendingDown : Minus;
            const color = item.impact === 'positive' ? 'text-green-600' : item.impact === 'negative' ? 'text-red-600' : 'text-gray-600';
            const bg = item.impact === 'positive' ? 'bg-green-50' : item.impact === 'negative' ? 'bg-red-50' : 'bg-gray-50';
            
            return (
              <div key={index} className={`${bg} dark:${bg.replace('50', '900/20')} rounded-lg p-4 border border-gray-200 dark:border-gray-700`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.feature}</h3>
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.feature === 'Soil Moisture' && 'Current moisture level (68%) is optimal for crop growth, contributing positively to yield stability.'}
                      {item.feature === 'Temperature' && 'Rising temperatures (24°C avg) may stress plants if exceeding 30°C, increasing risk.'}
                      {item.feature === 'Rainfall Pattern' && 'Irregular rainfall patterns detected. Excessive rain could reduce stability by 40%.'}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-purple-600">{item.importance}</div>
                    <div className="text-xs text-gray-500">importance</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Decision Explanation */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="text-lg font-semibold text-purple-900 dark:text-purple-400 mb-3">🤖 AI Decision Explanation</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          Based on analysis of 15 features across your farm, our AI model predicts a <strong>Medium Risk (28%)</strong> for yield loss this season. The primary driver is <strong>Soil Moisture (85% importance)</strong>, which is currently optimal.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          However, <strong>Temperature</strong> and <strong>Rainfall Patterns</strong> pose moderate risks. The model recommends maintaining current irrigation schedules and monitoring weather forecasts closely. Expected yield: <strong>4.5 ± 0.8 tons/acre</strong>.
        </p>
      </div>
    </div>
  );
}
