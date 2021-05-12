import React from 'react'
import './index.css'

const PersonalDetailsComponent = () => {
    return (
        <section className='admin-data-container' id='personal-details'>
            <p>PERSONAL DETAILS</p>
            <div className='admin-data'>
                <div className='flex-display'>
                    <div>
                        <label>First name</label>
                        <option>Samantha</option>
                    </div>
                    <div>
                        <label>Middle name</label>
                        <option>Jane</option>
                    </div>
                    <div>
                        <label>Last name</label>
                        <option>Adeleke</option>
                    </div>

                </div>

                <div className='flex-display'>
                    <div>
                        <label>Date of birth</label>
                        <option>12 October, 1989</option>
                    </div>
                    <div>
                        <label>Nationality</label>
                        <option>Nigerian</option>
                    </div>
                    <div>
                        <label>Religion</label>
                        <option>Christian</option>
                    </div>
                    <div>
                        <label>Marital Status</label>
                        <option>Married</option>
                    </div>

                </div>

                <div className='flex-display'>
                    <div>
                        <label>Bank account number</label>
                        <option>0010012152</option>
                    </div>
                    <div>
                        <label>Name of bank</label>
                        <option>uba bank</option>
                    </div>
                    <div>
                        <label>Account name</label>
                        <option>Samantha Jane Adeleke</option>
                    </div>

                </div>

            </div>
        </section>


    )
}

export default PersonalDetailsComponent;