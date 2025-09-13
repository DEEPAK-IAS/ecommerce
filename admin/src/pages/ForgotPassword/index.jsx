import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";

const ForgotPassword = () => {


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

      <div className="loginBox card w-[45%] h-[auto] pb-20 mx-auto pt-20 relative z-50 mt-20">
        <div className="text-center">
          <img
            src="https://isomorphic-furyroad.vercel.app/_next/static/media/logo.a795e14a.svg"
            className="m-auto"
          />
        </div>

        <h1 className="text-center text-[35px] font-[800] mt-4">
          Having trouble to sign in? <br />
          Reset your password.
        </h1>



        <form className="w-full px-8">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3"
              placeholder="Enter your email"
            />
          </div>


          <Button className="btn-blue btn-lg w-full">Reset Password</Button>
          <br /><br />
          <div className="text-center flex items-center justify-center gap-4">
            <span className="">Don't want to reset?</span>
            <Link 
              to="/login"
              className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700"
            >
           Sign In? </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
