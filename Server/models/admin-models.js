const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String,  required: true },
  tockens: { type: String, default: '' },
});

adminSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    if (!this.password.startsWith("$2b$")) {
      try {
        const hashedpassword = await bcrypt.hash(this.password, 10);
        this.password = hashedpassword;
        next();
      } catch (error) {
        return next(error);
      }
    } else {
      return next();
    }
  } else {
    return next();
  }
});

const AdminRegister = mongoose.model("AdminRegister", adminSchema);
module.exports = AdminRegister;
