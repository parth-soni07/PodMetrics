import React, { useState } from "react";
import { ChartList } from "../components/ChartList";

const CATEGORIES = ["Comedy", "Business", "Technology", "News", "Health"];

const MOCK_CHART_DATA = {
  Comedy: [
    {
      rank: 1,
      title: "Comedy Hour",
      imageUrl:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      score: 98,
      change: 5,
    },
    // Add more items
  ],
  Business: [
    {
      rank: 1,
      title: "Startup Stories",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      score: 95,
      change: -2,
    },
    // Add more items
  ],
  // Add more categories
};

export function ChartsPage() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Top Charts</h1>

      <div className="flex overflow-x-auto space-x-2 mb-8 pb-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? "bg-purple-500 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ChartList
        category={selectedCategory}
        items={
          MOCK_CHART_DATA[selectedCategory as keyof typeof MOCK_CHART_DATA] ||
          []
        }
      />
    </div>
  );
}
