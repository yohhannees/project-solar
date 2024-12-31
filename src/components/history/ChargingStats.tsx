import React from 'react';
import { Battery, DollarSign, Clock } from 'lucide-react';

export function ChargingStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <Battery className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Total Energy</p>
            <p className="text-2xl font-bold">245 kWh</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <DollarSign className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Total Spent</p>
            <p className="text-2xl font-bold">$67.50</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <Clock className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Charging Time</p>
            <p className="text-2xl font-bold">12.5 hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
}