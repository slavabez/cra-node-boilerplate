// Load environment variables from .env files
require("dotenv").config();

// Create and import a custom winston logger
const logger = require("./helpers/logger");

const app = require("./app");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Starting the server on port ${PORT}.`);
});
