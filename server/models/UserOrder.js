const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemOrder = new Schema({
  _id: { type: mongoose.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const UserOrder = new Schema(
  {
    userId: { type: String, required: true },
    item: ItemOrder
  },
  { timestamps: true }
);

module.exports = mongoose.model('UserOrder', UserOrder);
