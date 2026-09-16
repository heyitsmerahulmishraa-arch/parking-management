import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/authRouter.js";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"]
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter);

connectDB()
.then(() => {
    app.listen(PORT,() => {
        console.log(`Server is running`);
    })
})
.catch((error) => {
    console.log(error);
})

