exports.ping = async (req, res) => {
  try {
    // Do the action
    res.send({ message: "Pong" });
  } catch (e) {
    res.status(500).send({ message: "Generic Server Error" });
  }
};
