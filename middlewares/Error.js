//express error handler also uses the interenal 
//erorMiddleware which takes(err,req,res,next) as params
//we have done the same

const ErrorMiddleware = (err, req, res, next) => {

  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  })

}

module.exports = ErrorMiddleware;

//we will get the messasge as passed in function but from wheere we will get status Code
//so we make a error Handler class;