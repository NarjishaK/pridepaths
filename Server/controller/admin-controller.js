const asyncHandler = require("express-async-handler");
const AdminRegister = require("../models/admin-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.adminreg = asyncHandler(async (req, res) => {
  const { name, phone, password, confirm, email, role, location } = req.body;
  console.log(req.body);
  const image = req.file.filename;
  try {
    const admins = await AdminRegister.findOne({ email });
    if (admins) {
      return res
        .status(400)
        .json({ invalid: true, message: "email already exist" });
    }
    const admin = await AdminRegister.create({
      name: name,
      password: password,
      confirm: confirm,
      phone: phone,
      email: email,
      image: image,
      role: role,
      location: location,
    });
    if (admin) {
      res.send("success");
    } else {
      res.send("failed");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "an error occured" });
  }
});

exports.signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await AdminRegister.findOne({ email: email });
  console.log(admin.email);
  console.log(admin.password);
  console.log(req.body.password)
  const isPasswordMatch = await bcrypt.compare(password, admin.password);
  if (admin && isPasswordMatch) {
    const adminprofile = {
      id: admin._id,
      name: admin.name,
      phone: admin.phone,
      location: admin.location,
      role: admin.role,
      image: admin.image,
      email:admin.email,
    };
    const token = jwt.sign({ email: admin.email }, "myjwtsecretkey");
    admin.tokens = token;
    admin.save();
    res.status(200).json({ token: token, adminprofile: adminprofile });
  // }else if(email != admin.email){
  //   res.status(400).json({ invalid: true, message: "Incorrect password or email" });
  }else {
    res.status(400).json({ invalid: true, message: "Incorrect password or email" });
  }
});
