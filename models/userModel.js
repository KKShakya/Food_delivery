const Schema = mongoose.Schema({
  
    _id: ObjectId,
    name: String,
    email: String,
    password: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String
    }
  
})


const userModel = mongoose.model('user',Schema);

module.exports = userModel;