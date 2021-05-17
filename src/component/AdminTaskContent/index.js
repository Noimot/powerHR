import React, { useEffect } from 'react'
import './index.css'
import getAllTasks from '../../redux/action/tasks'
import { useDispatch, useSelector } from 'react-redux'
import { allTasks } from '../../redux/api/taskApi'

const AdminTaskContent = () => {

    const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer }) => taskReducer)
    // let store =taskStore.getTasks.tasks;
console.log(taskStore)

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch])



    // useEffect(async() => {
    //     const response = await allTasks()
    //     console.log(response)
    // },[])

    return (
        <section className='task-content-container'>
            <div className='todo-flex'>
                <p>To-do</p>
                <p>Completed</p>
            </div>
            <hr />
            {taskStore.getTasks.tasks.map((task) => {
                return <div className='all-tasks' key={task.id}>{task.tasks}</div>
            })}

        </section>

    )
}

export default AdminTaskContent;