console.clear();
const express = require("express");
const connectDB =require('./config/connectDB')
require('dotenv').config();
var cors = require('cors')




const app =express();
//connect DB
 connectDB();
 //routes
 app.use(cors())
 app.use(express.json());
 
 app.use("/user", require("./routes/user"));

const PORT =process.env.PORT;

app.listen(PORT,(err)=>
   err? console.log(err) :console.log(`server is running `)
);
