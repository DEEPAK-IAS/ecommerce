import { Router } from "express";
import { registerUserController,verifyEmail } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", registerUserController)
          .post("/verifyEmail",verifyEmail);


export default userRouter;