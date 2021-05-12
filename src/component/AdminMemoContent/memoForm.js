import React from 'react'
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import Button from '../Button'
import './index.css'



const MemoForm = ({ modalHandler }) => {
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
                            </div>
                        </div>
                        <input type='text' id='addressed-to' name='addressed-to' value='' onChange='{mmdmmd}' />
                    </section>
                    <section className='memo-input'>
                        <label htmlFor='subject'>SUBJECT</label>
                        <input type='text' id='subject' name='subject' value='' onChange='{dndnnd}' />
                    </section>
                    <section className='memo-input'>
                        <label htmlFor='memo'>MEMO</label>
                        <input type='text' id='memo' name='memo' value='' onChange='{ddmmmm}' />
                    </section>
                    <section>
                        <Button buttonClick='SEND MEMO' />
                    </section>

                </form>
            </div>
        </section>
    )
}

export default MemoForm;