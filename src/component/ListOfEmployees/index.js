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

    const [employeeStore, setEmployeeStore] = useState(employeeDataStore.data ? employeeDataStore.data : [])


    const getDepartment = (department) => {
        return employeeStore.filter(dataStore => dataStore.department.toLowerCase() === department.toLowerCase())
    }
    const getLocation = (location) => {
        return employeeStore.filter(dataStore => dataStore.location.toLowerCase() === location.toLowerCase())
    }

    const getName = (name) => {
        return employeeStore.filter(dataStore => dataStore.employee_name.toLowerCase() === name.toLowerCase())
    }

    useEffect(() => {
        dispatch(allEmployee())
    }, [dispatch])

    useEffect(() => {
        setEmployeeStore(employeeDataStore.data)
    }, [employeeDataStore.data])


    const [open, setOpen] = useState(false);

    const modalHandler = (state) => {
        setOpen(state)
    }

    const [searchInput, setSearchInput] = useState({
        department: '',
        location: '',
        employeeName: ''
    })


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearchInput({ ...searchInput, [name]: value })
        setEmployeeStore(employeeDataStore.data)
    }

    // const getAllEmployeeData = () => {
    //     switch (getDepartment) {
    //         case getDepartment:
    //             return <GetAllDepartment />
    //         case getLocation:
    //             return <GetAllLocation />
    //         case getName:
    //             return <GetAllName />
    //         default:
    //             return <GetAllDepartment />
    //     }
    // }

    // const GetAllDepartment = () => {
    //     return (
    //         <>
    //             const departmentValue = getDepartment(searchInput.department.trim())
    //             setEmployeeStore([...departmentValue])
    //         </>
    //     )

    // }

    // const GetAllLocation = () => {
    //     return (
    //         <>
    //             const locationValue = getLocation(searchInput.location.trim())
    //             setEmployeeStore([...locationValue])
    //         </>
    //     )

    // }


    // const GetAllName = () => {
    //     return (
    //         <div>
    //            { setEmployeeStore([...getName(searchInput.employeeName.trim())])}
    //         </div>
    //     )

    // }

    // const handleKeypress = (e) => {
    //     if (e.key === 'Enter') {
    //         getAllEmployeeData()
    //     }
    // }


    const handleKeypress = (e) => {
    if (e.key === 'Enter') {
        const departmentValue = getDepartment(searchInput.department.trim())
        setEmployeeStore([...departmentValue])
    }
    if (e.key === 'Enter') {
        const locationValue = getLocation(searchInput.location.trim())
        setEmployeeStore([...locationValue])
    }
    if (e.key === 'Enter') {
        const nameValue = getName(searchInput.employeeName.trim())
        setEmployeeStore([...nameValue])
    }
    }


    return (

        <section className='employee-list-container'>
            <div className='employee-location'>

                <form>
                    <p>FILTERED BY:</p>
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

            <BasicTable employeeDataStore={employeeStore} />
        </section>
    )
}

export default ListOfEmployees;



