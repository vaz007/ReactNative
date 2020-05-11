require ('./models/user');
require ('./models/track');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const authRouter = require('./routes/authRoutes');
const trackRouter = require('./routes/trackRoutes');

const requireAuth = require('./middleware/requireAuth')

const app = express();
app.use(bodyParser.json())

app.use(authRouter)
app.use(trackRouter)

const MongoUri =
  "mongodb+srv://admin:root@cluster0-sbnop.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo DB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo");
});
app.get("/", requireAuth, (req, res) => {
    res.send(`email : ${req.user.email}`)  
  // res.send("This is a track application backend");

});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
