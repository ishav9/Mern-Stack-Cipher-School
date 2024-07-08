const {model,Schema} = require("mongoose");
const {isEmail} = require("validator");
const { encryptPassword, checkPassword } = require("../bcrypt");
const userSchema = new Schema({
    name:{type: String, trim:true, required:true},
    email:{type:String, trim:
        true, lowercase:true, unique:true, required:true, validate:{validator(email){
            return isEmail(email);
        }}
    },
    age:{type:Number, required:true, validate:{validator(age){
        if(age<0){
            throw new Error("age must be positive");
        }
        return true;
    }}},
    password:{type:String, required: true, trim: true, minlength:8, validate:{validator(password){
        if(password.includes(" ") || password.includes("\n") || password.includes("\t")){
            throw new Error("password contains space or new line character")
        }
        if(password.toLowerCase().includes("password")){
            throw new Error(`password must not conatin 'password' `);
        }
    }}},

},
{timestamps:true});
userSchema.statics.findByEmailandPasswordForAuth = async(email,password)=>{
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error('invalid credentials');
        }
        const isMatch = await checkPassword(password, user.password);
        if(!isMatch){
            throw new Error('invalid credentials');
        }
        console.log("login successfull");
    }catch(err){
        console.error(err);
        throw err;
    }
}

userSchema.pre("save",async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password = await encryptPassword(user.password);
    }
    next(); 
})
const User = model("User", userSchema);
module.exports = User;
