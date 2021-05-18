import React from 'react'
import Button from '../Button'



const MemoContent = ({ modalHandler }) => {
    return (
        <section className='memo-container'>
            <div className='memo-modal-container'>
                <div className='memo-header'>
                    <p>New memo</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => modalHandler(false)}>x</p>
                </div>

                <section style={{ margin: '1rem 0 -2rem 5rem' }}>
                    <Button buttonClick='SEND MEMO' cssClass='secondary-button' />
                </section>
            </div>
        </section>
    )
}

export default MemoContent;