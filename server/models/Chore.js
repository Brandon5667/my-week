const mongoose = require("mongoose");

const { Schema } = mongoose;

const choreSchema = new Schema({
  choreName: {
    type: String,
    required: true,
  },

  time: {
    type: Number,
    required: true,
  },

  score: {
    type: Number,
    required: true,
  },

  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;
