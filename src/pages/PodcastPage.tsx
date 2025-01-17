import React, { useState } from "react";
import { PodcastCard } from "../components/PodcastCard";
import { Grid, List, Search } from "lucide-react";

const MOCK_PODCASTS = [
  {
    id: 1,
    title: "The Daily Tech",
    description:
      "Your daily dose of tech news and insights from industry experts.",
    imageUrl:
      "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    rating: 4.8,
    category: "Technology",
  },
  {
    id: 2,
    title: "Business Insights",
    description:
      "Leading entrepreneurs share their journey and business strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    rating: 4.6,
    category: "Business",
  },
  {
    id: 3,
    title: "Health & Wellness",
    description:
      "Expert advice on maintaining a healthy lifestyle and mental wellbeing.",
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    rating: 4.9,
    category: "Health",
  },
  // Add more mock podcasts as needed
];

export function PodcastsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPodcasts = MOCK_PODCASTS.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-white">Podcasts</h1>
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input
              type="text"
              placeholder="Search podcasts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${
                viewMode === "grid"
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-4 ${
          viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        }`}
      >
        {filteredPodcasts.map((podcast) => (
          <PodcastCard key={podcast.id} {...podcast} />
        ))}
      </div>
    </div>
  );
}
