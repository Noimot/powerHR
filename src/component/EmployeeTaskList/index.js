import React, { useEffect, useState } from 'react'
import getAllTasks from '../../redux/action/tasks'
import { useDispatch, useSelector } from 'react-redux'
import { DashboardLayout } from '../../layout/DashboardLayout'
import spinner from '../Dashboard-right-sidebar/spinner.gif'
import updateTaskStatus from '../../redux/action/updateTaskStatus'

const Todo = () => {

    const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer }) => taskReducer)
    const updateTaskStore = useSelector(({ updateTaskStatusReducer }) => updateTaskStatusReducer)
    console.log(updateTaskStore)
    console.log(taskStore)

    useEffect(() => {
        dispatch(getAllTasks())
    }, [])

    
    const handleChange = (e) => {
        const isChecked = e.target.checked;
        console.log(isChecked)
        console.log(parseInt(e.target.value, 10))
       console.log(typeof(parseInt(e.target.value, 10))) 

       if (isChecked) {
        dispatch(updateTaskStatus({id: parseInt(e.target.value, 10)}))
    }
    }
       
    

    return (
        <>
            {taskStore.loading && <div className='loading-spinner'><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
            {taskStore.getTasks.filter((filteredTask) => filteredTask.iscompleted === false)
            .map((task) =>
                <div className='all-tasks' style={{ display: 'flex', alignItems: 'center' }}>
                    <input key={task.id} name='id' value={task.id} type='checkbox' onChange={(e) => handleChange(e)} />
                    <div style={{ marginLeft: '0.6rem' }}>{task.tasks}</div>
                </div>
            )}
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


export const EmployeeTaskContent = () => {

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


// employee task list

const EmployeeTaskList = ({taskStore}) => {
    console.log(taskStore)
    return (
        <DashboardLayout>
            <EmployeeTaskContent />
        </DashboardLayout>


    )
}


export default EmployeeTaskList;





