const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  user: { type: ObjectId, ref: 'User' },
  restaurant: { type: ObjectId, ref: 'Restaurant' },
  items: [{
    name: String,
    price: Number,
    quantity: Number
  }],
  totalPrice: Number,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  // e.g, "placed", "preparing", "on the way", "delivered"
  status: {
    type:String,
    enum: ["placed", "preparing", "on the way", "delivered"],
  }
})


const orderModel = mongoose.model('user', Schema);

module.exports = orderModel;