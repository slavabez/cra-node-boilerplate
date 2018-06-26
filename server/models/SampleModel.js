const mongoose = require("mongoose");
const { Schema } = mongoose;

const SampleModelSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  }
});

const SampleModel = mongoose.model("city", SampleModelSchema);

module.exports = SampleModel;
