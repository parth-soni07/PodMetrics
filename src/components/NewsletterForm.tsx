import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    setEmail("");
    alert("Thanks for subscribing! We'll keep you updated.");
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Be the First to Know When We Launch
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
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
  );
}
