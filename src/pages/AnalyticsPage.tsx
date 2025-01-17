import React from "react";
import { AnalyticsCard } from "../components/AnalyticsCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, Headphones, TrendingUp, Clock } from "lucide-react";

const MOCK_CHART_DATA = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
];

export function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-white">Analytics Overview</h1>
        <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white">
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AnalyticsCard
          title="Total Listeners"
          value="24.5K"
          change={12}
          icon={<Users className="w-6 h-6 text-purple-400" />}
        />
        <AnalyticsCard
          title="Total Plays"
          value="142.8K"
          change={8}
          icon={<Headphones className="w-6 h-6 text-purple-400" />}
        />
        <AnalyticsCard
          title="Avg. Listen Time"
          value="32:14"
          change={-3}
          icon={<Clock className="w-6 h-6 text-purple-400" />}
        />
        <AnalyticsCard
          title="Growth Rate"
          value="18.2%"
          change={5}
          icon={<TrendingUp className="w-6 h-6 text-purple-400" />}
        />
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-6">
          Listener Trends
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MOCK_CHART_DATA}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis
                dataKey="name"
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: "rgba(255,255,255,0.5)" }}
              />
              <YAxis
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: "rgba(255,255,255,0.5)" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: "#8b5cf6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
