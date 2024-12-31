import React from 'react';
import { Calendar, Clock, Battery, MapPin } from 'lucide-react';

export function ChargingSession() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">Downtown Solar Station</h3>
          <div className="flex items-center text-gray-500 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">123 Main St, City</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-green-600 font-semibold">$12.50</p>
          <p className="text-sm text-gray-500">25 kWh</p>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Mar 15, 2024</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>45 minutes</span>
        </div>
        <div className="flex items-center">
          <Battery className="h-4 w-4 mr-1" />
          <span>80% → 100%</span>
        </div>
      </div>
    </div>
  );
}