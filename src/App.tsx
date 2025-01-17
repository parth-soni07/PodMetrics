import React, { useState, useEffect } from "react";
import { BarChart3, Mic2, Users2, Megaphone, ArrowRight } from "lucide-react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-sm uppercase tracking-wider mt-1">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    setEmail("");
    alert("Thanks for subscribing! We'll keep you updated.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Mic2 size={48} className="text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            PodMetrics
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Your All-in-One Podcast Analytics Platform
          </p>
          <CountdownTimer />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-400">
              Deep insights into your audience engagement and episode
              performance
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

        {/* CTA Section */}
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Be the First to Know When We Launch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-purple-400 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              Notify Me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Background Image */}
        <div
          className="fixed inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

export default App;
