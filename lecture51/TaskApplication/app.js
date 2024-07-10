
require("./appMongoose");
const taskRouter = require("./routes/task-route");
const express = require("express");
const Task = require("./models/Task");
const userRouter = require("./routes/user-routes")
const app = express();

app.use(express.json());
app.use("/user", userRouter)
app.use("/task", taskRouter);
// express is a function
app.get("/",(req,res)=>{
    res.send("This is some response from first express ");
})
app.get("/add",(req,res)=>{
    let {a: firstNumber,b:SecondNumber} = req.query;
    let sum = parseInt(firstNumber)+parseInt(SecondNumber);
    res.send({sum});

})
app.post("/add-task",async(req,res)=>{
    const task = new Task({title: "Test Task", description:"Test Task Desc"});
    task.save();
    return res.send(201).send({message:"Saved!"})
})
app.get("/get-tasks", async(req, res)=>{
    const taskList = await Task.find();
    return res.status(200).send(taskList);
})

app.put("/update/:taskId",async(req,res)=>{
    const {taskId}= req.params;

    const updateResult = await Task.updateOne({_id: taskId }, {$set:{...req.body}});
    if(updateResult.matchedCount){
        if(!updateResult.matchedCount){
            return res
            .status(404).
            send({message: `Task with ID:  ${taskId} was not found`})
        }
        
    }
    return res.status(200).send({message:"Update Success"});
})
app.delete("/delete-task/:taskId", async(req,res)=>{
    const {taskId}= req.params;

    const deleteResult = await Task.deleteOne({_id: taskId })
   
        if(!deleteResult.deletedCount){
            return res
            .status(404).
            send({message: `Task with ID:  ${taskId} was not found`})
        }
        
    
    return res.status(200).send({message:"delete Success"});
})
app.listen(800,()=>{
    console.log("server is running");
})