import React, { useState } from "react";

interface CalculatorFormProps {
  onCalculate: (data: {
    usage: number;
    rate: number;
    source: string;
    watt: number;
  }) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [usage, setUsage] = useState(300);
  const [rate, setRate] = useState(0.15);
  const [source, setSource] = useState("grid");
  const [watt, setWatt] = useState(1000);

  interface FormData {
    usage: number;
    rate: number;
    source: string;
    watt: number;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FormData = { usage, rate, source, watt };
    onCalculate(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Enter Your Details</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Charging Usage (kWh)
          </label>
          <input
            type="number"
            value={usage}
            onChange={(e) => setUsage(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Electricity Rate ($/kWh)
          </label>
          <input
            type="number"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="0.15"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Power Source
          </label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="grid">Grid</option>
            <option value="solar">Solar</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Wattage (W)
          </label>
          <input
            type="number"
            value={watt}
            onChange={(e) => setWatt(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="1000"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Calculate Savings
        </button>
      </form>
    </div>
  );
}
