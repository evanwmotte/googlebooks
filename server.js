const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes")
const path = require("path");
const PORT = process.env.PORT || 8080;
require('dotenv').config({silent: true})
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// Start Server
app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});
