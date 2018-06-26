const express = require("express");
const helmet = require("helmet");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

const errorHandler = require("./middlewares/errorHandler");
const winston = require("winston");

// Secret keys for mongo, redis and cookie session encryption
const keys = require("../config/keys");

// Setting up Mongo and Mongoose
mongoose.Promise = Promise;

// Connect to MongoDB with a small async iife
(async () => {
  try {
    await mongoose.connect(keys.mongoUri);
  } catch (e) {
    winston.log("error", `Error connecting to MongoDB: ${e.code}, ${e.message}`);
  }
})();

// Import models
require("./models/SampleModel");

// Import services
