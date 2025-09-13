import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";

const AccountSideBar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="data:image/jpeg;base64,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"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[#fff] text-[30px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>
        <h3>Deepak surya</h3>
        <h6 className="text-[13px] font-[500]">deepaksurya2002dgl@gmail.com</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to={"/my-account"} exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <FaRegUser className="text-[17px]" /> My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to={"/my-list"} exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <IoMdHeartEmpty className="text-[17px]" /> My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to={"/my-orders"} exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <IoBagCheckOutline className="text-[17px]" /> My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to={"/logout"} exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <IoIosLogOut className="text-[17px]" /> LogOut
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
