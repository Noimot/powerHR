import React from 'react'


// content props is passed from layout
const Navbar = ( {content}) => {
    return (
        <section>
            <div>
                {content}
            </div>
        </section>

    )
}

export default Navbar;