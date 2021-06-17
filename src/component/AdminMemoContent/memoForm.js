import React, { useState, useEffect } from 'react'
import Button from '../Button'
import './index.css'
import { memoApi } from '../../redux/api/memoApi'
// import DepartmentList from './departmentList'
import RadioButtonsGroup from './radioButton'
// import { EmployeeName } from './departmentList'
import { useDispatch, useSelector } from 'react-redux'
import allEmployee from '../../redux/action/employee'



const MemoForm = ({ modalHandler }) => {

    const [addMemo, setAddMemo] = useState({
        addressedTo: '',
        subject: '',
        memo: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddMemo({ ...addMemo, [name]: value })
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await memoApi({
            permission: optionValue,
            category: value,
            subject: addMemo.subject,
            memos: addMemo.memo
        })
        if (response.data.statusCode === 201) {
            modalHandler(false)
        }
    }

    const [value, setValue] = React.useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const [optionValue, setOptionValue] = useState('')

        const handleSelectChange = (e) => {
            setOptionValue(e.target.value)
        }

    const dispatch = useDispatch();
    const employeeDataStore = useSelector(({ allEmployeeReducer }) => allEmployeeReducer)
    console.log(employeeDataStore)

    useEffect(() => {
        dispatch(allEmployee())
    }, [dispatch])


    return (
        <section className='memo-container'>
            <div className='memo-modal-container'>
                <div className='memo-header'>
                    <p>New memo</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => modalHandler(false)}>x</p>
                </div>
                <form>
                    <RadioButtonsGroup value={value} handleChange={handleRadioChange} />

                    <section className='form-addressed-to'>
                        <div>

                            <label htmlFor='addressed-to'>TO:</label>
                            <div className='checkbox-flex'>
                                {(value) === 'department' ?
                                    // <select>
                                    //     <option>send to dept</option>
                                    // </select>: null}
                                    //  <DepartmentList />
                                    <div>
                                        <select value={optionValue} onChange={handleSelectChange} className='select-option-value'>
                                            {employeeDataStore.data.map(store => {
                                                return <option key={store.id} value={store.department}>{store.department}</option>
                                            })}
                                        </select>
                                    </div>

                                    : null}
                            </div>
                        </div>
                        {(value) === 'employee' ?

                            <div>
                                <select value={optionValue} onChange={handleSelectChange} className='select-option-value' style={{ width: '10rem', marginTop: '0.3rem' }}>
                                    {employeeDataStore.data.map(store => {
                                        return <option value={store.userid} key={store.id}>{store.employee_name}</option>
                                    })}
                                </select>
                            </div>
                            // <EmployeeName />
                            // <input type='text' id='addressed-to' name='addressedTo' value={addMemo.addressedTo} onChange={handleChange} />
                            : null}
                    </section>
                    <section className='memo-input'>
                        <label htmlFor='subject'>SUBJECT</label>
                        <input type='text' id='subject' name='subject' value={addMemo.subject} onChange={handleChange} />
                    </section>
                    <section className='memo-input'>
                        <label htmlFor='memo'>MEMO</label>
                        <input type='text' id='memo' name='memo' value={addMemo.memo} onChange={handleChange} />
                    </section>
                    <section style={{ margin: '1rem 0 0.2rem 4.2rem' }}>
                        <Button buttonClick='SEND MEMO' cssClass='secondary-button' onClick={handleClick} />
                    </section>

                </form>
            </div>
        </section>
    )
}

export default MemoForm;