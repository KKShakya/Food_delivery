
const  jwt = require('jsonwebtoken')

const userModel =  require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError  = require('./catchAsyncError');




const  isAuthenticated = catchAsyncError(async (req,res,next)=>{

// it works only if you are using cookie-parser middleware in server file
   
  const {token} = req.cookies;

 if(!token) return next(new ErrorHandler("Please Log in First",401))

  const decoded = jwt.verify(token,process.env.JWT_SECRET);

  req.user = await userModel.findById(decoded._id).select("-password");

next();

})

module.exports = isAuthenticated;
