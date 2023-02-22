import React from "react";
import { Box } from "@mui/material";
import { AiOutlineFileExcel } from "react-icons/ai";
import { RiFilterOffLine } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0E7705",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, a, b, c, d) {
  return { name, calories, fat, carbs, protein, a, b, c, d };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3, 3, 3, "view"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 3, 3, 3, "view"),
  createData("Eclair", 262, 16.0, 24, 6.0, 3, 3, 3, "view"),
  createData("Cupcake", 305, 3.7, 67, 4.3, 3, 3, 3, "view"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 3, 3, 3, "view"),
  createData("Cupcake", 305, 3.7, 67, 4.3, 3, 3, 3, "view"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 3, 3, 3, "view"),
  createData("Cupcake", 305, 3.7, 67, 4.3, 3, 3, 3, "view"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 3, 3, 3, "view"),
  createData("Cupcake", 305, 3.7, 67, 4.3, 3, 3, 3, "view"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 3, 3, 3, "view"),
  createData("Cupcake", 305, 3.7, 67, 4.3, 3, 3, 3, "view"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 3, 3, 3, "view"),
];

const Registration = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="mt-3 w-full">
      <div className="flex-auto">
        <div className="p-3 pt-20 w-auto min-w-full pb-4 flex flex-col">
          <div className="p-6 shadow-xl rounded-md bg-white">
            <div className="mb-3 flex items-center justify-between p-3 pb-10 border-b border-slate-300">
              <span class="text-xl font-medium text-900 text-slate-800">
                Registration List
              </span>

              <div className="flex items-center space-x-3">
                <button
                  data-tooltip-target="XLS"
                  className=" p-[0.5rem] bg-[#689F38] text-white rounded-md"
                >
                  <span>
                    <AiOutlineFileExcel size={20} />
                  </span>
                </button>

                <button
                  data-tooltip-target="XLS"
                  className=" p-[0.5rem] bg-[#FBC02D] text-slate-800 rounded-md"
                >
                  <span>
                    <AiOutlineFileExcel size={20} />
                  </span>
                </button>

                <div></div>
              </div>
            </div>
            <div className="flex justify-between py-3 px-2">
              <button className="border border-green-500 flex items-center space-x-2 py-1 px-3 rounded-md text-lg text-green-600">
                <RiFilterOffLine />
                <p>Clear</p>
              </button>
              <form className="group relative">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:border-amber-600"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
                <input
                  className="focus:ring-2 focus:border-green-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-800 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 focus:ring-green-200 shadow-sm"
                  type="text"
                  aria-label="Filter"
                  placeholder="KeyWord Search"
                />
              </form>
            </div>

            <div className="py-5">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Certificate Number</StyledTableCell>
                      <StyledTableCell align="right">Name</StyledTableCell>
                      <StyledTableCell align="right">Gender</StyledTableCell>
                      <StyledTableCell align="right">
                        Birth Order
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Date Of Birth
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Birth Place
                      </StyledTableCell>{" "}
                      <StyledTableCell align="right">LGA Birth</StyledTableCell>{" "}
                      <StyledTableCell align="right">Status</StyledTableCell>{" "}
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? rows.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : rows
                    ).map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.protein}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.a}</StyledTableCell>{" "}
                        <StyledTableCell align="right">{row.b}</StyledTableCell>{" "}
                        <StyledTableCell align="right">{row.c}</StyledTableCell>{" "}
                        <StyledTableCell align="right">{row.d}</StyledTableCell>
                      </StyledTableRow>
                    ))}

                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>

                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: {
                            "aria-label": "rows per page",
                          },
                          native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
