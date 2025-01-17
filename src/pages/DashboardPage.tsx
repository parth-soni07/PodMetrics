import React from "react";
import { Settings, LogOut, CreditCard, User } from "lucide-react";

const MOCK_USER = {
  name: "John Doe",
  email: "john@example.com",
  plan: "Pro",
  nextBilling: "2024-04-01",
};

export function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {MOCK_USER.name}
          </h1>
          <p className="text-gray-400">{MOCK_USER.email}</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Account Settings</h2>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-purple-400" />
                <span>Profile Settings</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-purple-400" />
                <span>Billing & Subscription</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Subscription Details</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Current Plan</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  {MOCK_USER.plan}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Next Billing</span>
                <span>{MOCK_USER.nextBilling}</span>
              </div>
            </div>
            <button className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
