import React from "react";
import { Trophy, TrendingUp } from "lucide-react";

interface ChartItemProps {
  rank: number;
  title: string;
  imageUrl: string;
  score: number;
  change: number;
}

function ChartItem({ rank, title, imageUrl, score, change }: ChartItemProps) {
  return (
    <div className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-colors">
      <span className="text-2xl font-bold text-gray-400 w-12">{`#${rank}`}</span>
      <img
        src={imageUrl}
        alt={title}
        className="w-12 h-12 rounded-lg object-cover mx-4"
      />
      <div className="flex-1">
        <h3 className="font-medium text-white">{title}</h3>
        <div className="flex items-center space-x-2 text-sm">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span className="text-gray-400">{score} points</span>
          <span
            className={`flex items-center ${
              change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            <TrendingUp
              className={`w-4 h-4 ${change < 0 ? "transform rotate-180" : ""}`}
            />
            {Math.abs(change)}%
          </span>
        </div>
      </div>
    </div>
  );
}

interface ChartListProps {
  category: string;
  items: Array<{
    rank: number;
    title: string;
    imageUrl: string;
    score: number;
    change: number;
  }>;
}

export function ChartList({ category, items }: ChartListProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-white mb-4">{category}</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <ChartItem key={item.rank} {...item} />
        ))}
      </div>
    </div>
  );
}
