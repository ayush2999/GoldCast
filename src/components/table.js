import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

function RenderTable({filterData}){

  return(
    <TableContainer component={Paper}>
    <Table
    style={{
        width: 600,
    }}
    size="small"
    >
    <TableHead>
        <TableRow>
        <TableCell>ID</TableCell>    
        <TableCell>First Name</TableCell>
        <TableCell align="right">
            Last Name
        </TableCell>
        <TableCell align="right">
            Company
        </TableCell>
        <TableCell align="right">
            Country
        </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {   filterData.map((row) => (
        <TableRow key={row.first}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.first}
            </TableCell>
            <TableCell align="right">
                {row.last}
            </TableCell>
            <TableCell align="right">
                {row.company}
            </TableCell>
            <TableCell align="right">
                {row.country}
            </TableCell>
        </TableRow>
        ))}
    </TableBody>
    </Table>
</TableContainer>
  )
}

export default RenderTable;