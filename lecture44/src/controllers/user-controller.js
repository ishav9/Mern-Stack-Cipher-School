const User = require("../models/user");
const addNewUser = async(req,res)=>{
    try{
        const {name, email,age,password} = req.body;
        const user = new User({name,email,age,password});
        await user.save();
        return res.status(201).send(user);
    }catch(err){
        console.log(err);
        return res.status(500).send({message: err.message});
    }
}
const loginUser = async(req,res)=>{
    try{
        const{email,password}= req.body;
        const user = await User.findByEmailandPasswordForAuth(email,password);
        console.info(`User with Email: ${email}  successfully logged in`)
        return res.status(200).send(user);
    }
    catch(err){
        console.error(err);
        return res.status(500).send({message:"Login failed"});
    }
};
module.exports = {addNewUser,loginUser};
