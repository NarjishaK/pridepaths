const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
  jan: { type: Number, required: true },
  feb: { type: Number, required: true },
  mar: { type: Number, required: true },
  apr: { type: Number, required: true },
  may: { type: Number, required: true },
  jun: { type: Number, required: true },
  jul: { type: Number, required: true },
  aug: { type: Number, required: true },
  sep: { type: Number, required: true },
  oct: { type: Number, required: true },
  nov: { type: Number, required: true },
  dec: { type: Number, required: true },
});

const Sales = mongoose.model("Sales", salesSchema);
module.exports = Sales;
