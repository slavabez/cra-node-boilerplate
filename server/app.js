const express = require("express");
const helmet = require("helmet");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const errorHandler = require("./middlewares/errorHandler");
const logger = require("./helpers/logger");

// Secret keys for mongo, redis and cookie session encryption
const keys = require("../config/keys");

// Setting up Mongo and Mongoose
mongoose.Promise = Promise;

// Connect to MongoDB with a small async iife
(async () => {
  try {
    await mongoose.connect(keys.mongoUri);
  } catch (e) {
    logger.error(`Error connecting to MongoDB: ${e.code}, ${e.message}`);
  }
})();

// Import models
require("./models/SampleModel");

// Import services

// Helmet for basic security
app.use(helmet());

// Body parser for easier request handling
app.use(bodyParser.json());

// Set a size limit for a request
app.use(bodyParser.urlencoded({ extended: false, limit: "2mb" }));

// Space for additional services

// Routes
require("./routes/sampleRoutes")(app);

// Static routes for html/css/js files (not needed for dev, only for prod/test/ci)
if (
  process.env.CI ||
  ["production", "ci", "test"].includes(process.env.NODE_ENV)
) {
  logger.info("Detected test, CI or prod mode, serving static files from / ");
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    // Respond to all routes with the / one, react will take care of the routing
    res.sendFile(path.resolve(__dirname, "../", "build", "index.html"));
  });
}

// Error handler as the last middleware to catch all the errors
app.use(errorHandler);

module.exports = app;
