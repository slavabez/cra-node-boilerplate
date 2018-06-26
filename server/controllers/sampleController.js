exports.sample_action = async (req, res) => {
  try {
    // Do the action
    res.send({ message: "Success" });
  } catch (e) {
    res.status(500).send({ message: "Generic Server Error" });
  }
};
