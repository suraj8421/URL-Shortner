
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require("./src/route/route")
const dotenv = require("dotenv")
const connectDB =require("./src/config/db")
 //env config
 dotenv.config()
 //mogoose config
 connectDB()
 //rest object
const app = express()
//middleware
app.use(bodyParser.json())



app.use("/",route)
const PORT =process.env.PORT ||8080

app.listen(PORT, () =>
    console.log("Express App Is Running On 3000 ✔😂")
)