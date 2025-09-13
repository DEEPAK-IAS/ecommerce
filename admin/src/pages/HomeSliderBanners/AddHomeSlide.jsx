import React from "react";
import UploadBox from "../../components/UploadBox";
import { IoMdClose } from "react-icons/io";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

import "react-lazy-load-image-component/src/effects/blur.css";

const AddHomeSlide = () => {
  return (
    <section className="p-5 ">
      <form className="form py-0 p-8">
        <div className="scroll  max-h-[72vh] pr-4 overflow-auto  pt-5">
          <div className="grid grid-cols-7 gap-2">
            <div className="uploadBoxWrapper relative">
              <span className="absolute -top-[5px] -right-[5px] h-[20px] w-[20px] flex cursor-pointer items-center justify-center z-50 rounded-full bg-red-700 text-white">
                <IoMdClose className="text-[17px] font-[500]" />
              </span>
              <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-300 cursor-pointer flex items-center justify-center flex-col relative">
                <LazyLoadImage
                  className="w-full h-full object-fit-cover"
                  alt={"image"}
                  src={
                    "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"
                  }
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>

            <UploadBox multiple={true} />
          </div>
        </div>

        <br />
        <br />

        <div className="w-[250px]">
          <Button
            className="btn-blue btn-lg w-full flex gap-2 items-center"
            type="button"
          >
            <FaCloudUploadAlt className="text-[20px]" />
            PUBLISH AND VIEW
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddHomeSlide;
