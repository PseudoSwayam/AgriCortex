import { FileDown, CheckCircle, TrendingUp, DollarSign, Shield, Droplets, Thermometer, Wind, Sun } from 'lucide-react';
import { useFarm } from '../context/FarmContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

interface ExportReportProps {
  onClose: () => void;
}

export default function ExportReport({ onClose }: ExportReportProps) {
  const { selectedPersona, beforeData, afterData } = useFarm();
  const reportRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!reportRef.current) return;

    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const sections = reportRef.current.querySelectorAll('.pdf-page');
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * ratio, imgHeight * ratio);
      }

      pdf.save(`AgriCortex_Complete_Report_${selectedPersona.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const improvements = [
    {
      metric: 'Fertilizer Cost Reduction',
      before: `₹${beforeData.fertilizerCost.toLocaleString()}`,
      after: `₹${afterData.fertilizerCost.toLocaleString()}`,
      improvement: `${Math.round(((beforeData.fertilizerCost - afterData.fertilizerCost) / beforeData.fertilizerCost) * 100)}%`,
      icon: DollarSign,
      color: 'green',
    },
    {
      metric: 'Yield Improvement',
      before: `${beforeData.yield} tons`,
      after: `${afterData.yield} tons`,
      improvement: `+${Math.round(((afterData.yield - beforeData.yield) / beforeData.yield) * 100)}%`,
      icon: TrendingUp,
      color: 'blue',
    },
    {
      metric: 'Profit Increase',
      before: `₹${beforeData.profit.toLocaleString()}`,
      after: `₹${afterData.profit.toLocaleString()}`,
      improvement: `+${Math.round(((afterData.profit - beforeData.profit) / beforeData.profit) * 100)}%`,
      icon: CheckCircle,
      color: 'green',
    },
    {
      metric: 'Risk Score Reduction',
      before: `${beforeData.riskScore}%`,
      after: `${afterData.riskScore}%`,
      improvement: `-${beforeData.riskScore - afterData.riskScore}%`,
      icon: Shield,
      color: 'purple',
    },
  ];

  const sensorData = [
    { label: 'Soil Moisture', value: 68, unit: '%', icon: Droplets, color: 'text-blue-600' },
    { label: 'Temperature', value: 24, unit: '°C', icon: Thermometer, color: 'text-orange-600' },
    { label: 'Humidity', value: 62, unit: '%', icon: Wind, color: 'text-cyan-600' },
    { label: 'Light Intensity', value: 78, unit: '%', icon: Sun, color: 'text-yellow-600' },
  ];

  const stabilityTrend = [
    { date: 'Feb 14', score: 72 },
    { date: 'Feb 15', score: 75 },
    { date: 'Feb 16', score: 78 },
    { date: 'Feb 17', score: 76 },
    { date: 'Feb 18', score: 82 },
    { date: 'Feb 19', score: 85 },
    { date: 'Feb 20', score: 88 },
  ];

  const alerts = [
    { type: 'warning', message: 'Rain expected in 24 hours. Postpone fertilizer application.' },
    { type: 'info', message: 'Soil stability improved by 12% this week.' },
    { type: 'danger', message: 'High temperature alert: 38°C expected on Feb 22.' },
  ];

  const soilMetrics = [
    { name: 'Nitrogen (N)', value: 45, unit: 'kg/ha', status: 'optimal' },
    { name: 'Phosphorus (P)', value: 22, unit: 'kg/ha', status: 'optimal' },
    { name: 'Potassium (K)', value: 180, unit: 'kg/ha', status: 'high' },
    { name: 'pH Level', value: 6.8, unit: '', status: 'optimal' },
  ];

  const fertilizerOptions = [
    { type: 'Urea (46-0-0)', cost: 850, yieldGain: 0.8, profit: 12500 },
    { type: 'DAP (18-46-0)', cost: 1200, yieldGain: 1.2, profit: 18500 },
    { type: 'NPK (17-17-17)', cost: 1450, yieldGain: 1.5, profit: 22800, recommended: true },
    { type: 'Organic Compost', cost: 650, yieldGain: 0.6, profit: 9200 },
  ];

  const iotDevices = [
    { name: 'North Field Sensor', battery: 85, signal: 92, status: 'active' },
    { name: 'Weather Station', battery: 67, signal: 88, status: 'active' },
    { name: 'South Field Sensor', battery: 42, signal: 76, status: 'warning' },
    { name: 'Irrigation Pump', battery: 91, signal: 95, status: 'active' },
  ];

  const subsidies = [
    { name: 'PM-Kisan Direct Benefit', amount: 6000, status: 'Eligible' },
    { name: 'Soil Health Card Scheme', amount: 190, status: 'Active' },
    { name: 'Fertilizer Subsidy (NPK)', amount: 1640, status: 'Claimable' },
    { name: 'Drip Irrigation Subsidy', amount: 42000, status: 'Pending' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Modal Content - Visible to User */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <FileDown className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Export Complete Report</h2>
              <p className="text-gray-600">Download comprehensive farm analytics as PDF</p>
            </div>
          </div>

          {/* Report Details */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Report Contents</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Farm Details & Impact Analysis</p>
                  <p className="text-sm text-gray-600">Complete overview with before/after metrics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Real-Time Sensor Data & Monitoring</p>
                  <p className="text-sm text-gray-600">4 sensors with stability trends and active alerts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Soil Analytics & Recommendations</p>
                  <p className="text-sm text-gray-600">NPK levels, timeline, and risk forecast</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Fertilizer ROI & Economic Analysis</p>
                  <p className="text-sm text-gray-600">Cost comparison and profit optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">IoT Device Status & Subsidies</p>
                  <p className="text-sm text-gray-600">4 devices monitored, ₹49,830 in benefits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Farm Info Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Farm Type</p>
                <p className="font-semibold text-gray-900">{selectedPersona.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Area</p>
                <p className="font-semibold text-gray-900">{selectedPersona.acres} acres</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Report Pages</p>
                <p className="font-semibold text-gray-900">6 Pages</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Data Points</p>
                <p className="font-semibold text-gray-900">50+ Metrics</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <FileDown className="w-5 h-5" />
              Download PDF Report
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Hidden Report Content for PDF Generation */}
        <div ref={reportRef} className="hidden bg-white">
          
          {/* Page 1: Cover & Summary */}
          <div className="pdf-page bg-white p-8" style={{ minHeight: '1000px' }}>
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg mb-6">
              <h1 className="text-4xl font-bold mb-3">AgriCortex Dashboard</h1>
              <h2 className="text-2xl mb-2">Complete Farm Analytics Report</h2>
              <p className="text-green-100 text-lg">Farm: {selectedPersona.name}</p>
              <p className="text-green-100">Report Generated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Farm Details */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">Farm Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Farm Type</p>
                  <p className="font-semibold text-gray-900 text-lg">{selectedPersona.name}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total Area</p>
                  <p className="font-semibold text-gray-900 text-lg">{selectedPersona.acres} acres</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Report Date</p>
                  <p className="font-semibold text-gray-900 text-lg">{new Date().toLocaleDateString()}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Data Period</p>
                  <p className="font-semibold text-gray-900 text-lg">Season 2024</p>
                </div>
              </div>
            </div>

            {/* Impact Analysis */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">Impact Analysis</h3>
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
                <p className="text-center text-xl font-bold text-green-700">
                  +{Math.round(((afterData.profit - beforeData.profit) / beforeData.profit) * 100)}% ROI Improvement
                </p>
              </div>
              <div className="space-y-3">{improvements.map((item, index) => {
                  return (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-900 text-lg">{item.metric}</p>
                          <p className="text-gray-600">
                            {item.before} → {item.after}
                          </p>
                        </div>
                        <div className="text-2xl font-bold text-green-700">
                          {item.improvement}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">Key Insights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded">
                  <span className="text-green-600 text-xl">✓</span>
                  <p className="text-gray-700">
                    Optimized fertilizer application reduced costs by ₹{(beforeData.fertilizerCost - afterData.fertilizerCost).toLocaleString()} while maintaining soil health.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded">
                  <span className="text-green-600 text-xl">✓</span>
                  <p className="text-gray-700">
                    Yield increased by {(afterData.yield - beforeData.yield).toFixed(1)} tons through data-driven irrigation scheduling.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded">
                  <span className="text-green-600 text-xl">✓</span>
                  <p className="text-gray-700">
                    Risk score improved from {beforeData.riskScore}% to {afterData.riskScore}% through proactive monitoring.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded">
                  <span className="text-green-600 text-xl">✓</span>
                  <p className="text-gray-700">
                    Total profit increased by ₹{(afterData.profit - beforeData.profit).toLocaleString()}, an {Math.round(((afterData.profit - beforeData.profit) / beforeData.profit) * 100)}% improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Page 2: Sensor Data & Monitoring */}
          <div className="pdf-page bg-white p-8" style={{ minHeight: '1000px' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Sensor Data</h2>
            
            {/* Sensor Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {sensorData.map((sensor, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">{sensor.label}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {sensor.value}<span className="text-lg text-gray-600">{sensor.unit}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Soil Stability Trend */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soil Stability Index (7-Day Trend)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-end justify-between h-40">
                  {stabilityTrend.map((day, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-green-500 rounded-t"
                        style={{ height: `${day.score}%` }}
                      ></div>
                      <p className="text-xs text-gray-600 mt-2">{day.date.split(' ')[1]}</p>
                      <p className="text-sm font-semibold text-gray-900">{day.score}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-green-600">Current SSI: 88/100</p>
                  <p className="text-sm text-gray-600">+16 points from last week</p>
                </div>
              </div>
            </div>

            {/* Active Alerts */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Active Alerts</h3>
              <div className="space-y-2">
                {alerts.map((alert, index) => {
                  const bgColor = alert.type === 'danger' ? 'bg-red-50 border-red-300' 
                    : alert.type === 'warning' ? 'bg-yellow-50 border-yellow-300' 
                    : 'bg-blue-50 border-blue-300';
                  const icon = alert.type === 'danger' ? '⚠️' : alert.type === 'warning' ? '⚡' : 'ℹ️';
                  return (
                    <div key={index} className={`${bgColor} border rounded-lg p-3 flex items-start gap-3`}>
                      <span className="text-xl">{icon}</span>
                      <p className="text-sm text-gray-700">{alert.message}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Page 3: Soil Analytics */}
          <div className="pdf-page bg-white p-8" style={{ minHeight: '1000px' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Soil Analytics Report</h2>
            
            {/* NPK Levels */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrient Levels</h3>
              <div className="grid grid-cols-2 gap-4">
                {soilMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-gray-900">{metric.name}</p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        metric.status === 'optimal' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {metric.status}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {metric.value} <span className="text-sm text-gray-600">{metric.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Farmer Recommendation Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    D1
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">Irrigation Schedule</p>
                    <p className="text-sm text-gray-600">Water crops in evening (6-8 PM) for optimal absorption</p>
                    <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Completed</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    D3
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">Fertilizer Application</p>
                    <p className="text-sm text-gray-600">Apply NPK (17-17-17) at 60 kg/acre</p>
                    <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Scheduled</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    D10
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">Pest Control Spray</p>
                    <p className="text-sm text-gray-600">Monitor for aphid activity and apply preventive spray</p>
                    <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Scheduled</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    D20
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">Harvest Planning</p>
                    <p className="text-sm text-gray-600">Prepare equipment and arrange transportation</p>
                    <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Scheduled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Yield Risk Forecast</h3>
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 border border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <p className="text-5xl font-bold text-green-600">{afterData.riskScore}%</p>
                  <p className="text-gray-600 mt-2">Current Risk Score</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">45%</p>
                    <p className="text-xs text-gray-600">Low Risk</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-600">27%</p>
                    <p className="text-xs text-gray-600">Medium Risk</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">28%</p>
                    <p className="text-xs text-gray-600">High Risk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page 4: Fertilizer & Financial */}
          <div className="pdf-page bg-white p-8" style={{ minHeight: '1000px' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fertilizer ROI Analysis</h2>
            
            {/* Fertilizer Options */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fertilizer Options Comparison</h3>
              <div className="space-y-3">
                {fertilizerOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className={`border-2 rounded-lg p-4 ${
                      option.recommended 
                        ? 'bg-green-50 border-green-500' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900">{option.type}</p>
                        {option.recommended && (
                          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded mt-1 inline-block">
                            RECOMMENDED
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">ROI Increase</p>
                        <p className="text-xl font-bold text-green-600">₹{option.profit.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="text-xs text-gray-600">Cost per acre</p>
                        <p className="font-semibold text-gray-900">₹{option.cost}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Yield Gain</p>
                        <p className="font-semibold text-gray-900">{option.yieldGain} tons</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Economic Summary */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Summary</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Estimated Profit</p>
                  <p className="text-2xl font-bold text-green-700">₹{afterData.profit.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">per acre/season</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Fertilizer Cost</p>
                  <p className="text-2xl font-bold text-blue-700">₹{afterData.fertilizerCost.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">optimized</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Yield Forecast</p>
                  <p className="text-2xl font-bold text-purple-700">{afterData.yield} tons</p>
                  <p className="text-xs text-gray-500 mt-1">projected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Page 5: IoT & Technology */}
          <div className="pdf-page bg-white p-8" style={{ minHeight: '1000px' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">IoT Device Status</h2>
            
            {/* Device Summary */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total Devices</p>
                <p className="text-3xl font-bold text-blue-700">4</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Active</p>
                <p className="text-3xl font-bold text-green-700">3</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Warnings</p>
                <p className="text-3xl font-bold text-orange-700">1</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Avg Battery</p>
                <p className="text-3xl font-bold text-purple-700">71%</p>
              </div>
            </div>

            {/* Device Details */}
            <div className="space-y-4 mb-6">
              {iotDevices.map((device, index) => (
                <div 
                  key={index}
                  className={`border-2 rounded-lg p-4 ${
                    device.status === 'active' ? 'border-green-500 bg-green-50' : 'border-orange-500 bg-orange-50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-bold text-gray-900">{device.name}</p>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      device.status === 'active' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-orange-600 text-white'
                    }`}>
                      {device.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Battery Level</p>
                      <div className="bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${
                            device.battery > 60 ? 'bg-green-500' : 'bg-orange-500'
                          }`}
                          style={{ width: `${device.battery}%` }}
                        ></div>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mt-1">{device.battery}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Signal Strength</p>
                      <div className="bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: `${device.signal}%` }}
                        ></div>
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mt-1">{device.signal}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Government Subsidies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Government Subsidy Insights</h3>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">₹49,830</p>
                  <p className="text-sm text-gray-600 mt-1">Total Annual Subsidy Benefits</p>
                </div>
              </div>
              <div className="space-y-3">
                {subsidies.map((subsidy, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{subsidy.name}</p>
                        <span className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                          subsidy.status === 'Eligible' || subsidy.status === 'Active' 
                            ? 'bg-green-100 text-green-700'
                            : subsidy.status === 'Claimable'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {subsidy.status}
                        </span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">₹{subsidy.amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Page 6: Footer */}
          <div className="pdf-page bg-white p-8" style={{ minHeight: '1000px' }}>
            <div className="h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You</h2>
                <p className="text-xl text-gray-600">For using AgriCortex Dashboard</p>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Report Summary</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-green-100 text-sm mb-1">Total Pages</p>
                    <p className="text-3xl font-bold">6</p>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm mb-1">Data Points Analyzed</p>
                    <p className="text-3xl font-bold">50+</p>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm mb-1">IoT Devices Monitored</p>
                    <p className="text-3xl font-bold">4</p>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm mb-1">Recommendations</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-2">
                  <strong>AgriCortex Dashboard</strong> | Data-Driven Agricultural Intelligence Platform
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Report Generated: {new Date().toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  This is a simulation report using realistic agricultural datasets for demonstration purposes.
                </p>
                <p className="text-xs text-gray-500 mt-4">
                  © 2026 AgriCortex. All rights reserved.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
