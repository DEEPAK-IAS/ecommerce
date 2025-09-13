import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Rating } from "@mui/material";
import {Button} from "@mui/material";

const MyListItem = (props) => {
 
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to={"/product/7845"} className="group">
          <img
            src="https://api.spicezgold.com/download/file_1734527033961_ksc-khatushyam-collection-black-pu-for-women-handheld-bag-product-images-rvkg3apiuk-0-202405282358.webp"
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoCloseSharp className="cursor-pointer !absolute top-[0px] right-[0px] text-[22px] link transition-all" />
        <span className="text-[14px]">Sangria</span>
        <h3 className="text-[15px]">
          <Link to={"/product/123"} className="link">
            A-Line Kurti with Sharara & Dupatta
          </Link>
        </h3>



        <Rating name="size-small" defaultValue={4} size="small" readonly />

        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="price text-[14px] font-[600]">$1,231</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            $58.00
          </span>
          <span className="price text-primary text-[14px] font-[600]">
            $55.00 OFF
          </span>
        </div>

        <Button className="btn-org btn-sm"> Add to Cart</Button>

      </div>
    </div>
  );
};

export default MyListItem;
