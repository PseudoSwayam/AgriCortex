import { TrendingUp, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const accuracyData = [
  { month: 'Jan', accuracy: 72 },
  { month: 'Feb', accuracy: 75 },
  { month: 'Mar', accuracy: 78 },
  { month: 'Apr', accuracy: 81 },
  { month: 'May', accuracy: 84 },
  { month: 'Jun', accuracy: 87 },
];

const predictionVsActual = [
  { week: 'Week 1', predicted: 4.2, actual: 4.0 },
  { week: 'Week 2', predicted: 4.4, actual: 4.3 },
  { week: 'Week 3', predicted: 4.5, actual: 4.6 },
  { week: 'Week 4', predicted: 4.7, actual: 4.5 },
  { week: 'Week 5', predicted: 4.8, actual: 4.9 },
  { week: 'Week 6', predicted: 5.0, actual: 4.8 },
];

export default function HistoricalLearning() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Data-Driven Historical Learning</h1>
        <p className="text-gray-600 dark:text-gray-400">Model performance and learning progress</p>
      </div>

      {/* Model Accuracy Improvement */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Model Accuracy Improvement</h2>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={accuracyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} domain={[60, 100]} label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="accuracy" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            ✅ Model accuracy improved by 15% over the last 6 months through continuous learning
          </p>
        </div>
      </div>

      {/* Predictions vs Actual */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Past Predictions vs Actual Yield</h2>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={predictionVsActual}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="week" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} label={{ value: 'Yield (tons/acre)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} name="Predicted" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Actual" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Predictions</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">1,248</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Average Error</p>
          <p className="text-2xl font-bold text-green-600">±0.3 tons</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Accuracy</p>
          <p className="text-2xl font-bold text-blue-600">87%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Data Points</p>
          <p className="text-2xl font-bold text-purple-600">45.2K</p>
        </div>
      </div>
    </div>
  );
}
