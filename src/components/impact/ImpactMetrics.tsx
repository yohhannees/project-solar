import React from 'react';
import { Leaf, TreePine, Car } from 'lucide-react';

export function ImpactMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">CO₂ Reduced</p>
            <p className="text-2xl font-bold">1,250 kg</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <TreePine className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Trees Equivalent</p>
            <p className="text-2xl font-bold">57 trees</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <Car className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Gas Car Miles Offset</p>
            <p className="text-2xl font-bold">3,125 mi</p>
          </div>
        </div>
      </div>
    </div>
  );
}