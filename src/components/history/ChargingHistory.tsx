import React from 'react';
import { ChargingSession } from './ChargingSession';
import { ChargingStats } from './ChargingStats';

export function ChargingHistory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Charging History</h1>
      <ChargingStats />
      <div className="mt-8 space-y-4">
        {[...Array(3)].map((_, i) => (
          <ChargingSession key={i} />
        ))}
      </div>
    </div>
  );
}