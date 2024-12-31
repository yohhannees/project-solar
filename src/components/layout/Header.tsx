import React from "react";
import { Sun, Battery, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-yellow-500" />
          <Battery className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-gray-900">SolarCharge</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/map" className="text-gray-700 hover:text-gray-900">
            Find Stations
          </a>
          <a href="/history" className="text-gray-700 hover:text-gray-900">
            Charging History
          </a>
          <a href="/calculator" className="text-gray-700 hover:text-gray-900">
            Savings Calculator
          </a>
          <a href="/impact" className="text-gray-700 hover:text-gray-900">
            Environmental Impact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600">
            Sign In
          </button>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </header>
  );
}
