import { useState, useEffect } from 'react';
import { TrendingUp, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { currentStability, stabilityHistory } from '../mockData';

export default function SoilStabilityIndex() {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let current = 0;
    const increment = currentStability.score / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= currentStability.score) {
        setAnimatedScore(currentStability.score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Stable':
        return 'from-green-400 to-green-600';
      case 'Warning':
        return 'from-yellow-400 to-orange-500';
      case 'Critical':
        return 'from-red-400 to-red-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Stable':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Critical':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="mb-6">
      <div className={`bg-gradient-to-br ${getStatusColor(currentStability.status)} rounded-2xl p-8 shadow-lg relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold text-white">
                  Soil Stability Index (SSI)
                </h2>
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="relative"
                >
                  <Info className="w-5 h-5 text-white/80 hover:text-white" />
                  {showTooltip && (
                    <div className="absolute left-0 top-8 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl z-20">
                      SSI measures soil health based on moisture, temperature, nutrients, and structural integrity. Higher scores indicate better stability.
                    </div>
                  )}
                </button>
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${getStatusBadge(currentStability.status)}`}>
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold text-sm">{currentStability.status}</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-1">
                {animatedScore}
              </div>
              <p className="text-white/80 text-sm font-medium">out of 100</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white/90 text-sm font-medium mb-3">Last 7 Days Trend</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={stabilityHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="date"
                  stroke="rgba(255,255,255,0.8)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.8)"
                  style={{ fontSize: '12px' }}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#ffffff"
                  strokeWidth={3}
                  dot={{ fill: '#ffffff', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
