import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import userRouter from "./route/user.route.js";

const app = express();

app.use(cors())
// app.options("*", cors());
app.use(express.json())
app.use(cookieParser())
app.use(morgan("combined"))
app.use(helmet({
  crossOriginEmbedderPolicy: false
}))

app.get("/",(req, res) => {
  res.json({
    message: "server is running" + process.env.PORT
  })
})

app.use("/api/users",userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; 
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message
  });
})

connectDB().then(() => {
  app.listen(process.env.PORT,() => {
    
    console.log("server is running ", process.env.PORT);
  })
});