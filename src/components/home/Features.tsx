import React from 'react';
import { Map, History, Calculator, Leaf } from 'lucide-react';

const features = [
  {
    name: 'Interactive Map',
    description: 'Find nearby solar charging stations with real-time availability updates and smart filtering options.',
    icon: Map,
  },
  {
    name: 'Charging History',
    description: 'Track your charging sessions, monitor energy usage, and view detailed cost analytics.',
    icon: History,
  },
  {
    name: 'Solar Savings',
    description: 'Calculate your potential savings and compare costs between solar and grid charging.',
    icon: Calculator,
  },
  {
    name: 'Environmental Impact',
    description: 'Monitor your carbon footprint reduction and visualize your contribution to sustainability.',
    icon: Leaf,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Smart Charging Made Simple
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to manage your EV charging experience in one place.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}