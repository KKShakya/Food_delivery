const Schema = mongoose.Schema({
  _id: ObjectId,
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  menu: [{
    _id: ObjectId,
    name: String,
    description: String,
    price: Number,
    image: String
  }]

})


const restaurantMdel = mongoose.model('user', Schema);

module.exports = restaurantMdel;