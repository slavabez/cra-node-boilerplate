const { ping } = require("../controllers/sampleController");

module.exports = app => {
  app.get("/api/ping", ping);
};

