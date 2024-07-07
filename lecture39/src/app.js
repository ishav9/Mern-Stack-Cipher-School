
require("./appMongoose");
const express = require("express");
const Task = require("./models/Task");
const app = express();

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
app.listen(800,()=>{
    console.log("server is running");
})