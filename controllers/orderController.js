const catchAsyncError = require("../middlewares/catchAsyncError")
const orderModel = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");

const OrderFood = catchAsyncError(async (req, res,next) =>{

   const {deliveryAddress
   } = req.body;

   const addressKeys = Object.keys(deliveryAddress);

   if(addressKeys.length < 5){
    return next(new ErrorHandler("Please fill the complete address",400));
   }

   let order = await orderModel.create(req.body);

   res.status(201).json({
    success: true,
    message:"Order placed successfully",
   })

})




const getOrder = catchAsyncError(async (req,res,next) =>{

  const {id} = req.params;

  let order = await orderModel.find({_id:id}).populate(['user','restaurant']);

  if(!order){
    return next(new ErrorHandler("Failed to fetch the order details",422))
  }

   res.status(200).json({
    success: true,
    order
   })

})





const updateOrderStatus = catchAsyncError(async (req, res,next) =>{

  const {id} = req.params;
  
  let order = await orderModel.findByIdAndUpdate(id,{$set:{status:req.body.status}},{new:true});

  if(!order){
    return next(new ErrorHandler("Failed to fetch the order details",422))
  }
   
   res.status(200).json({
    success: true,
    order
   })

})


module.exports = {OrderFood,getOrder,updateOrderStatus}