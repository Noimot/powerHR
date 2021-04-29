import React from 'react'
import './index.css'
import Button from '../Button'
import { Link } from 'react-router-dom'
import img from './../Dashboard-sidebar/b.jpg'

const AdminLeaveContent = () => {
    return (
        <section className='leave-content'>
            <div className='leave-days'>
                <div>
                    <p>Number of off days allowed</p>
                    <h3 style={{ color: '#152D54' }}>46 days</h3>
                </div>
                <div>
                    <p>Off days taken</p>
                    <h3 style={{ color: '#D4293D' }}>26 days</h3>
                </div>
                <div>
                    <p>Off days remaining</p>
                    <h3 style={{ color: '#246C60' }}>20 days</h3>
                </div>
            </div>

            <Button buttonClick='REQUEST FOR DAYS OFF' cssClass='secondary-button' />

            <div className='leave-request'>
                <p style={{ color: '#2C4770' }}>Pending requests</p>
                <Link to='#'><p>Read our paid leave policy</p></Link>
            </div>

            <section className='leave-status-container'>
                <div className='leave-status'>
                    <p>Pending</p>
                    <p>Approved</p>
                    <p>Denied</p>
                </div>

                <div className='leave-status-info'>
                    <div className='leave-info'>
                        <img src={img} alt='admin' />
                        <div className='leave-date'>
                            <p style={{ color:'#3D3D3D' }}>Samantha Adeleke</p> <br />
                            <p style={{ color:'#2C4770' }}><span style={{ color:'#3D3D3D' }}>Date:</span>12 June 2021 - 22 June 2021</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ color:'#5E5E5E' }}>Researcher, Research Department</p><br/>
                        <p style={{ color:'#D4293D', marginLeft:'8rem' }}>Deny &nbsp; &nbsp;<span style={{ color:'#246C60' }}>Approve</span></p>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default AdminLeaveContent;