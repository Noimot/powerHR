import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import memoAction from '../../redux/action/memoAction'
import Admin from '../../redux/action/adminName'
import MemoModal from './memoModal'



const MemoContent = () => {


    const dispatch = useDispatch();
    const memoStore = useSelector(({ memoReducer }) => memoReducer)
    console.log(memoStore)

    const adminStore = useSelector(({ adminReducer }) => adminReducer)
    const adminName = adminStore.data.name

    useEffect(() => {
        dispatch(memoAction())
    }, [dispatch])


    useEffect(() => {
        dispatch(Admin())
    }, [dispatch])


// const [open, setOpen] = useState(false)

// const modalHandler = (state) => {
//     setOpen(state)
// }



    return (
        <div className='memo-content' style={{ cursor: 'pointer'}}>
            <div className='memo-content-container' >

                {memoStore.allMemo.map((memoList) => {
                    return <div key={memoList.id} className='memo-spacing'>
                        <p>From: {adminName} </p>
                        <p>To:employee</p>
                        <p>Date: {memoList.date}</p>
                        <p>Subject: {memoList.subject}</p>
                        <hr />
                    </div>
                })}

            </div>
            {/* <MemoModal open={open} modalHandler={modalHandler} /> */}
        </div>
    )
}

export default MemoContent;