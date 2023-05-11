const express = require("express");
const TaskController = require("./controllers/task.controller")

const app = express();

app.use(express.json());

app.get("/tasks", TaskController.findAllTasks);
app.get("/tasks/:idTask", TaskController.findTask);
app.post("/tasks", TaskController.createTask);
//update
app.put("/tasks", TaskController.updateTask);
//delete
app.delete("/tasks", TaskController.deleteTask);

app.use((err, req,res,next)=>{
  res.status = err.statusCode || 500;
  const message = err.message || 'Server error';
  res.status(status).send(message)
})

module.exports = app;
