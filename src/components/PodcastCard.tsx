import React from "react";
import { Play, Star } from "lucide-react";

interface PodcastCardProps {
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  category: string;
}

export function PodcastCard({
  title,
  description,
  imageUrl,
  rating,
  category,
}: PodcastCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors group">
      <div className="flex p-4 gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-24 h-24 rounded-lg object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-400 line-clamp-2 mb-2">
                {description}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">
              {category}
            </span>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
