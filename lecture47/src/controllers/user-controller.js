const User = require("../models/user");
const addNewUser = async(req,res)=>{
    try{
        const {name, email,age,password} = req.body;
        const user = new User({name,email,age,password});
        await user.save();
        const token = user.generateToken();
        return res.status(201).send(user);
    }catch(err){
        console.log(err);
        return res.status(500).send({message: err.message});
    }
}
const loginUser = async(req,res)=>{
    try{
        const{email,password}= req.body;

        const token = user.generateToken();

        const user = await User.findByEmailandPasswordForAuth(email,password);
        console.info(`User with Email: ${email}  successfully logged in`)
        return res.status(200).send({user,token});
    }
    catch(err){
        console.error(err);
        return res.status(500).send({message:"Login failed"});
    }
};
const deleteUser =  async(req,res)=>{
   const {user} = req;
    const deleteResult = await User.deleteOne({_id: user._id});
    if(!deleteResult.deletedCount){
        console.error(`Delete failed User with Id: ${user._id} was not found`)
        return res.status(404).send({message:`Delete failed User with Id: ${user._id} was not found`});
    }
    console.log(`Delete succes : User with Id: ${user._id} was deleted`);
    return res.status(200).send({message:"Delete succesfully"});
}
module.exports = {addNewUser,loginUser,deleteUser};
