const {connect} = require("mongoose");
const MONGO_URL = "mongodb+srv://isha:isha@cluster0.aryzw6n.mongodb.net";
const DB_NAME = `cs-mern`;
async function connectDb(){
    try{
 await connect(`${MONGO_URL}/${DB_NAME}`);
 console.log(`MongoDB connected`);
    }
    catch(err){
        console.error(err);
    }
}
connectDb();


