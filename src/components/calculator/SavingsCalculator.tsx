import React, { useState } from "react";
import { CalculatorForm } from "./CalculatorForm";
import { SavingsBreakdown } from "./SavingsBreakdown";

export function SavingsCalculator() {
  const [data, setData] = useState({
    monthlySavings: 0,
    gridCost: 0,
    solarCost: 0,
    yearlySavings: 0,
  });

  const handleCalculate = ({
    usage,
    rate,
    source,
  }: {
    usage: number;
    rate: number;
    source: string;
    watt: number;
  }) => {
    const gridCost = usage * rate;
    const solarCost = source === "solar" ? usage * rate * 0.4 : gridCost; // Assuming solar cost is 40% of grid cost
    const monthlySavings = gridCost - solarCost;
    const yearlySavings = monthlySavings * 12;

    setData({ monthlySavings, gridCost, solarCost, yearlySavings });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Solar Savings Calculator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CalculatorForm onCalculate={handleCalculate} />
        <SavingsBreakdown data={data} />
      </div>
    </div>
  );
}
