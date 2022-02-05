const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Item = new Schema(
  {
    name: { type: String, required: true },
    poster: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    info: { type: String, required: false },
    category: [{ type: String, required: false }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', Item);
