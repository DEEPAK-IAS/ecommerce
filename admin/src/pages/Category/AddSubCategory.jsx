import React, { useState } from "react";

import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

const AddSubCategory = () => {
  const [productCat, setProductCat] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  return (
    <section className="p-5 ">
      <form className="form py-0 p-8">
        <div className="scroll  max-h-[72vh] pr-4 overflow-auto  pt-5">
          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Category</h3>
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
              <h3 className="text-[14px] font-[500] mb-1">Sub Category Name</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]"
              />
            </div>
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

export default AddSubCategory;
