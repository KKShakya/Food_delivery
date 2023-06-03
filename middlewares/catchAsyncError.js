
//a function passed as a argument having params as req,res,next for giving control ot other middlewres

const catchAsyncError = (passedFunction) => (req, res, next) => {

  Promise.resolve(passedFunction(req, res, next)).catch(next);
  // this cathc here can also wbe written as
  // catch(()=>{}) we did not need to call the function inside catch 
  //next takes us to next  middleware
}

module.exports = catchAsyncError;