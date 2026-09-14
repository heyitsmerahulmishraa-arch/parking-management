import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/authRouter.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json())
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

