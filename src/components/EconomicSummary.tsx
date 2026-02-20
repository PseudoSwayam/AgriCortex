import { useState, useEffect } from 'react';
import { DollarSign, PiggyBank, Shield } from 'lucide-react';
import { economicSummary } from '../mockData';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function EconomicSummary() {
  return (
    <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 shadow-lg text-white">
      <h2 className="text-xl font-bold mb-6">Economic Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
            <p className="text-sm text-white/80">Estimated Profit</p>
          </div>
          <p className="text-3xl font-bold">
            <AnimatedCounter end={economicSummary.estimatedProfit} prefix="₹" />
          </p>
          <p className="text-xs text-white/70 mt-1">per acre this season</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <PiggyBank className="w-4 h-4" />
            </div>
            <p className="text-sm text-white/80">Fertilizer Savings</p>
          </div>
          <p className="text-3xl font-bold">
            <AnimatedCounter end={economicSummary.fertilizerSavings} prefix="₹" />
          </p>
          <p className="text-xs text-white/70 mt-1">optimized application</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <p className="text-sm text-white/80">Risk Reduction</p>
          </div>
          <p className="text-3xl font-bold">
            <AnimatedCounter end={economicSummary.riskReduction} suffix="%" />
          </p>
          <p className="text-xs text-white/70 mt-1">compared to baseline</p>
        </div>
      </div>

      <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <p className="text-sm text-white/90">
          <span className="font-semibold">📈 Total Impact:</span> By following AI recommendations, you can increase profitability by ₹{(economicSummary.estimatedProfit + economicSummary.fertilizerSavings).toLocaleString()} while reducing risk by {economicSummary.riskReduction}%.
        </p>
      </div>
    </div>
  );
}
