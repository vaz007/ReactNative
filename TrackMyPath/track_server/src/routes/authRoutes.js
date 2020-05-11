const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "My_Secret_Key");

    res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "Must Provide with an email or password" });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).send({ error: "email not found" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "My_Secret_Key");
    res.status(200).send({ token });
  } catch (err) {
    return res.status(401).send({ error: "email or password is incorrect" });
  }
});

module.exports = router;
