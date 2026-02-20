import { Info, FileDown } from 'lucide-react';
import { useState } from 'react';
import { useFarm, farmPersonas } from '../context/FarmContext';
import ExportReport from './ExportReport';

export default function DashboardHeader() {
  const { persona, setPersona } = useFarm();
  const [showExportReport, setShowExportReport] = useState(false);

  return (
    <>
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-6 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-green-700 to-green-600 dark:from-white dark:via-green-400 dark:to-green-300 bg-clip-text text-transparent">AgriCortex Dashboard</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Data-Driven Simulation Prototype
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Export Report Button */}
            <button
              onClick={() => setShowExportReport(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105"
            >
              <FileDown className="w-4 h-4" />
              Export Report
            </button>

            {/* Farm Persona Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Farm Type</label>
              <select
                value={persona.id}
                onChange={(e) => {
                  const selected = farmPersonas.find(p => p.id === e.target.value);
                  if (selected) setPersona(selected);
                }}
                className="px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-300 dark:hover:border-green-600 transition-all shadow-sm"
              >
                {farmPersonas.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Simulation Mode Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200/50 dark:border-blue-800/50 rounded-xl shadow-sm">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <p className="text-xs text-blue-700 dark:text-blue-400 max-w-xs">
                <strong className="font-bold">Simulation Mode:</strong> Using realistic agricultural datasets to demonstrate workflow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Report Modal */}
      {showExportReport && <ExportReport onClose={() => setShowExportReport(false)} />}
    </>
  );
}
