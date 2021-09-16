
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const uploadRoute = require('./routes/uploadRoute')

dotenv.config();

// Connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use('/images',uploadRoute);

app.listen(5000, () => console.log("Server is running"));

