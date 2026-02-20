
import { MapPin, Sprout, Clock, Cloud } from 'lucide-react';
import { farmInfo, weatherInfo } from '../mockData';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 mb-6 border border-green-200 dark:border-green-800">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AgriCortex-AI Dashboard
          </h1>
          <p className="text-green-700 dark:text-green-400 font-medium mb-4">
            Soil Stability & Fertilizer Risk Intelligence
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg">
              <Sprout className="w-4 h-4 text-green-600" />
              <span className="text-gray-600 dark:text-gray-400">Farm:</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {farmInfo.name}
              </span>
            </div>
            
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-gray-600 dark:text-gray-400">Crop:</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {farmInfo.crop}
              </span>
            </div>
            
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-gray-600 dark:text-gray-400">Updated:</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {farmInfo.lastUpdated}
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center gap-3">
          <Cloud className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Weather</p>
            <p className="font-bold text-gray-900 dark:text-white">
              {weatherInfo.temperature}°C
            </p>
            <p className="text-xs text-gray-500">{weatherInfo.condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
