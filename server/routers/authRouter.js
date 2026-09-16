import express from "express";
import { Register,allUser, login } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/").get((req,res) => {
    res.end("Server Working")
})

authRouter.route("/user").get(allUser)

authRouter.route("/register").post(Register);
authRouter.route("/login").post(login)

export default authRouter;

