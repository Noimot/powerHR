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

                <div className='memo-content-modal'>

                    <div key={memo.id}>
                        <p>From: {adminName} </p>
                        <p>To:employee</p>
                        <p>Date: {memo.date}</p>
                        <p>Subject: {memo.subject}</p>
                        <div>
                            <p>MEMO</p>
                            <p>{memo.memos}</p>
                        </div>
                    </div>

                </div>


                <section style={{cursor: 'pointer'}}>
                    <Button buttonClick='CLOSE' cssClass='neutral-button' onClick={() => modalHandler(false)} />
                </section>
            </div>
        </section>
    )
}

export default MemoModalContent;