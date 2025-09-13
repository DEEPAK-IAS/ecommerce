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
import { MyContext } from "../../App";

const columns = [
  { id: "image", label: "IMAGE", minWidth: 150 },
  { id: "catName", label: "CATEGORY NAME", minWidth: 250 },
  { id: "action", label: "ACTION", minWidth: 100 },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CategoryList = () => {
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
          Category List
          <span className="font-400 text-[14px]">(Material Ui Table)</span>
        </h2>
        <div className="col w-[30%] flex items-center gap-3 justify-end">
          <Button className="btn !bg-green-500 btn-sm">Export</Button>
          <Button
            className="btn-blue btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add New Category",
              })
            }
          >
            Add New Category
          </Button>
        </div>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="!bg-[#ccc]">
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[80px]">
                    <div className="img w-full rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://api.spicezgold.com/download/file_1734525239704_foot.png"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell width={60}>Fashion</TableCell>
                <TableCell width={100}>
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

export default CategoryList;
