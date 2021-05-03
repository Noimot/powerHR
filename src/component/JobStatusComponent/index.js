import React, { useState } from 'react'


const JobStatusComponent = () => {

    const [employeeStatus, setEmployeeStatus] = useState({
        Active: false,
        Dismissed: false
    });

    const handleToggle = ({ target }) => {
        setEmployeeStatus(s => ({ ...s, [target.name]: !s[target.name] }));
    }
       
// css style from PersonalDetailsComponent

    return (
        <section className='admin-data-container'>
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
                        
                            {Object.keys(employeeStatus).map(key => (
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    key={key}
                                    name={key}
                                    checked={employeeStatus[key]}
                                />
                            ))}
                        

                    </div>
                   

                </div>

            </div>

        </section>
    )
}

export default JobStatusComponent;




