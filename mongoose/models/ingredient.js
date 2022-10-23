const mongoose = require('mongoose');

module.exports = mongoose.model(
  'ingredient',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      nutrition_score: [Object],
      labels: [String],
      image: String
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
    },
    { timestamps: true }
  )
);
