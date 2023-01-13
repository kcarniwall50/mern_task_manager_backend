const taskModel=require('../models/DBschema')

// CRUD =>  Create --  Read --  Update --  Delete


// Create
const creatingTask= async (req, res)=>{
  try{
  const Task= await taskModel.create(req.body)
  res.status(200).json(Task)
  }
  catch(error){
    res.status(500).json({msg:error.message})
  }
}

// Read
const gettingTasks= async(req,res)=>{
  try{
    const Task= await taskModel.find()
    res.status(200).send(Task)
  }
  catch(error){
    res.status(500).json({msg:error.message})
  }
}

const gettingSingleTask = async (req, res)=>{
try{
  const {id}=req.params
  const Task=await taskModel.findById(id)
  if(!Task)
  {
    return res.status(404).json(`Task was not found with id: ${id}`)
  }
  else{
    res.status(200).json(Task)
  }
}
catch(error)
{
  res.status(500).json({msg:error.message})
}  
}

//Update
// Note:  required validation does not apply over update route (use runValidators for it)
const updatingTask= async (req, res)=>{
  try{
    const {id}=req.params
    const Task = await taskModel.findByIdAndUpdate(
      {_id:id}, req.body, {new:true, runValidators:true}
    )
    if(!Task)
    {
      return res.status(404).json(`Task was not found with id: ${id}`)
    }
    res.status(200).json(Task)
  }
  catch(error)
  {
    res.status(500).json({msg:error.message})
  }

}



// Delete
const deletingTask= async (req,res)=>{
  try{
    const {id}=req.params
    const Task=await taskModel.findByIdAndDelete(id)
    if(!Task)
    {
      return res.status(404).json(`Task was not found with id: ${id}`)
    }
    res.status(200).send('Task deleted successfully ')
  }
  catch(error)
  {
    res.ststus(500).json({msg:error.message})
  }
}


// Exporting
module.exports={
  creatingTask,
  gettingTasks,
  gettingSingleTask,
  deletingTask,
  updatingTask
}