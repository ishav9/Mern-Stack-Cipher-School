const {verifyToken} = require("../jwt");
const User = require("../models/user");

const authMiddleware = (req, res,next)=>{
    // {authorixation: "bearer <token>"} // because  from index 7 token will start
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(400).send({message:"please send  a token"});
    }
    const token = authorization.substring(7);
    // 
    const {isValidToken, payload} = verifyToken(token);
    if(isValidToken){
        console.log(`Token is valid!`);
        const user =  User.findOne({_id: payload._id});
        req.token = token;
        req.user = user;
        next(); // next function is in line
    }else{
        console.warn(`token is invalid`);
        return res.status(403).send({message:"Please use a valid token!"});
    }
}
module.exports = authMiddleware;
