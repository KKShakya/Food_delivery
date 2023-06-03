
const mongoose = require('mongoose')


const Schema = mongoose.Schema({

  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  menu: [{
    name: String,
    description: String,
    price: Number,
    image: String
  }]

})


const restaurantMdel = mongoose.model('user', Schema);

module.exports = restaurantMdel;