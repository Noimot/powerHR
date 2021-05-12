import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import React, { useState } from 'react'


const JobStatusComponent = () => {

    // const [employeeStatus, setEmployeeStatus] = useState({
    //     Active: false,
    //     Dismissed: false
    // });

    // const handleToggle = ({ target }) => {
    //     setEmployeeStatus(s => ({ ...s, [target.name]: !s[target.name] }));
    // }
       
// css style from PersonalDetailsComponent

    return (
        <section className='admin-data-container' id='job-status'>
            <p>JOB STATUS</p>
            <div className='admin-data'>
                <div className='flex-display'>
                    <div>
                        <label>Job role</label>
                        <input type='text' name='job role' value='' placeholder='Researcher' />
                    </div>
                    <div>
                        <label>Department</label>
                        <input type='text' name='department' value='' placeholder='Research' />
                    </div>
                    <div>
                        <label>Work location</label>
                        <input type='text' name='location' value='' placeholder='Abuja' />
                    </div>

                </div>

                <div className='flex-display'>
                    <div>
                        <label>Start date</label>
                        <input type='text' name='job role' value='' placeholder='15th October, 1989' />
                    </div>
                    <div>
                        <label>End date (if applicable) </label>
                        <input type='text' name='department' value='' placeholder='15th October, 1990' />
                    </div>

                </div>

                <div className='flex-display'>
                    <div>
                        <label>Employment status</label>
                        
                        <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={state.checkedA}
                              // onChange={handleChange}
                              name="checkedA"
                            />
                          }
                          label="Verve"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={state.checkedA}
                              // onChange={handleChange}
                              name="checkedA"
                            />
                          }
                          label="Master Card"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={state.checkedA}
                              // onChange={handleChange}
                              name="checkedA"
                            />
                          }
                          label="Visa Card"
                        />
                      </FormGroup>
                        

                    </div>
                   

                </div>

            </div>

        </section>
    )
}

export default JobStatusComponent;




