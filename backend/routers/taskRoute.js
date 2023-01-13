const express=require('express')
const router=express.Router()
const { gettingTasks, creatingTask, gettingSingleTask, deletingTask, updatingTask } = require('../controllers/taskController')

router.get('/get-task/:id', gettingSingleTask)
router.get('/get-tasks', gettingTasks)
router.post('/create-task', creatingTask)
router.delete('/delete-task/:id', deletingTask)
router.put('/update-task/:id', updatingTask)

module.exports=router