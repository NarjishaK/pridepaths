const mongoose = require("mongoose");

const engagementSchema = mongoose.Schema({
  mon: { type: Number, required: true },
  tue: { type: Number, required: true },
  wed: { type: Number, required: true },
  thu: { type: Number, required: true },
  fri: { type: Number, required: true },
  sat: { type: Number, required: true },
  sun: { type: Number, required: true },
});
const EngagementGrowth = mongoose.model("EngagementGrowth", engagementSchema);
module.exports = EngagementGrowth;
