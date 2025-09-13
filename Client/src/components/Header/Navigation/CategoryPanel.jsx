import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CategoryCollapse from "../../CategoryCollapse";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatePanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[18px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px] font-[500]"
        />
      </h3>
      <hr />

      <CategoryCollapse />

    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCatePanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
