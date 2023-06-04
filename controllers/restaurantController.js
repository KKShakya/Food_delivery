const catchAsyncError = require("../middlewares/catchAsyncError")
const resataurantModel = require("../models/restaurantMoel");
const ErrorHandler = require("../utils/errorHandler");

const getResaturantList = catchAsyncError(async (req,res,next) => {

   const results = await resataurantModel.find();
    
   if(results.length === 0){
    return next(new ErrorHandler("An error occurred while fetching",502))
   }

   res.status(200).send({
    success: true,
    results,
   })

})
const getResaturant = catchAsyncError(async (req,res,next) => {

    const {id} = req.params;
   const result = await resataurantModel.findOne({_id:id});

   if(!result){
    return next(new ErrorHandler("An error occurred while fetching",502))
   }

   res.status(200).send({
    success: true,
    result,
   })

})


//get the menu of specific restaurant
const getResaturantMenu = catchAsyncError(async (req,res,next) => {

    const {id} = req.params;
   const restaurant = await resataurantModel.findOne({_id:id});

   if(!restaurant){
    return next(new ErrorHandler("An error occurred while fetching",502))
   }

   res.status(200).send({
    success: true,
    result:restaurant.menu,
   })

})



//add menus to restaurants
const addResaturantMenu = catchAsyncError(async (req,res,next) => {

   
    const {id} = req.params;
    const{name,description,price,image} = req.body;

    if(!name || !description || !price || !image){
      return next(new ErrorHandler("Please fill all the details",400))
    }
     
   const restaurant = await resataurantModel.findByIdAndUpdate(id,
      {$addToSet:{menu:{name,description,price,image}}},
      {new :true} //ensuring updation
      );



   if(!restaurant){
    return next(new ErrorHandler("An error occurred while adding an item",502))
   }

   // restaurant.menu.push({name,price,description,image})
  
    
   res.status(201).send({
    success: true,
    result:restaurant.menu,
   })

})


//nested objects working

const deleteResaturantMenu = catchAsyncError(async (req,res,next) => {

   
    const {id,menu_id} = req.params;
    console.log(id,menu_id)

   //   1. getting restaurant from _id
   //   2. pulling out menu tem eith specific id
   //   3. new :true ensures that the method returns the updated document after the update operation is performed.

   const restaurant = await resataurantModel.findByIdAndUpdate(id,
      {$pull:{menu:{_id:menu_id}}},
      {new:true}
   );


    
   res.status(202).send({
    success: true,
   message:"Menu Item deleted successfully",
   })

})


module.exports = {getResaturantList,getResaturant,getResaturantMenu,addResaturantMenu,deleteResaturantMenu}