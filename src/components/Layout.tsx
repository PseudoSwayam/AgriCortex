import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  LayoutDashboard,
  Layers,
  TrendingDown,
  DollarSign,
  CloudRain,
  Brain,
  FlaskConical,
  BarChart3,
  Database,
  Bell,
  Moon,
  Sun,
  Wifi,
  Award,
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  activePage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
  { icon: Layers, label: 'Soil Analytics', id: 'soil' },
  { icon: TrendingDown, label: 'Yield Risk Forecast', id: 'yield' },
  { icon: DollarSign, label: 'Fertilizer ROI Simulator', id: 'fertilizer' },
  { icon: CloudRain, label: 'Climate Impact', id: 'climate' },
  { icon: Brain, label: 'Explainability Panel', id: 'ai' },
  { icon: FlaskConical, label: 'What-If Simulator', id: 'whatif' },
  { icon: BarChart3, label: 'Multi-Farm Comparison', id: 'multifarm' },
  { icon: Database, label: 'Historical Learning', id: 'historical' },
  { icon: Bell, label: 'Alerts & Recommendations', id: 'alerts' },
  { icon: Wifi, label: 'IoT Nodes', id: 'iot' },
  { icon: Award, label: 'Subsidy Insights', id: 'subsidy' },
];

export default function DashboardLayout({ children, activePage, onPageChange }: LayoutProps) {
  const sidebarOpen = true;
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-blue-50/20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-20'
          } bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 shadow-xl transition-all duration-300 flex flex-col`}
        >
          {/* Logo */}
          <div className="h-20 flex items-center justify-center px-3 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-green-50/50 to-transparent dark:from-green-900/20 dark:to-transparent">
            {sidebarOpen ? (
              <img 
                src="/AgriCortex.png" 
                alt="AgriCortex" 
                className="w-full h-auto max-h-16"
              />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-600/30">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 scale-[1.02]'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-green-50 dark:hover:from-gray-700 dark:hover:to-green-900/20 hover:scale-[1.01] hover:shadow-md'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="font-medium text-sm text-left whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                )}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-50 dark:hover:from-gray-700 dark:hover:to-blue-900/20 transition-all hover:shadow-md"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 flex-shrink-0 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 flex-shrink-0 text-indigo-500" />
              )}
              {sidebarOpen && (
                <span className="font-medium text-sm">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              )}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
