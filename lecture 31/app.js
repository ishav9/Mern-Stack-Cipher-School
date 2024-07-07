// const addNumbers = (...args)=>{
//     let sum =0;
//     args.forEach((arg)=> sum+=arg);
//     return sum;
// };
// console.log(addNumbers(4,5,1,2,3));

const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("This is some response from your first node js server");
    res.end();

});
server.listen(3000,()=>{
    console.log("server is running");
});
