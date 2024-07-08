const jwt = require("jsonwebtoken");
const CS_SECRET_KEY = "CSSecretKey";
const generateToken = (payload)=>{
    const token = jwt.sign(payload, CS_SECRET_KEY);
    return token;
}
const verifyToken = (token)=>{
    try{
        const payload = jwt.verify(token, CS_SECRET_KEY);
        return {isValideToken: true, payload};
    }catch(err){
        console.error(err);
        return {isValideToken:false, payload:undefined};

    }
}
// module.exports ={generateToken, verifyToken};
// console.log(generateToken({name:"Isha verma"}));
console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXNoYSB2ZXJtYSIsImlhdCI6MTcyMDQ1MjE0NH0.wkvduG74CeCQiNT5wU1rGU1ONGBffLiTAPFh9FROA3A"));
