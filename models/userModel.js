const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema({

  name: {
    
      type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password
    : {
      type: String,
    required: true
  },
  address: {
    street:String,
    city:String, 
    state:String, 
    country:String,
    zip:String, 

  }

})


//it is a document middleware
Schema.pre("save", async function (next) {

  // do this when password is not modified but something else
  if (!this.isModified("password")) return next();

  //hashing the passsord for document
  //and then saving it inisde it
  const hashPassword = await bcrypt.hash(this.password, 10);
  //  saving hashed passworrd in documnets/
  this.password = hashPassword;
  next();
})



// jwt token generator using  schema instance methods
Schema.methods.getJwtToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
}


Schema.methods.comparePassword = async function (password) {
  // console.log(this.password);
  return await bcrypt.compare(password, this.password);
}


const userModel = mongoose.model('user', Schema);

module.exports = userModel;