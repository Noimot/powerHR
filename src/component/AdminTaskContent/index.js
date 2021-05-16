import React, { useEffect } from 'react'
import './index.css'
import getAllTasks from '../../redux/action/tasks'
import { useDispatch, useSelector } from 'react-redux'

const AdminTaskContent = () => {

    const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer}) => taskReducer)
    console.log(taskStore)

    useEffect(() => {
        dispatch(getAllTasks())
    },[dispatch])


    return (
        <section class='task-content-container'>
            <div className='todo-flex'>
            <p>To-do</p>
            <p>Completed</p>
        </div>
        <hr />

        </section>
        
    )
}

export default AdminTaskContent;