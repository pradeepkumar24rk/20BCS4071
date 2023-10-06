import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell>trainName</TableCell>
            <TableCell align="right">trainNumber</TableCell>
            <TableCell align="right">departureTime</TableCell>
            <TableCell align="right">seatsAvailable</TableCell>
            <TableCell align="right">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="right">{row.trainName}</TableCell>
              <TableCell align="right">{row.trainNumber}</TableCell>
              <TableCell align="right">{(row.departureTime).Hours+":"+(row.departureTime).Minutes+":"+(row.departureTime).Seconds}</TableCell>
              <TableCell align="right">{"Sleeper:"+(row.seatsAvailable)["sleeper"]+", AC:"+(row.seatsAvailable)["AC"]}</TableCell>
              <TableCell align="right">{"Sleeper:"+(row.price)["sleeper"]+", AC:"+(row.price)["AC"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}