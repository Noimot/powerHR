import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import memoAction from '../../redux/action/memoAction'
import Admin from '../../redux/action/adminName'
import MemoContentModal from './memoContentModal'
// import MemoModalContent from './memoContent'



const MemoContent = () => {

    const [singleMemo, setSingleMemo] = useState({

    });


    const dispatch = useDispatch();
    const memoStore = useSelector(({ memoReducer }) => memoReducer)
    // console.log(memoStore)

    const [memoState, setMemoState] = useState(memoStore)
    console.log(memoState)

    const adminStore = useSelector(({ adminReducer }) => adminReducer)
    const adminName = adminStore.data.name

    useEffect(() => {
        dispatch(memoAction())
    }, [dispatch])


    useEffect(() => {
        setMemoState(memoStore)
        console.log(memoStore)
    }, [memoStore])

    useEffect(() => {
        dispatch(Admin())
    }, [dispatch])


    // const [open, setOpen] = useState({
    //     state: false,
    //     From: '',
    //     To: '',
    //     Date: '',
    //     Subject: '',
    //     Memo: ''
    // })


    const [open, setOpen] = useState(false)

    // const modalHandler = (memoItem) => {
    //     setOpen({
    //         state: true,
    //         From: { adminName },
    //         To: 'employee',
    //         Date: memoItem.date,
    //         Subject: memoItem.subject,
    //         memo: memoItem.memos
    //     })
    // }


    const modalHandler = (state) => {
        setOpen(state)
    }



    return (
        <>
            <div className='memo-content' style={{ cursor: 'pointer' }}>
                <div className='memo-content-container' >

                    {memoState.allMemo.map((memoList) => {
                        return <div key={memoList.id} className='memo-spacing' onClick={() =>{
                             modalHandler(true)
                         setSingleMemo(memoList)
                         }}>

                            {/* return <div key={memoList.id} className='memo-spacing' onClick={() => modalHandler(memoList)}> */}
                            <p>From: {adminName} </p>
                            <p>To:employee</p>
                            <p>Date: {memoList.date}</p>
                            <p>Subject: {memoList.subject}</p>
                            <hr />
                        </div>
                    })}

                </div>

            </div>
            <MemoContentModal memo={singleMemo} open={open} modalHandler={modalHandler} />
        </>
    )
}

export default MemoContent;