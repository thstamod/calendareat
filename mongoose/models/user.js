const mongoose = require('mongoose');

module.exports = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      authorization: {
        type: Number,
        required: true,
      },
      locked: {
        type: Boolean,
        default: false,
      },
      data: {
        recipes: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: '`Recipe',
          },
        ],
        calendars: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Calendar',
          },
        ],
      },
    },
    { timestamps: true }
  )
);
