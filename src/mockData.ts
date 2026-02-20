// Mock Data for AgriCortex-AI Dashboard

export interface SensorData {
  soilMoisture: number;
  soilTemperature: number;
  airTemperature: number;
  humidity: number;
  lightIntensity: number;
}

export interface StabilityData {
  date: string;
  score: number;
}

export interface FertilizerOption {
  type: string;
  cost: number;
  yieldGain: number;
  profitIncrease: number;
}

export interface HistoricalData {
  date: string;
  soilMoisture: number;
  soilTemperature: number;
}

export interface Alert {
  id: number;
  type: 'warning' | 'danger' | 'info';
  message: string;
  icon: string;
}

export const farmInfo = {
  name: 'Green Valley Farm',
  crop: 'Wheat',
  location: 'Punjab, India',
  area: '25 acres',
  lastUpdated: new Date().toLocaleString(),
};

export const weatherInfo = {
  condition: 'Partly Cloudy',
  temperature: 28,
  icon: 'Cloud',
};

export const sensorData: SensorData = {
  soilMoisture: 68,
  soilTemperature: 24,
  airTemperature: 28,
  humidity: 62,
  lightIntensity: 78,
};

export const stabilityHistory: StabilityData[] = [
  { date: 'Feb 14', score: 72 },
  { date: 'Feb 15', score: 75 },
  { date: 'Feb 16', score: 78 },
  { date: 'Feb 17', score: 76 },
  { date: 'Feb 18', score: 82 },
  { date: 'Feb 19', score: 85 },
  { date: 'Feb 20', score: 88 },
];

export const currentStability = {
  score: 88,
  status: 'Stable' as 'Stable' | 'Warning' | 'Critical',
  trend: 'up',
};

export const yieldRisk = {
  expectedYield: 4.5,
  variance: 0.8,
  riskPercentage: 28,
  probabilities: [
    { name: 'Low Risk', value: 45, fill: '#22c55e' },
    { name: 'Medium Risk', value: 27, fill: '#f59e0b' },
    { name: 'High Risk', value: 28, fill: '#ef4444' },
  ],
};

export const fertilizerOptions: FertilizerOption[] = [
  { type: 'Urea (46-0-0)', cost: 850, yieldGain: 0.8, profitIncrease: 12500 },
  { type: 'DAP (18-46-0)', cost: 1200, yieldGain: 1.2, profitIncrease: 18500 },
  { type: 'NPK (17-17-17)', cost: 1450, yieldGain: 1.5, profitIncrease: 22800 },
  { type: 'Organic Compost', cost: 650, yieldGain: 0.6, profitIncrease: 9200 },
];

export const climateData = [
  { rainfall: 20, stability: 85 },
  { rainfall: 35, stability: 78 },
  { rainfall: 50, stability: 72 },
  { rainfall: 80, stability: 65 },
  { rainfall: 120, stability: 58 },
  { rainfall: 150, stability: 52 },
];

export const aiAdvisories = [
  {
    id: 1,
    message: 'Wait 2 days before applying fertilizer. Soil moisture optimal in 48 hours.',
    priority: 'high',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    message: 'Irrigation recommended tomorrow evening between 6-8 PM for best absorption.',
    priority: 'medium',
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    message: 'Heat stress risk detected. Consider shade netting for young plants.',
    priority: 'high',
    timestamp: '1 day ago',
  },
];

export const alerts: Alert[] = [
  {
    id: 1,
    type: 'warning',
    message: 'Rain expected in 24 hours (45mm). Postpone fertilizer application.',
    icon: 'CloudRain',
  },
  {
    id: 2,
    type: 'info',
    message: 'Soil stability improved by 12% this week. Good conditions for planting.',
    icon: 'TrendingUp',
  },
  {
    id: 3,
    type: 'danger',
    message: 'High temperature alert: 38°C expected on Feb 22. Increase irrigation.',
    icon: 'AlertTriangle',
  },
];

export const economicSummary = {
  estimatedProfit: 185000,
  fertilizerSavings: 28000,
  riskReduction: 35,
};

export const historicalTrends: HistoricalData[] = [
  { date: 'Feb 07', soilMoisture: 55, soilTemperature: 22 },
  { date: 'Feb 08', soilMoisture: 58, soilTemperature: 23 },
  { date: 'Feb 09', soilMoisture: 62, soilTemperature: 23 },
  { date: 'Feb 10', soilMoisture: 65, soilTemperature: 24 },
  { date: 'Feb 11', soilMoisture: 63, soilTemperature: 24 },
  { date: 'Feb 12', soilMoisture: 60, soilTemperature: 25 },
  { date: 'Feb 13', soilMoisture: 64, soilTemperature: 24 },
  { date: 'Feb 14', soilMoisture: 66, soilTemperature: 24 },
  { date: 'Feb 15', soilMoisture: 68, soilTemperature: 25 },
  { date: 'Feb 16', soilMoisture: 70, soilTemperature: 25 },
  { date: 'Feb 17', soilMoisture: 67, soilTemperature: 26 },
  { date: 'Feb 18', soilMoisture: 65, soilTemperature: 25 },
  { date: 'Feb 19', soilMoisture: 66, soilTemperature: 24 },
  { date: 'Feb 20', soilMoisture: 68, soilTemperature: 24 },
];

export const multiFarmData = [
  {
    name: 'Green Valley',
    stability: 88,
    yieldRisk: 28,
    roi: 22800,
  },
  {
    name: 'Sunrise Fields',
    stability: 76,
    yieldRisk: 42,
    roi: 18200,
  },
];
