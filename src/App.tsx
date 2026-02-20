import { useState } from 'react';
import { FarmProvider } from './context/FarmContext';
import DashboardLayout from './components/Layout';
import DashboardHeader from './components/DashboardHeader';
import Overview from './pages/Overview';
import SoilAnalytics from './pages/SoilAnalytics';
import YieldRiskPage from './pages/YieldRiskPage';
import FertilizerROI from './pages/FertilizerROI';
import ClimateImpact from './pages/ClimateImpact';
import AIExplanation from './pages/AIExplanation';
import WhatIfSimulator from './pages/WhatIfSimulator';
import MultiFarm from './pages/MultiFarm';
import HistoricalLearning from './pages/HistoricalLearning';
import AlertsPage from './pages/AlertsPage';
import IoTNodesPage from './pages/IoTNodesPage';
import SubsidyInsightsPage from './pages/SubsidyInsightsPage';

function App() {
  const [activePage, setActivePage] = useState('overview');

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview />;
      case 'soil':
        return <SoilAnalytics />;
      case 'yield':
        return <YieldRiskPage />;
      case 'fertilizer':
        return <FertilizerROI />;
      case 'climate':
        return <ClimateImpact />;
      case 'ai':
        return <AIExplanation />;
      case 'whatif':
        return <WhatIfSimulator />;
      case 'multifarm':
        return <MultiFarm />;
      case 'historical':
        return <HistoricalLearning />;
      case 'alerts':
        return <AlertsPage />;
      case 'iot':
        return <IoTNodesPage />;
      case 'subsidy':
        return <SubsidyInsightsPage />;
      default:
        return <Overview />;
    }
  };

  return (
    <FarmProvider>
      <DashboardLayout activePage={activePage} onPageChange={setActivePage}>
        <DashboardHeader />
        <div className="mt-6">
          {renderPage()}
        </div>
      </DashboardLayout>
    </FarmProvider>
  );
}

export default App;
