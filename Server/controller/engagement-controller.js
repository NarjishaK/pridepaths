const asyncHandler = require("express-async-handler");
const EngagementModel = require("../models/engagement-models");

// engagement growth list
exports.growthlist = asyncHandler(async (req, res) => {
  try {
    const engagement = await EngagementModel.find();
    res.json(engagement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});
