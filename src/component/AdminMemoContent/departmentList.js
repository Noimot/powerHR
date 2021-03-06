import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import allEmployee from '../../redux/action/employee'


export default function DepartmentList() {

    const [optionValue, setOptionValue] = useState('')

    const handleChange = (e) => {
        setOptionValue(e.target.value)
    }



    const dispatch = useDispatch();
    const employeeDataStore = useSelector(({ allEmployeeReducer }) => allEmployeeReducer)
    console.log(employeeDataStore)

    useEffect(() => {
        dispatch(allEmployee())
    }, [dispatch])


    return (

        <div>
            <select value={optionValue} onChange={handleChange} className='select-option-value'>
                {employeeDataStore.data.map(store => {
                    return <option value={store.department}>{store.department}</option>
                })}
            </select>
        </div>

    )
}



export const EmployeeName = () => {

    const [optionValue, setOptionValue] = useState('')

    const handleChange = (e) => {
        setOptionValue(e.target.value)
    }



    const dispatch = useDispatch();
    const employeeDataStore = useSelector(({ allEmployeeReducer }) => allEmployeeReducer)
    console.log(employeeDataStore)

    useEffect(() => {
        dispatch(allEmployee())
    }, [dispatch])

    return (
            <div>
            <select value={optionValue} onChange={handleChange} className='select-option-value' style={{width: '10rem', marginTop:'0.3rem'}}>
                {employeeDataStore.data.map(store => {
                    return <option value={store.userid}>{store.employee_name}</option>
                })}
            </select>
        </div>
    )
}


