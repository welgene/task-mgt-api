const HTTP_STATUS = require('../constants');
const Task = require('../models/taskModel');


/**
 * @desc    Get all tasks
 * @route   GET /api/tasks
 */
const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.status(HTTP_STATUS.OK).json(tasks);
    }catch(err){
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({message:err.message})
    }
}

/**
 * @desc    Create a new task
 * @route   POST /api/tasks
 */
const createTask = async (req, res) => {
   try {
         // basic validation
    if(!req.body.title){
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message :"title is required"})
    } 
    // create new task
    const newTask = await new Task({
        title : req.body.title,
        description : req.body.description,
        completed : req.body.completed || false
    })

    //save created task
    const savedTask = await newTask.save();
    res.status(201).json({savedTask})
   } catch (error) {
        res.status(HTTP_STATUS.BAD_REQUEST)
   }

};

/**
 * @desc    Get a single task
 * @route   GET /api/tasks/:id
 */
const getTask = async  (req, res) => {
    try {
        
        const task = await Task.findById(req.params.id)
        if(!task) return res.status(HTTP_STATUS.NOT_FOUND).send('task does not exist')
        res.status(HTTP_STATUS.OK).json(task)
    } catch (err) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({message : err.message})
    }
};

/**
 * @desc    Update a task
 * @route   PUT /api/tasks/:id
 */
const updateTask = async (req, res) => {
    try {
        const updatedTask = Task.findByIdAndUpdate(req.params.id, 
        req.body,
        {new :true,runValidators: true}) 
    if(!updateTask) return res.status(HTTP_STATUS.NOT_FOUND).json({message : "task not found"})
    res.status(HTTP_STATUS.OK).json(updatedTask)
    } catch (err) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({message : err.message})
    }
};

/**
 * @desc    Delete a task
 * @route   DELETE /api/tasks/:id
 */
const deleteTask = async (req, res) => {
    try {
        const taskToDelete = await Task.findByIdAndDelete(req.params.id)
        if(!taskToDelete) return res.status(HTTP_STATUS.NOT_FOUND).json({message : "task not found"})
        res.status(HTTP_STATUS.OK).json(`task deleted ${req.params.id}`)
    } catch (err) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({message : err.message})
    }
};

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};