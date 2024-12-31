import React from 'react';
import { ImpactMetrics } from './ImpactMetrics';
import { ImpactChart } from './ImpactChart';

export function EnvironmentalImpact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Environmental Impact</h1>
      <ImpactMetrics />
      <ImpactChart />
    </div>
  );
}