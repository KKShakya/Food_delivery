const mongoose = require('mongoose')


const Schema = mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'restaurant' },

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
    type: String,
    enum: ["placed", "preparing", "on the way", "delivered"],
    default:"placed",
  }
})

Schema.pre('save', function (next) {
  this.totalPrice = this.calculateTotalPrice();
  next();
});

Schema.methods.calculateTotalPrice = function () {
  return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};



const orderModel = mongoose.model('order', Schema);

module.exports = orderModel;