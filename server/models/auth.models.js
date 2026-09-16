import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","manager","area-manager","admin"],
        default:"user"
    }
})

userSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified("password")){
        return;
    }

    try {
        user.password = await bcrypt.hash(user.password,10);
    } catch (error) {
       throw error;
    }
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;