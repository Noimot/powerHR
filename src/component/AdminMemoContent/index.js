import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import memoAction from '../../redux/action/memoAction'
import Admin from '../../redux/action/adminName'
import MemoContentModal from './memoContentModal'
// import DirectionSnackbar from './notification'
import spinner from '../Dashboard-right-sidebar/spinner.gif'

const MemoContent = () => {

    const [singleMemo, setSingleMemo] = useState({

    });


    const dispatch = useDispatch();
    const memoStore = useSelector(({ memoReducer }) => memoReducer)
    console.log(memoStore)

    const [memoState, setMemoState] = useState(memoStore)
    // console.log(memoState)

    const adminStore = useSelector(({ adminReducer }) => adminReducer)
    const adminName = adminStore.data.name

    useEffect(() => {
        dispatch(memoAction())
    }, [dispatch])


    useEffect(() => {
        setMemoState(memoStore)
        // console.log(memoStore)
    }, [memoStore])

    useEffect(() => {
        dispatch(Admin())
    }, [dispatch])

    const [open, setOpen] = useState(false)


    const modalHandler = (state) => {
        setOpen(state)
    }



    return (
        <>
            <div className='memo-content' style={{ cursor: 'pointer' }}>
                <div className='memo-content-container' >

                {memoStore.loading && <div className='loading-spinner'><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}

                    {memoState.allMemo.length > 0 && memoState.allMemo.map((memoList) => {
                        return <div key={memoList.id} className='memo-spacing' onClick={() => {
                            modalHandler(true)
                            setSingleMemo(memoList)
                        }}>
                            <p style={{color: '#D4293D', fontWeight:'bold'}}>CLICK TO VIEW MEMO</p>
                            {/* <DirectionSnackbar /> */}
                            <p><span className='font-color'>From: </span><span style={{color:'#2C4770'}}>{adminName}</span> </p>
                            <p><span className='font-color'>To: </span>{memoList.permission}</p>
                            <p><span className='font-color'>Date: </span>{memoList.date.split('T')[0]}</p>
                            <p><span className='font-color'>Subject: </span><span style={{fontWeight: 'bold'}}>{memoList.subject}</span></p>
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