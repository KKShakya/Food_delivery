const mongoose = require('mongoose')

const connectDB = async ()=>{
 try {
  const {connection} =  await mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log("Connected to databse ",connection.host);

} catch (error) {
   console.log({"error":error.message});
     
 }

}

module.exports = {connectDB}
