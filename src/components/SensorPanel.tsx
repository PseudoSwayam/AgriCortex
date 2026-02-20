import { useState, useEffect } from 'react';
import { Droplets, Thermometer, Wind, Sun, Gauge } from 'lucide-react';
import { sensorData } from '../mockData';

interface SensorCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  unit: string;
  color: string;
  max: number;
}

function SensorCard({ icon: Icon, label, value, unit, color, max }: SensorCardProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = (value / max) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {animatedValue}
          <span className="text-lg text-gray-500">{unit}</span>
        </span>
      </div>
      
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        {label}
      </p>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color.replace('bg-', 'bg-').split('/')[0]} transition-all duration-1000`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function SensorPanel() {
  const sensors = [
    {
      icon: Droplets,
      label: 'Soil Moisture',
      value: sensorData.soilMoisture,
      unit: '%',
      color: 'bg-blue-500',
      max: 100,
    },
    {
      icon: Thermometer,
      label: 'Soil Temperature',
      value: sensorData.soilTemperature,
      unit: '°C',
      color: 'bg-orange-500',
      max: 50,
    },
    {
      icon: Wind,
      label: 'Air Temperature',
      value: sensorData.airTemperature,
      unit: '°C',
      color: 'bg-red-500',
      max: 50,
    },
    {
      icon: Gauge,
      label: 'Humidity',
      value: sensorData.humidity,
      unit: '%',
      color: 'bg-cyan-500',
      max: 100,
    },
    {
      icon: Sun,
      label: 'Light Intensity',
      value: sensorData.lightIntensity,
      unit: '%',
      color: 'bg-yellow-500',
      max: 100,
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Live Sensor Data
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {sensors.map((sensor, index) => (
          <SensorCard key={index} {...sensor} />
        ))}
      </div>
    </div>
  );
}
