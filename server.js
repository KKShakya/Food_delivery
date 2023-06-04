const express = require('express');
require('dotenv').config();

const  {connectDB } = require('./config/db');
const ErrorMiddleware = require('./middlewares/Error');
const pageNotFound = require('./middlewares/pageNotFound');
const user = require('./routes/userRoutes.js')
const restaurants = require('./routes/restaurantRoutes')

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
  res.send('WElcome to Food_delivery Application')
})



app.use("/api",user)
app.use("/api/restaurants",restaurants)


// for page not found
app.use(pageNotFound)





connectDB();

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}  `);
})

//using it at last so that it get called when there is
//no middleware left to be called in routes
app.use(ErrorMiddleware);