// models/Podcast.js
const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  iconUrl: { type: String, required: true },
  category: { type: String, required: true },
  ranking: { type: Number, default: 0 },
});

module.exports = mongoose.model("Podcast", PodcastSchema);
