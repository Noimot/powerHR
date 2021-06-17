import React, { useEffect, useState } from 'react';
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
import spinner from '../Dashboard-right-sidebar/spinner.gif'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function createData(name, id, department, location, phone, email) {
  return { name, id, department, location, phone, email };
}

export default function BasicTable({ employeeDataStore }) {

  const classes = useStyles();
  const [data,setData] = useState([...employeeDataStore])
// console.log(employeeDataStore)
useEffect(()=>{setData(employeeDataStore)},[employeeDataStore])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">ID #</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* {data.loading && <div className='loading-spinner'><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>} */}
          {data.length > 0 && data?.map((employeeData,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" style={{display:'flex', alignItems: 'center'}}>
              <div className='img-employee-list'><img src={img} alt='employee' /></div> &nbsp; &nbsp; {employeeData.employee_name}
              </TableCell>
              <TableCell align="center">{employeeData.id}</TableCell>
              <TableCell align="center">{employeeData.department}</TableCell>
              <TableCell align="center">{employeeData.location}</TableCell>
              <TableCell align="center">{employeeData.phone}</TableCell>
              <TableCell align="center">{employeeData.company_email}</TableCell>
              <TableCell align="center"><Link to={`/profile/${employeeData.userid}`}>view</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
