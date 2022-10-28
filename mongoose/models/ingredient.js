const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Ingredient',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      nutrition_score: [Object],
      labels: [String],
      image: String,
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
    { timestamps: true }
  )
);
