import React, { useEffect, useState } from 'react'
import './index.css'
import getAllTasks from '../../redux/action/tasks'
import { useDispatch, useSelector } from 'react-redux'
import spinner from '../Dashboard-right-sidebar/spinner.gif'
import NestedList from './employeesName'


const Todo = () => {

    const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer }) => taskReducer)

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch])

    return (
        <>
        <NestedList />
            {taskStore.loading && <div className='loading-spinner'><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
            {taskStore.getTasks.filter((filteredTask) => filteredTask.iscompleted === false)
            .map((task) => {
                return <div className='all-tasks' key={task.id}>{task.tasks}</div>
            })}
        </>
    )
}


const Completed = () => {
    
         const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer }) => taskReducer)


    useEffect(() => {
        dispatch(getAllTasks())
    }, [])

    return (
        <>
        {taskStore.loading && <div className='loading-spinner'><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
        {taskStore.getTasks.filter((filteredTask) => filteredTask.iscompleted === true)
        .map((task) =>
            <div className='all-tasks' style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginLeft: '0.6rem' }}>{task.tasks}</div>
            </div>
        )}
    </>
    
    )
}


const AdminTaskContent = () => {


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




    return (
        <section className='task-content-container'>
            <div className='todo-flex' style={{ cursor: 'pointer' }}>
                <div className={tab === 0 ? 'p-border' : null}> <p onClick={() => setTab(0)}>To-do</p></div>
                <div className={tab === 1 ? 'p-border' : null}><p onClick={() => setTab(1)}>Completed</p></div>
            </div>
            <hr />

            { handleDisplay()}

        </section>

    )
}

export default AdminTaskContent;


