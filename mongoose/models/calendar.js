const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Calendar',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      calendar: [Object],
      number_of_meals: Number,
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
    { timestamps: true }
  )
);
