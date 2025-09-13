import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingFb, setIsLoadingFb] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  function handleClickGoogle() {
    setIsLoadingGoogle(true);
  }
  function handleClickFb() {
    setIsLoadingFb(true);
  }

  return (
    <section className=" bg-white w-full ">
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

      <div className="loginBox card w-[45%] h-[auto] pb-25 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img
            src="https://isomorphic-furyroad.vercel.app/_next/static/media/logo.a795e14a.svg"
            className="m-auto"
          />
        </div>

        <h1 className="text-center text-[35px] font-[800] mt-4">
          Join us today !
          Get special<br /> benefits and stay up-to-date.
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-5">
          <Button
            size="small"
            onClick={handleClickGoogle}
            loading={isLoadingGoogle}
            startIcon={<FcGoogle />}
            loadingPosition="end"
            variant="outlined"
            className="!bg-none !py-2 text-[16px] !capitalize !px-5 !text-[rgba(0,0,0,0.5)]"
          >
            Signin with Google
          </Button>
          <Button
            size="small"
            onClick={handleClickFb}
            loading={isLoadingFb}
            startIcon={<BsFacebook />}
            loadingPosition="end"
            variant="outlined"
            className="!bg-none !py-2 text-[16px] !capitalize !px-5 !text-[rgba(0,0,0,0.5)]"
          >
            Signin with Facebook
          </Button>
        </div>

        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[15px] font-500">
            Or, Sign in with your email
          </span>
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <form className="w-full px-8">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Full Name</h4>
            <input
              type="text"
              className="w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3"
            />
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3"
            />
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Password</h4>
            <div className="relative w-full">
              <input
                type={`${isPasswordShow === true ? "text" : "password"}`}
                className="w-full h-[50px] !border-2 !border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.3)] focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[8px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-[rgba(0,0,0,0.6)]"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === true ? (
                  <FaRegEyeSlash className="text-[18px]" />
                ) : (
                  <FaRegEye className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />

            <Link
              to={"/forgot-password"}
              className="text-primary font-[500] text-[15px] hover:underline"
            >
              Forgot Password ?
            </Link>
          </div>

          <Button className="btn-blue btn-lg w-full">Sign Up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
