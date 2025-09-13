import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import OTPBox from "../../components/OTPBox";

const VerifyAccount = () => {

  const [otp, setOtp] = useState("");
  const handleChangeOtp = (value) => {
    setOtp(value);
  }

  return (
    <section className=" bg-white w-full h-[100vh]">
      <header className="w-full fixed top-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
          <img
            src="https://isomorphic-furyroad.vercel.app/_next/static/media/logo.a795e14a.svg"
            className="w-[200px]"
          />
        </Link>

        <div className="flex items-center gap-2">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
              <CgLogIn className="text-[18px]" /> Login
            </Button>
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
              <FaRegUser className="text-[15px]" /> Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src="/bg-img-1.webp"
        className="w-full fixed top-0 left-0 opacity-5"
      />

      <div className="loginBox card w-[45%] h-[auto] pb-20 mx-auto pt-24  relative z-50">
        <div className="text-center">
          <img src="/verify1.png" alt="" className="m-auto"/>
        </div>

        <h1 className="text-center text-[35px] font-[800] mt-4">
          Welcome Back !<br />
          Please Verify your Email .
        </h1>



        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[15px] font-500">
           OTP send to  <span className="text-primary font-bold">kabilan@gmail.com</span>
          </span>
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <br />

        <div className="text-center flex items-center justify-center flex-col">
          <OTPBox length={6} onChangeOtp={handleChangeOtp}/>
        </div>

        <br />

        <div className="w-[200px] m-auto">
          <Button className="btn-blue w-full">Verify OTP</Button>
        </div>

      </div>
    </section>
  );
};

export default VerifyAccount;
