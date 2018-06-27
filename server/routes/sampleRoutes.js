const { sample_action } = require("../controllers/sampleController");

module.exports = app => {
  app.get("/api/sample_action", sample_action);
};
