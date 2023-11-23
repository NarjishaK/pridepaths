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

// exports.editinsta =asyncHandler(async(req,res)=>{
//   const {id} =req.params;
//   console.log(id,"eeeeeeeeeeeeeeeeeeeeeee");
//   try{
//     const insta =await InstaModel.findById(id);
//     if(!insta){
//       res.send("insta details not found")
//     }
//     console.log(data);
//     res.json(insta);
//   }catch(err){
//     console.log(err);
//     return res.status(500).json({err:'an error occured in instagram details editing'});
//   }
// });

exports.updateinsta = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { lead, reach, post, reel } = req.body;
  try {
    const insta = await InstaModel.findById(id);
    if (!insta) {
      return res.status(400).json({ err: "is not available" });
    }
    insta.lead = lead;
    insta.reach = reach;
    insta.reel = reel;
    insta.post = post;

    const updatedinsta = await insta.save();
    res.json(updatedinsta);
  } catch (err) {
    console.log(err, "an error occured");
  }
});
