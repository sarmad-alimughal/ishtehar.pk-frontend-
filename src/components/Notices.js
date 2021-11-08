import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function Notices() {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notices/all-notices")
      .then((r) => {
        setNotices(r.data);
      })
      .catch(function (e) {
        console.error(e.message); // "oh, no!"
      });
  }, []);

  return (
    <div>
      <h3>Notices here</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">USERID</StyledTableCell>
              <StyledTableCell align="center">CATEGORYID</StyledTableCell>
              <StyledTableCell align="center">TITILE</StyledTableCell>
              <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
              <StyledTableCell align="center">DATE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices?.length > 0 &&
              notices.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.userID}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.categoryID}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.title}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Notices;
