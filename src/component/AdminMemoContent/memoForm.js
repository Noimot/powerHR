import React, { useState } from 'react'
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import Button from '../Button'
import './index.css'
import { memoApi } from '../../redux/api/memoApi'
// import DepartmentList from './departmentList'



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

    const handleClick = async(e) => {
        e.preventDefault();
        const response = await memoApi({
            subject: addMemo.subject,
            memos: addMemo.memo
        })
        if (response.data.statusCode === 201){
            modalHandler(false)
        }
    }

    return (
        <section className='memo-container'>
            <div className='memo-modal-container'>
                <div className='memo-header'>
                    <p>New memo</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => modalHandler(false)}>x</p>
                </div>
                <form>
                    <section className='form-addressed-to'>
                        <div>
                            <label htmlFor='addressed-to'>TO:</label>
                            <div className='checkbox-flex'>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                // checked={state.checkedA}
                                                // onChange={handleChange}
                                                name="checkedA"
                                            />
                                        }
                                        label="send to all staff"
                                    />
                                </FormGroup>
                                <select>
                                    <option>send to dept</option>
                                </select>
                                {/* <DepartmentList /> */}
                            </div>
                        </div>
                        <input type='text' id='addressed-to' name='addressedTo' value={addMemo.addressedTo} onChange={handleChange} />
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