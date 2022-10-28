const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Recipe',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      ingredients: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ingredient',
          required: true,
        },
      ],
      labels: [String],
      url: String,
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
    { timestamps: true }
  )
);
