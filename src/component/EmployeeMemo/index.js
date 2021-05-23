import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import memoAction from '../../redux/action/memoAction'
import Admin from '../../redux/action/adminName'
import MemoContentModal from '../AdminMemoContent/memoContentModal'
import { DashboardLayout } from '../../layout/DashboardLayout'




const EmployeeMemoContent = () => {

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


    const [open, setOpen] = useState(false)

    const modalHandler = (state) => {
        setOpen(state)
        console.log('kazeem is troublesome')
    }



    return (
        <>
            <div className='memo-content' style={{ cursor: 'pointer' }} onClick={() => modalHandler(true)}>
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

            </div>
            <MemoContentModal open={open} modalHandler={modalHandler} />
        </>
    )
}



const EmployeeMemo = () => {
    return (
        <DashboardLayout>
            <EmployeeMemoContent />
        </DashboardLayout>
    )
}

export default EmployeeMemo;