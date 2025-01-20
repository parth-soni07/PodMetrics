// routes/podcastRoutes.js
const express = require("express");
const {
  fetchPodcasts,
  fetchPodcastById,
  fetchRankedPodcastsByCategory,
} = require("../controllers/podcastController");

const router = express.Router();

router.get("/", fetchPodcasts);
router.get("/:id", fetchPodcastById);
router.get("/charts/:category", fetchRankedPodcastsByCategory);

module.exports = router;
