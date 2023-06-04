
const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const userModel = require("../models/userModel");
const sendToken = require("../utils/sendToken");

const register = catchAsyncError(async (req,res,next)=>{

   const {name,email,password} = req.body;

   if(!name || !email || !password){
   //using our errorhandler class
    return next(new ErrorHandler("Please fill all the fields",400));
   }

    let user = await userModel.findOne({email});

    if(user){
      return next(new ErrorHandler("User Already Exist",409))
    }

      // No need to encrypt password here "Pre" will take care of it 
     user = await userModel.create({name,email,password});

     res.status(201).send({
      success: true,
      message: "User created successfully"
     })

})



const login = catchAsyncError(async (req,res,next)=>{

   const {email,password} = req.body;
  

   if(!email || !password){
   //using our errorhandler class
    return next(new ErrorHandler("Please Fill All the fields"),400);
   }

    let user = await userModel.findOne({email});

    if(!user){
      return next(new ErrorHandler("Your Email or Password is incorrect"),409);
    }
    
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
      return next(new ErrorHandler("Your Email or Password is incorrect",409))
    }

    //will do this all with the help of a function
    //  res.status(200).send({
    //   success: true,
    //   message: "user Logged in successfully"
    //  })

    sendToken(res,user,`Welcome Back, ${user.name}`)

})



const resetPassword = catchAsyncError(async (req,res,next)=>{

const {currentPassword,newPassword} =  req.body;
   const {id} = req.params;
  
if(!currentPassword || !newPassword){
  return next(new ErrorHandler("Pleaset fill both the paswords",400));
}
  

    let user = await userModel.findOne({_id:id});

    if(!user){
      return next(new ErrorHandler("User Not found"),409);
    }
    
    //check if current password matches the saved documnet password
    const isMatch  = await user.comparePassword(currentPassword);

    if(!isMatch){
      return next(new ErrorHandler("Current Password is not correct"),409);
    }

    user.password = newPassword;
    //"pre" works after above line it sees the change and acts
    await user.save();
 
  res.status(201).json({
    success:true,
    message:`Password updated successfully`
  })

})

module.exports = {register,login,resetPassword}