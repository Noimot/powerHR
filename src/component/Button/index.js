import React from 'react'
import './index.css'

const Button = ({buttonClick, cssClass='primary-button'}) => {
    return (
        <div className='button-component'>
            <button className={cssClass}>{buttonClick}</button>
        </div>
        
    )
}

export default Button;
