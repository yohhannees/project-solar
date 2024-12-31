import { useState, useEffect } from "react";

export function ImpactChart() {
  const [trees, setTrees] = useState([]);
  const [cleanups, setCleanups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const treesRes = await fetch(
          "https://api.open-meteo.com/v1/tree-planting-data"
        );
        const cleanupsRes = await fetch(
          "https://api.open-meteo.com/v1/cleanup-events"
        );
        const treesData = await treesRes.json();
        const cleanupsData = await cleanupsRes.json();

        setTrees(treesData);
        setCleanups(cleanupsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Environmental Impact</h2>
      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Loading data...</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-lg font-medium">Total Impact</h3>
            <p className="text-3xl font-bold">
              {trees.length + cleanups.length}
            </p>
            <p className="text-gray-500">Trees Planted & Cleanup Events</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Trees Planted
              </h3>
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-xl font-bold">{trees.length}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Cleanup Events
              </h3>
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-xl font-bold">{cleanups.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
