const mongoose = require("mongoose");

const { Schema } = mongoose;

const surveySchema = new Schema({
    trash: {
        type: Number,
        required: true
      },
    
      dishes: {
        type: Number,
        required: true
      },

      bathroom: {
        type: Number,
        required: true
      },

      walk: {
        type: Number,
        required: true
      },

      floor: {
        type: Number,
        required: true
      }
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
