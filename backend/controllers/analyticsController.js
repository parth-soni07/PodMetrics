// controllers/analyticsController.js
const getAnalyticsData = async (req, res) => {
  const analyticsData = {
    totalListens: 15000,
    monthlyGrowthPercentage: 10,
    demographics: {
      ageGroups: { "18-24": 40, "25-34": 30, "35-44": 20, "45+": 10 },
      regions: { "North America": 50, Europe: 30, Asia: 20 },
    },
    topPerformingEpisodes: [{ id: 1, name: "Episode 1", listens: 5000 }],
  };
  res.json(analyticsData);
};

module.exports = { getAnalyticsData };
