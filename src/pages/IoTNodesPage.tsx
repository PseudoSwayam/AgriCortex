import { Wifi, Battery, Signal, MapPin, Activity, CheckCircle, AlertTriangle } from 'lucide-react';

const iotNodes = [
  {
    id: 'NODE-001',
    name: 'North Field Sensor',
    type: 'Soil Moisture',
    battery: 85,
    signal: 92,
    lastSync: '2 mins ago',
    status: 'active',
    location: '23.4567°N, 77.8901°E',
    health: 'excellent',
  },
  {
    id: 'NODE-002',
    name: 'Weather Station',
    type: 'Climate Monitor',
    battery: 67,
    signal: 88,
    lastSync: '5 mins ago',
    status: 'active',
    location: '23.4568°N, 77.8902°E',
    health: 'good',
  },
  {
    id: 'NODE-003',
    name: 'South Field Sensor',
    type: 'NPK Analyzer',
    battery: 42,
    signal: 76,
    lastSync: '8 mins ago',
    status: 'warning',
    location: '23.4565°N, 77.8899°E',
    health: 'fair',
  },
  {
    id: 'NODE-004',
    name: 'Irrigation Pump',
    type: 'Flow Meter',
    battery: 91,
    signal: 95,
    lastSync: '1 min ago',
    status: 'active',
    location: '23.4566°N, 77.8900°E',
    health: 'excellent',
  },
];

export default function IoTNodesPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">IoT Device Status</h1>
        <p className="text-gray-600 dark:text-gray-400">Real-time monitoring of connected sensors and devices across your farm</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Devices</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">4</p>
            </div>
            <Activity className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
              <p className="text-2xl font-bold text-green-600">3</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Warnings</p>
              <p className="text-2xl font-bold text-orange-600">1</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Battery</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">71%</p>
            </div>
            <Battery className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Device Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {iotNodes.map((node) => (
          <div
            key={node.id}
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 border-2 ${
              node.status === 'active' ? 'border-green-500' : 'border-orange-500'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{node.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{node.id}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  node.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                {node.status.toUpperCase()}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Device Type</p>
              <p className="text-base font-semibold text-gray-900 dark:text-white">{node.type}</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Battery */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Battery className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Battery</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      node.battery > 60 ? 'bg-green-500' : node.battery > 30 ? 'bg-orange-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${node.battery}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">{node.battery}%</p>
              </div>

              {/* Signal */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Signal className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Signal</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${node.signal}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">{node.signal}%</p>
              </div>
            </div>

            {/* Location and Sync */}
            <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{node.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Last sync: {node.lastSync}</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Health: {node.health}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
