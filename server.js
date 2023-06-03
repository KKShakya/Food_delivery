const express = require('express');
require('dotenv').config();




const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
  res.send('WElcome to food Delivery app')
})



// app.use("/api/chat",authentication,Chats)




app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}  `);
})

