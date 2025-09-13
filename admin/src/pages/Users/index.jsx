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

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const columns = [
  { id: "userImg", label: "USER IMAGE", minWidth: 80 },
  {
    id: "userName",
    label: "USER NAME",
    minWidth: 100,
  },
  {
    id: "userEmail",
    label: "USER EMAIL",
    minWidth: 150,
  },
  {
    id: "userPh",
    label: "USER PHONE NO",
    minWidth: 130,
  },
  {
    id: "createdDate",
    label: "CREATED DATE",
    minWidth: 130,
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Users = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const context = useContext(MyContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5 justify-between mb-5">
          <div className="col w-[40%]">
            <h2 className="text-[18px] font-bold">
              Users List
              <span className="font-400 text-[14px]">(Material Ui Table)</span>
            </h2>
          </div>

          <div className="col w-[40%] ml-auto">
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
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img !w-[45px] !h-[45px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell>kishore </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    kishore@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdLocalPhone className="text-[20px]" />
                    +91 9876543210
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[20px]" />
                    10-12-2024
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img !w-[45px] !h-[45px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell>kishore </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    kishore@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdLocalPhone className="text-[20px]" />
                    +91 9876543210
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[20px]" />
                    10-12-2024
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img !w-[45px] !h-[45px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell>kishore </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    kishore@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdLocalPhone className="text-[20px]" />
                    +91 9876543210
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[20px]" />
                    10-12-2024
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4 w-[70px]">
                    <div className="img !w-[45px] !h-[45px] rounded-md overflow-hidden group">
                      <Link to={"/product/123"}>
                        <img
                          src="https://mui.com/static/images/avatar/1.jpg"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell>kishore </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    kishore@gmail.com
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <MdLocalPhone className="text-[20px]" />
                    +91 9876543210
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[20px]" />
                    10-12-2024
                  </span>
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

export default Users;
