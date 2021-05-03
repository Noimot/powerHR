import React from 'react'
import './index.css'

const Button = ({buttonClick, onClick, cssClass='primary-button'}) => {
    return (
        <div className='button-component'>
            <button className={cssClass} onClick={onClick}>{buttonClick}</button>
        </div>
        
    )
}

export default Button;
