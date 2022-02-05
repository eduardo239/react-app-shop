const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true },
    uid: { type: String, required: true },
    avatar: { type: String, required: true },
    wallet: { value: { type: Number } }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', User);
