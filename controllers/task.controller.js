const createHTTPError = require("http-errors")
const Task = require("../models/Task");


module.exports.createTask = async (req, res, next) => {
    try {
        const { body } = req;
        const task = await Task.create(body);
        res.status(201).send({ data: task });
    } catch (error) {
        return next(createHTTPError(400, "bad request!"))
    }
};

module.exports.findAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({});
        res.status(201).send({ data: tasks });
    } catch (error) {
        next(error);
    }
};

module.exports.findTask = async (req, res, next) => {
    try {
        const {
            params: { idTask },
        } = req;
        const task = await Task.findById(idTask);
        res.status(201).send({ data: task });
    } catch (error) {
        next(error);
    }
};

module.exports.updateTask = async (req, res, next) => {
    try {
        const {
            params: { idTask },
            body,
        } = req;
        const task = await Task.findByIdAndUpdate(idTask, body, {new:true});
        res.status(201).send({ data: task });
    } catch (error) {
        next(error);
    }
};

module.exports.deleteTask = async (req, res, next) => {
    try {
        const {
            params: { idTask },
        } = req;
        const task = await Task.findByIdAndDelete
        (idTask);
        res.status(201).send({ data: task });
    } catch (error) {
        next(error);
    }
};
