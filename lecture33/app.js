const express = require("express");
// express is a function
const app = express();
app.get("/",(req,res)=>{
    res.send("This is some response from first express ");
})
app.get("/add",(req,res)=>{
    let {a: firstNumber,b:SecondNumber} = req.query;
    let sum = parseInt(firstNumber)+parseInt(SecondNumber);
    res.send({sum});

})
app.listen(800,()=>{
    console.log("server is running");
})
