import React, { useEffect, useState } from 'react'
import './index.css'
import getAllTasks from '../../redux/action/tasks'
import { useDispatch, useSelector } from 'react-redux'


const Todo = () => {

    const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer }) => taskReducer)

    return (
        <>
        {taskStore.getTasks.map((task) => {
            return <div className='all-tasks' key={task.id}>{task.tasks}</div>
        })}
        </>
    )
}

const Completed = () => {
    return (
        <div>Completed</div>
    )
}


const AdminTaskContent = () => {

    const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer }) => taskReducer)

    const [tab, setTab] = useState(0)

    const handleDisplay = () => {
        switch (tab) {
            case 0:
                return <Todo />
            case 1:
                return <Completed />
            default:
                return <Todo />;
        }
    }

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch])


    return (
        <section className='task-content-container'>
            <div className='todo-flex' style={{ cursor:'pointer'}}>
                <p onClick={() => setTab(0) }>To-do</p>
                <p onClick={() => setTab(1) }>Completed</p>
            </div>
            <hr /> 

            { handleDisplay()}

        </section>

    )
}

export default AdminTaskContent;