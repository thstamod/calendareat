const mongoose = require('mongoose');

module.exports = mongoose.model(
  'calendar',
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      calendar: [Object],
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
    },
    { timestamps: true }
  )
);
