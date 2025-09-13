import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const context = useContext(MyContext);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const history = useNavigate();

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">
            Forgot Password
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? "text" : "password"}
                id="password"
                label="password"
                variant="outlined"
                className="w-full"
                name="email"
              />
              <Button
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
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowConfirmPassword ? "text" : "password"}
                id="confirm password"
                label="confirm password"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                className="!absolute top-[10px] right-[10px] !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              >
                {isShowConfirmPassword ? (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEye className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>



            <div className="flex items-center my-3">
              <Button className="btn-org btn-lg w-full">Change Password</Button>
            </div>


          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
