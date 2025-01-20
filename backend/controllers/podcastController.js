// controllers/podcastController.js
const axios = require("axios");
const Podcast = require("../models/Podcast");

const fetchPodcasts = async (req, res) => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/podcasts", {
      headers: { Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}` },
    });
    const podcasts = response.data.items.map((podcast) => ({
      title: podcast.name,
      description: podcast.description,
      imageUrl: podcast.images[0]?.url,
    }));
    res.json(podcasts);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching podcast details ${error}` });
  }
};

const fetchPodcastById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/podcasts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: `Error fetching podcast details ${error}` });
  }
};

const fetchRankedPodcastsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    // Example: replace with actual logic to fetch ranked podcasts
    const rankedPodcasts = await Podcast.find({ category }).sort({
      ranking: -1,
    });
    res.json(rankedPodcasts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ranked podcasts" });
  }
};

module.exports = {
  fetchPodcasts,
  fetchPodcastById,
  fetchRankedPodcastsByCategory,
};
