const asyncHandler = require("express-async-handler");
const InstaModel = require("../models/instagram-models");

exports.instalist = asyncHandler(async (req, res) => {
  try {
    const insta = await InstaModel.find();
    res.json(insta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});
