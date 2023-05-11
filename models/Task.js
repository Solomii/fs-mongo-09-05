const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    content: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /[A-Za-z0-9\s]{5,512}/.test(v),
            message: (props) => `${props.value} is not a valid content!`,
        },
    },
    isDone: { type: Boolean, default: false },
    dateAt: { type: Date, default: Date.now() },
    author: {
        name: { type: String, required: true },
        age: Number,
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
