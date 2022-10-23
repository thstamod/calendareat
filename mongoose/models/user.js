const mongoose = require('mongoose');
const { stringify } = require('uuid');

module.exports = mongoose.model('user', new mongoose.Schema({
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
  members: [{
    id: String,
    name: String,
    primary: Boolean,
    recipes: [{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe',
        required: true,
    }],
    calendarId: String
  }]
}, { timestamps: true }));
