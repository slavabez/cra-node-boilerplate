module.exports = (err, req, res, next) => {
  switch (err.code) {
    case "SAMPLE_ERROR_CODE":
      res.status(400).send({ message: "Sample error response" });
      break;
    default:
      console.error("Caught error", err.message);
      res.status(500).send({ message: "Server error" });
  }
};
