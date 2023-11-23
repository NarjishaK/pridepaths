const asyncHandler = require("express-async-handler");
const SalesModel = require("../models/sales-models");

exports.saleslist = asyncHandler(async (req, res) => {
  try {
    const sales = await SalesModel.find();
    res.json(sales);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "an error occured in sales list" });
  }
});
