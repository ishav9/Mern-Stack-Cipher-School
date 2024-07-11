import TaskModel from "../models/Task";
const Task = require("../models/Task")
exports.addnewTask = async(req,res)=>{
    try{
        const task = new Task({...req.body, owner: req.user._id});
        await task.save();
        return res.status(201).send({message: "saved"})

    }
    catch(err){
        console.error(err);
        return res.status.send({message:err});
    }
}
const getTask = async (req,res)=>{

    try{
        const taskList = await Task.find({owner: req.user._id});
        return res.status(200).send(taskList);
    }
    catch(err){
        console.error(err);
        return res.status.send({message:err});
    }

};
export default getTask;