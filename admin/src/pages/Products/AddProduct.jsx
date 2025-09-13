import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../components/UploadBox";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const AddProduct = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setProductSubCat] = useState("");
  const [productFeatured, setProductFeatured] = useState("");
  const [productRams, setProductRams] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className="p-5 ">
      <form className="form py-0 p-8">
        <div className="scroll  max-h-[72vh] pr-4 overflow-auto">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Name</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">
                Product Description
              </h3>
              <textarea
                type="text"
                className="w-full h-[100px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
              />
            </div>
          </div>

            <div className="grid grid-cols-4 mb-3 mt-2 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">
                  Product Category
                </h3>
                <Select
                  labelId="demo-simple-select-label-1"
                  id="productCatDrop"
                  value={productCat}
                  size="small"
                  label="Category"
                  onChange={handleChangeProductCat}
                  className="w-full bg-[#fafafa]"
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={10}>Fashion</MenuItem>
                  <MenuItem value={20}>Beauty</MenuItem>
                  <MenuItem value={30}>Wellness</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">
                  Product Sub Category
                </h3>
                <Select
                  labelId="demo-simple-select-label-2"
                  id="productSubCatDrop"
                  value={productSubCat}
                  size="small"
                  label="Sub Category"
                  onChange={handleChangeProductSubCat}
                  className="w-full bg-[#fafafa]"
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={10}>Men</MenuItem>
                  <MenuItem value={20}>Women</MenuItem>
                  <MenuItem value={30}>Kids</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Product Price</h3>
                <input
                  type="number"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">
                  Product Old Price
                </h3>
                <input
                  type="number"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 mt-2 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Is Featured ?</h3>
                <Select
                  labelId="demo-simple-select-label-3"
                  id="productFeatured"
                  value={productFeatured}
                  size="small"
                  label="Category"
                  onChange={handleChangeProductFeatured}
                  className="w-full bg-[#fafafa]"
                >
                  <MenuItem value={10}>True</MenuItem>
                  <MenuItem value={20}>False</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Product Stock</h3>
                <input
                  type="number"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Product Brand</h3>
                <input
                  type="text"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
                />
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">
                  Product Discount
                </h3>
                <input
                  type="number"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 mb-3 mt-2 gap-4">
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Product RAMS</h3>
                <Select
                  labelId="demo-simple-select-label-4"
                  id="productRams"
                  value={productRams}
                  size="small"
                  label="Category"
                  onChange={handleChangeProductRams}
                  className="w-full bg-[#fafafa]"
                >
                  <MenuItem value={"4GB"}>4GB</MenuItem>
                  <MenuItem value={"6GB"}>6GB</MenuItem>
                  <MenuItem value={"8GB"}>8GB</MenuItem>
                  <MenuItem value={"12GB"}>12GB</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Product Weight</h3>
                <Select
                  labelId="demo-simple-select-label-5"
                  id="productWeight"
                  value={productWeight}
                  size="small"
                  label="Sub Category"
                  onChange={handleChangeProductWeight}
                  className="w-full bg-[#fafafa]"
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={10}>2kg</MenuItem>
                  <MenuItem value={20}>4kg</MenuItem>
                  <MenuItem value={30}>6kg</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Product Size</h3>
                <Select
                  labelId="demo-simple-select-label-6"
                  id="productSize"
                  value={productSize}
                  size="small"
                  label="Sub Category"
                  onChange={handleChangeProductSize}
                  className="w-full bg-[#fafafa]"
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={"S"}>S</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                  <MenuItem value={"XXL"}>XXL</MenuItem>
                </Select>
              </div>
              <div className="col">
                <h3 className="text-[14px] font-[500] mb-1">Product Rating</h3>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
            </div>
          

          <div className="col w-full p-5 px-0">
            <h3 className="font-[700] text-[20px] mb-2">Media & image</h3>
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
        </div>
        <Button
          className="btn-blue btn-lg w-full flex gap-2 items-center"
          type="button"
        >
          <FaCloudUploadAlt className="text-[20px]" />
          PUBLISH AND VIEW
        </Button>
      </form>
    </section>
  );
};

export default AddProduct;
