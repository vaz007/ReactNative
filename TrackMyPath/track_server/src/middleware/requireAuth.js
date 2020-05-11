const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization)
  // authorization === Bearer <JWT>
  if (!authorization) {
    return res.status(401).send("You must be logged in");
  }
  // Remember to add space after Bearer in Postman as well. 
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, 'My_Secret_Key', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in" });
    }
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};

