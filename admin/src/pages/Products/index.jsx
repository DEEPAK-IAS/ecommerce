import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
// import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import Progress from "../../components/ProgressBar";

import TooltipMui from "@mui/material/Tooltip";

import { Checkbox } from "@mui/material";
import SearchBox from "../../components/SearchBox";
import  {MyContext}  from "../../App";

const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  {
    id: "category",
    label: "CATEGORY",
    minWidth: 100,
  },
  {
    id: "subcategory",
    label: "SUB CATEGORY",
    minWidth: 150,
  },
  {
    id: "price",
    label: "PRICE",
    minWidth: 130,
  },
  {
    id: "sales",
    label: "SALES",
    minWidth: 100,
  },
  {
    id: "action",
    label: "ACTION",
    minWidth: 120,
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Products = () => {
  const [categoryFilterVal, setCategoryFilterVal] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const context = useContext(MyContext);

  const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-bold">
          Products
          <span className="font-400 text-[14px]">(Material Ui Table)</span>
        </h2>
        <div className="col w-[25%] flex items-center gap-3 justify-end">
          <Button className="btn !bg-green-500 btn-sm">Export</Button>
          <Button className="btn-blue btn-sm" onClick={() => context.setIsOpenFullScreenPanel({
            open: true,
            model: 'Add Product'
          })}>Add Product</Button>
        </div>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5 justify-between mb-5">
          <div className="col w-[20%]">
            <h4 className="font-[600] mb-3 text-[13px]">Category By</h4>
            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoryFilterVal}
              label="Category"
              onChange={handleChangeCatFilter}
            >
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="col w-[20%] ml-auto">
            <SearchBox />
          </div>
        </div>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="!bg-[#ccc]">
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img !w-[65px] !h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to={"/product/123"}>
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women{" "}
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>Women</TableCell>
                <TableCell>
                  <div className="flex gap-2 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500] ">
                      $58.00
                    </span>
                    <span className="price text-primary text-[15px] font-[600] ">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">243 </span>sale
                  </p>
                  <Progress value={10} type="success" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <TooltipMui title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img !w-[65px] !h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to={"/product/123"}>
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women{" "}
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>Women</TableCell>
                <TableCell>
                  <div className="flex gap-2 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500] ">
                      $58.00
                    </span>
                    <span className="price text-primary text-[15px] font-[600] ">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">243 </span>sale
                  </p>
                  <Progress value={10} type="success" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <TooltipMui title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img !w-[65px] !h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to={"/product/123"}>
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women{" "}
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>Women</TableCell>
                <TableCell>
                  <div className="flex gap-2 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500] ">
                      $58.00
                    </span>
                    <span className="price text-primary text-[15px] font-[600] ">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">243 </span>sale
                  </p>
                  <Progress value={10} type="success" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <TooltipMui title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img !w-[65px] !h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to={"/product/123"}>
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women{" "}
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>Women</TableCell>
                <TableCell>
                  <div className="flex gap-2 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500] ">
                      $58.00
                    </span>
                    <span className="price text-primary text-[15px] font-[600] ">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">243 </span>sale
                  </p>
                  <Progress value={10} type="success" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <TooltipMui title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img !w-[65px] !h-[65px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to={"/product/123"}>
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women{" "}
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>Women</TableCell>
                <TableCell>
                  <div className="flex gap-2 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500] ">
                      $58.00
                    </span>
                    <span className="price text-primary text-[15px] font-[600] ">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">243 </span>sale
                  </p>
                  <Progress value={10} type="success" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <TooltipMui title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <AiOutlineEdit className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="View Product Details" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <FaRegEye className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                    <TooltipMui title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !text-[#000] !rounded-full hover:!bg-[#f1f1f1]">
                        <GoTrash className="text-[20px]" />
                      </Button>
                    </TooltipMui>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={2}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default Products;
