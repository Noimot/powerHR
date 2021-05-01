import React from 'react'
import './index.css'


const ContactDetailsComponent = () => {


    return (
        <section className='admin-data-container'>
            <p>CONTACT DETAILS</p>
            <div className='admin-data'>
                <div className='flex-display'>
                    <div>
                        <label>Mobile number</label>
                        <option>08162455235</option>
                    </div>
                    <div>
                        <label>Phone number (work)</label>
                        <option>07063125412</option>
                    </div>

                </div>

                <div className='flex-display'>
                    <div>
                        <label>Personal email</label>
                        <option>samantha@gmail.com</option>
                    </div>
                    <div>
                        <label>Work email</label>
                        <option>samantha@powerHR.com</option>
                    </div>

                </div>

                <div className='flex-display'>
                    <div>
                        <label>Bank account number</label>
                        <option>Admiralty road, Lekki, Lagos State</option>
                    </div>
                </div>

                <section className='emergency-data'>
                    <p>Emergency</p>

                    <div className='flex-display'>
                        <div>
                            <label>Full name</label>
                            <option>Samantha Jane Adeleke</option>
                        </div>
                    </div>



                    <div className='flex-display'>
                        <div>
                            <label>Mobile number</label>
                            <option>09021365445</option>
                        </div>
                        <div>
                            <label>Phone number (work)</label>
                            <option>08052315632</option>
                        </div>
                    </div>

                    <div className='flex-display'>
                        <div>
                            <label>Personal email</label>
                            <option>samantha@gmail.com</option>
                        </div>
                        <div>
                            <label>Work email</label>
                            <option>samantha@powerHR.com</option>
                        </div>
                    </div>
                    <div className='flex-display'>
                        <div>
                            <label>Address</label>
                            <option>Admiralty road, Lekki, Lagos State</option>
                        </div>
                    </div>



                </section>


            </div>
        </section >


    )
}

export default ContactDetailsComponent;