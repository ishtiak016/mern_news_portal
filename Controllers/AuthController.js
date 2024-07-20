const authModel = require("../Models/authModel");
const { use } = require("../Routes/AuthRouters");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class AuthController {
  login = async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
      return res.status(404).json({ message: "please provide your email" });
    }
    if (!password) {
      return res.status(404).json({ message: "please provide your password" });
    }

    try {
      const user = await authModel.findOne({ email }).select("+password");
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const obj = {
            id: user.id,
            name: user.name,
            category: user.category,
            role: user.role,
          };
          const token = jwt.sign(obj, process.env.secrect_key, {
            expiresIn: process.env.expire_time,
          });
          return res.status(200).json({ message: "Login Success", token });
        } else {
          return res.status(404).json({ message: "Invalid password" });
        }
      } else {
        return res.status(404).json({ message: "Invalid user" });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new AuthController();
