const mongoose= require('mongoose')

const schema=mongoose.Schema(
  {
    name:{
      type:String,
      required:[true, "please enter task"]
    },
    completed:{
      type:Boolean,
      required:true,
      default:false
    }
  },
  {
    timestamps:true
  }
)

const taskModel=mongoose.model("taskList",schema)

module.exports=taskModel