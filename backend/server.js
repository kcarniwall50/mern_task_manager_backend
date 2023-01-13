const mongoose = require("mongoose")
const express = require("express")
const dotenv=require("dotenv").config()
const Routers=require('./routers/taskRoute')
mongoose.set('strictQuery', false)
const cors = require("cors")



// middleware---------------------------------------------------------
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors(
{
  origin:["http://localhost:3000", "http://mern_task_manager.onrender.com"]
}
))
// ---------------------------------------



const PORT=process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
  })
})
.catch((error)=>{
  console.log(error)
  
})


app.use(Routers)