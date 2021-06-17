import React, { useState, useEffect } from 'react'
import './index.css'
import img from './../Dashboard-sidebar/b.jpg'
import EmployeeModal from './employee_modal'
import BasicTable from './table'
import { useDispatch, useSelector } from 'react-redux'
import allEmployee from '../../redux/action/employee'



const ListOfEmployees = () => {

    const dispatch = useDispatch();
    const employeeDataStore = useSelector(({ allEmployeeReducer }) => allEmployeeReducer)

    const [data, setData] = useState([...employeeDataStore.data])

console.log(employeeDataStore)
    const getDepartment = (department) => {
        console.log(department)
        console.log(data)
            
        return employeeDataStore.data.filter((dataStore) => dataStore.department.toLowerCase() === department.toLowerCase())
    
    }
    const runFilters = ()=>{
        console.log(searchInput)
       
        if(searchInput.department.trim() && searchInput.location.trim() || searchInput.employeeName.trim()){
            return employeeDataStore.data.filter((dataStore) => 
            dataStore.department.toLowerCase() === searchInput.department.toLowerCase() &&
            dataStore.location.toLowerCase() === searchInput.location.toLowerCase() ||
            dataStore.employee_name.toLowerCase() === searchInput.employeeName.toLowerCase()
            )
        }
        if(searchInput.department.trim() && !searchInput.location.trim()){
            return employeeDataStore.data.filter((dataStore) => 
            dataStore.department.toLowerCase() === searchInput.department.toLowerCase()
            )
        }
        if(!searchInput.department.trim() && searchInput.location.trim()){
            return employeeDataStore.data.filter((dataStore) => 
            dataStore.location.toLowerCase() === searchInput.location.toLowerCase()
            )
        }
    }
   


    useEffect(() => {
        dispatch(allEmployee())
    }, [dispatch])

    useEffect(() => {
        setData(employeeDataStore.data)
    }, [employeeDataStore])


    const [open, setOpen] = useState(false);

    const modalHandler = (state) => {
        setOpen(state)
    }

    const [searchInput, setSearchInput] = useState({
        department: '',
        location: '',
        employeeName: ''
    })


    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setSearchInput({ ...searchInput, [name]: value })
    //     setData(employeeDataStore.data)
    // }



    const handleChange = (e) => {
               setData(employeeDataStore.data)
        const name = e.target.name;
        const value = e.target.value;
        setSearchInput({ ...searchInput, [name]: value })
    }


   

    const handleKeypress = (e) => {
    if (e.key === 'Enter') {
    // if (!searchInput.department.trim()) return;
    console.log('run',searchInput.department)
    //    const filteredData = getDepartment(searchInput.department.trim());
       const filteredData = runFilters();
       console.log(filteredData)
        setData([...filteredData])
    }
    }


    return (

        <section className='employee-list-container'>
            <div className='employee-location'>
            <p>FILTER BY:</p>
                <form>
                   
                    <div className='input-flex'>
                        <label htmlFor='department'>Department</label>
                        <input type='text' name='department' id='department' value={searchInput.department} onChange={handleChange} onKeyPress={(e) => handleKeypress(e)} />
                    </div>
                    <div className='input-flex'>
                        <label htmlFor='location'>Location</label>
                        <input type='text' name='location' id='location' value={searchInput.location} onChange={handleChange} onKeyPress={(e) => handleKeypress(e)} />
                    </div>

                </form>
                <p>Total numbers of Employees: {employeeDataStore.data.length}</p>
            </div>
            <hr />

            <div className='add-employee'>
                <p style={{ color: '#246C60' }} onClick={() => modalHandler(true)} style={{ cursor: 'pointer' }}><span> + </span>add new Employee</p>
                <div>
                    <input type='text' name='employeeName' value={searchInput.employeeName} onChange={handleChange} placeholder='Search name' onKeyPress={(e) => handleKeypress(e)} />
                    <span></span>
                </div>
            </div>



            <EmployeeModal open={open} modalHandler={modalHandler} />


            <BasicTable employeeDataStore={data.length > 0? data: []} />
        </section>
    )
}

export default ListOfEmployees;



