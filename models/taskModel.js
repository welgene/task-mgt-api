const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
        },
        description: {
            type: String,
        },
    }, {
        timestamps: true,
    });

module.exports = mongoose.model('Task', taskSchema);