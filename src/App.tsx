import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { StationMap } from './components/map/StationMap';
import { ChargingHistory } from './components/history/ChargingHistory';
import { SavingsCalculator } from './components/calculator/SavingsCalculator';
import { EnvironmentalImpact } from './components/impact/EnvironmentalImpact';

function App() {
  // Simplified routing logic - in production use a proper router
  const path = window.location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/map':
        return <StationMap />;
      case '/history':
        return <ChargingHistory />;
      case '/calculator':
        return <SavingsCalculator />;
      case '/impact':
        return <EnvironmentalImpact />;
      default:
        return (
          <>
            <Hero />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderContent()}
    </div>
  );
}

export default App;