var express = require("express");
var router = express.Router();
const Instacontroller = require("../controller/insta-controller");
const InstaModel = require("../models/instagram-models");

router.get("/", async (req, res) => {
  const Insta = {
    post: 37,
    reel: 8,
    lead: "30k",
    reach: "22k",
  };
  try {
    const instagram = new InstaModel(Insta);
    const savedinsta = await instagram.save();
    res.json({ success: true, instagram: savedinsta });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/instalist", Instacontroller.instalist);
module.exports = router;
