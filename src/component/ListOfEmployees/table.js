import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import img from './../Dashboard-sidebar/b.jpg'
import './index.css'

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function createData(name, id, department, location, phone, email) {
  return { name, id, department, location, phone, email };
}

const employeeInfo = {
    name: 'noimot',
    age: 32
}

const rows = [
  createData(<div className='img-employee-list'><img src={img} alt='employee' /></div>, employeeInfo.name, employeeInfo.age, 24, 4.0),
];

export default function BasicTable() {
  const classes = useStyles();


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID #</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
