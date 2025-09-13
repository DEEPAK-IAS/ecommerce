import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubMenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

                  {innerSubMenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Smart Tablets
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Outerwear
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}

                  {innerSubMenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Smart Tablets
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
