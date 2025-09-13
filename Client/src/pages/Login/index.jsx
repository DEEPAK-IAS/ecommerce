import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const Login = () => {

  const context = useContext(MyContext);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const forgotPassword = () => {
    if (formFields.email == "") {
      history("/verify");
      context.openAlertBox("success","OTP Send")
    }
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="Email Id"
                variant="outlined"
                className="w-full"
                name="email"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? "text" : "password"}
                id="password"
                label="Password"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                type="submit"
                className="!absolute top-[10px] right-[10px] !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEye className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <a
              className="link cursor-pointer text-[14px] font-[600]"
              onClick={forgotPassword}
            >
              Forgot Password ?
            </a>

            <div className="flex items-center my-3">
              <Button className="btn-org btn-lg w-full">Login</Button>
            </div>

            <p>
              Not Registered?{" "}
              <Link
                to={"/register"}
                className="link text-[14px] font-[600] !text-primary"
              >
                Sign Up
              </Link>
            </p>

            <p className="text-center font-[500]">
              Or continue with social account
            </p>

            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[20px]" /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
