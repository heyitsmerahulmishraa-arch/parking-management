import User from "../models/auth.models.js";

export const Register = async (req,res) => {
    try {
        const {username,email,password} = req.body;

        const userExist = await User.findOne({email}).select("-password");

        if(userExist){
            res.status(401).send("User already exist with this email")
        }

        const newUser = new User({username, email, password});
        await newUser.save();
        res.status(200).json({message:"Success",data:newUser})
    } catch (error) {
        res.status(500).json({error:`controller error: ${error.message}`})
    }
}

export const allUser = async (req,res) => {
    try {
        const allUsers = await User.find().select("-password");

        res.status(200).json({message:"Success", data:allUsers})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}