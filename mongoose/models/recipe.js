const mongoose = require('mongoose');

module.exports = mongoose.model(
  'recipe',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      ingredients: [{type: mongoose.Schema.Types.ObjectId,
        ref: 'ingredient',
        required: true,}],
      labels: [String],
      url: String,
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
