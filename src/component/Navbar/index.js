import React from 'react'
import './index.css'

const Navbar = ( {title, addTitle}) => {
    return (
        <section>
            <div className='admin-navbar'>
                <p>{title}</p>
                <p>{addTitle}</p>
            </div>
        </section>

    )
}

export default Navbar;