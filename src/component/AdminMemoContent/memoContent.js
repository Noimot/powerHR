import React, { memo, useEffect } from 'react'
import Button from '../Button'
import Admin from '../../redux/action/adminName'
import { useDispatch, useSelector } from 'react-redux'


const MemoModalContent = ({ modalHandler, memo }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Admin())
    }, [dispatch])


    const adminStore = useSelector(({ adminReducer }) => adminReducer)
    const adminName = adminStore.data.name

    return (
        <section className='memo-container'>
            <div className='memo-modal-container'>
                <div className='memo-header'>
                    <p>New memo</p>
                    <p style={{ cursor: 'pointer' }} onClick={() => modalHandler(false)}>x</p>
                </div>

                <div className='memo-content-container' >

                    <div key={memo.id}>
                        <p>From: {adminName} </p>
                        <p>To:employee</p>
                        <p>Date: {memo.date}</p>
                        <p>Subject: {memo.subject}</p>
                        <div>
                            <p>MEMO</p>
                            <p>{memo.memos}</p>
                        </div>
                        <hr />
                    </div>

                </div>


                <section style={{ margin: '1rem 0 -2rem 5rem' }}>
                    <Button buttonClick='CLOSE' cssClass='secondary-button' />
                </section>
            </div>
        </section>
    )
}

export default MemoModalContent;