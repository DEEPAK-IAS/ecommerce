import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import errorHandler from "../utils/errorHandler.js";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/VerifyEmailTemplate.js";

export async function registerUserController(req, res, next) {
  try {
    let user;

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(errorHandler("400", "provide email, name, password"));
    }

    user = await UserModel.findOne({ email: email });

    if (user) {
      return next(
        errorHandler("200", "User already Registered with this email")
      );
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      otp: verifyCode,
      otpExpires: Date.now() + 600000,
    });

    await newUser.save();

    const verifyEmail = await sendEmailFun({
      to: email,
      subject: "Verify email from Ecommerce App",
      text: "",
      html: VerificationEmail(name, verifyCode),
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET_KEY
    );

    return res.status(200).json({
      success: true,
      error: false,
      message: "User registered successfully! Please verify your email.",
      token: token,
    });
  } catch (err) {
    next(err);
  }
}

export async function verifyEmail(req, res, next) {
  try {
    const { email, otp } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      next(errorHandler("404", "Invalid code"));
    }

    const isCodeValid = user.otp === otp;
    const isNotExpired = user.otpExpires > Date.now();

    if (isCodeValid && isNotExpired) {
      user.verify_email = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Email verified successfully.",
      });
    } else if (!isCodeValid) {
      return next(errorHandler("400", "Invalid OTP"));
    } else {
      return next(errorHandler("400", "OTP expired"));
    }
  } catch (err) {
    next(err);
  }
}
