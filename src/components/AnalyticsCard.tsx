import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

export function AnalyticsCard({
  title,
  value,
  change,
  icon,
}: AnalyticsCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-purple-500/20 rounded-full p-3">{icon}</div>
        <div
          className={`flex items-center space-x-1 ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="w-4 h-4" />
          ) : (
            <ArrowDown className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
