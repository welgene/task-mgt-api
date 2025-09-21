const express = require('express')
const router = express.Router();
const { 
    getTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask 
} = require('../controllers/taskController');

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     description: Retrieve a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Get all tasks
 *   post:
 *     summary: Create a new task
 *     description: Create a new task with a title.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task.
 *                 example: "Learn Swagger"
 *     responses:
 *       201:
 *         description: Task created successfully.
 *       400:
 *         description: Bad request, title is missing.
 */
router.route('/').get(getTasks).post(createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a single task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single task.
 *   put:
 *     summary: Update a task by ID
 *   delete:
 *     summary: Delete a task by ID
 */
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
