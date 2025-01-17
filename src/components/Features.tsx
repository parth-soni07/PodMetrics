import React from "react";
import { BarChart3, Users2, Megaphone } from "lucide-react";

export function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
        <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <BarChart3 className="text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
        <p className="text-gray-400">
          Deep insights into your audience engagement and episode performance
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
        <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Users2 className="text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Audience Insights</h3>
        <p className="text-gray-400">
          Understand your listeners with detailed demographic and behavioral
          data
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
        <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Megaphone className="text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Promotion Tools</h3>
        <p className="text-gray-400">
          Powerful tools to grow your audience and promote your content
        </p>
      </div>
    </div>
  );
}
