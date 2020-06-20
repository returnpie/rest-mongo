const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");
require("dotenv/config");

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conn to db");
  }
);

app.listen(4000);
// mongodb+srv://returnpie:<password>@cluster0-izand.mongodb.net/<dbname>?retryWrites=true&w=majority
