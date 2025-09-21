/**
 * @desc    Get all tasks
 * @route   GET /api/tasks
 */
const getTasks = (req, res) => {
    res.status(200).json({ message: 'Get all tasks' });
};

/**
 * @desc    Create a new task
 * @route   POST /api/tasks
 */
const createTask = (req, res) => {
    // Basic validation
    if (!req.body.title) {
        return res.status(400).json({ message: 'Please add a title for the task' });
    }
    res.status(201).json({ message: 'Create a new task' });
};

/**
 * @desc    Get a single task
 * @route   GET /api/tasks/:id
 */
const getTask = (req, res) => {
    res.status(200).json({ message: `Get task ${req.params.id}` });
};

/**
 * @desc    Update a task
 * @route   PUT /api/tasks/:id
 */
const updateTask = (req, res) => {
    res.status(200).json({ message: `Update task ${req.params.id}` });
};

/**
 * @desc    Delete a task
 * @route   DELETE /api/tasks/:id
 */
const deleteTask = (req, res) => {
    res.status(200).json({ message: `Delete task ${req.params.id}` });
};

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};