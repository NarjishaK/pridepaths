const mongoose = require("mongoose");

const instaSchema = mongoose.Schema({
  post: { type: Number, required: true },
  reel: { type: Number, required: true },
  reach: { type: String, required: true },
  lead: { type: String, required: true },
});
const Instagram = mongoose.model("Instagram", instaSchema);
module.exports = Instagram;
