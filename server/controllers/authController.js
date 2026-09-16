import User from "../models/auth.models.js";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email }).select("-password");

    if (userExist) {
      res.status(401).send("User already exist with this email");
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    const newUserObj = newUser.toObject();
    const { password: unUsedPassword, ...newUserData } = newUserObj;
    res.status(200).json({ message: "Success", data: newUserData });
  } catch (error) {
    res.status(500).json({ error: `controller error: ${error.message}` });
  }
};

export const login = async (req, res) => {
  try {

    const {identifier,password} = req.body;

    if(!identifier || !password){
        res.status(400).json({message:"All fields are required"})
    }

    const user = await User.findOne({
        $or:[
            {email:identifier.toLowerCase().trim()},
            {phone:identifier.trim()},
            {username:identifier.toLowerCase().trim()}
        ]
    })

    if(!user){
        res.status(400).json({message:"User not found"})
    }

    const isPasswordCorrect = await user.matchPassword(password)

    if(!isPasswordCorrect){
        res.status(400).json({message:"Password invalid"})
    }

    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

    return res.status(200).cookie("token",token,{
      httpOnly:true,
      secure:process.env.NODE_ENV === "production",
      sameSite:"lax",
      maxAge: 24*60*60*1000
    }).json({message:"Success",data:user})

  } catch (error) {
    res.status(500).json({ error: `Login error: ${error.message}` });
  }
};

export const allUser = async (req, res) => {
  try {
    const allUsers = await User.find().select("-password");

    res.status(200).json({ message: "Success", data: allUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
