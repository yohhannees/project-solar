import { DollarSign, Sun, Zap } from "lucide-react";

interface SavingsBreakdownProps {
  data: {
    monthlySavings: number;
    gridCost: number;
    solarCost: number;
    yearlySavings: number;
  };
}

export function SavingsBreakdown({ data }: SavingsBreakdownProps) {
  const { monthlySavings, gridCost, solarCost, yearlySavings } = data;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Your Potential Savings</h2>
      <div className="space-y-6">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Monthly Savings</p>
              <p className="text-2xl font-bold text-green-600">
                ${monthlySavings.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-gray-400" />
              <div className="ml-3">
                <p className="text-sm text-gray-500">Grid Cost</p>
                <p className="text-lg font-semibold">${gridCost.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Sun className="h-6 w-6 text-yellow-500" />
              <div className="ml-3">
                <p className="text-sm text-gray-500">Solar Cost</p>
                <p className="text-lg font-semibold">${solarCost.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Yearly Projection</h3>
          <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-xl font-bold text-gray-700">
              ${yearlySavings.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
