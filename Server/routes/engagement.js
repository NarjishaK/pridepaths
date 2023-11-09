var express = require("express");
var router = express.Router();
const Engagementcontroller = require("../controller/engagement-controller");
const EngagementModel = require("../models/engagement-models");

router.get("/", async (req, res) => {
  const growths = {
  mon:40,
  tue:30,
  wed:10,
  thu:25,
  fri:50,
  sat:10,
  sun:40,
  };
  try {
    const engagement = new EngagementModel(growths);
    const savedgrowth = await engagement.save();
    res.json({ success: true, engagement: savedgrowth });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/growthlist", Engagementcontroller.growthlist);
module.exports = router;
