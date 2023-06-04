

const pageNotFound =  (req,res,next)=>{
  
  res.status(404).send("page Not Found")
}

module.exports = pageNotFound