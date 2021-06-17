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
                        <p><span className='font-color'>From: </span><span className='memo-content-span'>{adminName} </span></p>
                        <p><span className='font-color'>To: </span><span className='memo-content-span'>{memo.permission}</span></p>
                        <p><span className='font-color'>Date: </span>{memo.date.split('T')[0]}</p>
                        <p><span className='font-color'>Subject: </span><span style={{fontWeight: 'bold'}}>{memo.subject}</span></p>
                        <div>
                            <p><span className='font-color'>MEMO</span></p>
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