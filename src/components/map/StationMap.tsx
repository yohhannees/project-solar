import React from "react";
// import { MapPin, Battery, Zap } from "lucide-react";

export function StationMap() {
  return (
    <div className="h-[calc(100vh-4rem)] bg-gray-100 relative">
      <div className="absolute left-4 top-4 z-10 bg-white p-4 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Find Stations</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search location..."
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="flex gap-2">
            <select className="flex-1 px-4 py-2 border rounded-md">
              <option>All Types</option>
              <option>Level 2</option>
              <option>DC Fast</option>
            </select>
            <select className="flex-1 px-4 py-2 border rounded-md">
              <option>Any Status</option>
              <option>Available</option>
              <option>In Use</option>
            </select>
          </div>
        </div>
      </div>
      <div className="h-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Map integration coming soon...</p>
      </div>
    </div>
  );
}
