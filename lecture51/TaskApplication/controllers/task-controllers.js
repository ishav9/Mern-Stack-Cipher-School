import TaskModel from "../models/Task";

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
