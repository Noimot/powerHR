import React, { useEffect, useState } from 'react'
import getAllTasks from '../../redux/action/tasks'
import { useDispatch, useSelector } from 'react-redux'
import { DashboardLayout } from '../../layout/DashboardLayout'
import Checkbox from '@material-ui/core/Checkbox';


const Todo = () => {

    const dispatch = useDispatch();
    const taskStore = useSelector(({ taskReducer }) => taskReducer)

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch])

    const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

    return (
        <>
        {taskStore.getTasks.map((task) =>    
            <div className='all-tasks' style={{display: 'flex', alignItems: 'center'}}>
            <input key={task.id} value={JSON.stringify(task)} type='checkbox' onChange={(e)=>handleChange(e)} />
            <div style={{marginLeft: '0.6rem'}}>{task.tasks}</div>
            </div>
        )}
        </>
    )
}

const Completed = () => {
    return (
        <div>Completed</div>
    )
}


export const EmployeeTaskContent = () => {

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

    


    return (
        <section className='task-content-container'>
            <div className='todo-flex' style={{ cursor:'pointer'}}>
               <div className={tab === 0 ? 'p-border' : null}> <p onClick={() => setTab(0) }>To-do</p></div>
               <div className={tab === 1 ? 'p-border' : null}><p onClick={() => setTab(1) }>Completed</p></div>
            </div>
            <hr /> 

            { handleDisplay()}

        </section>

    )
}


// employee task list

const EmployeeTaskList = () => {
    return (
        <DashboardLayout>
            <EmployeeTaskContent />  
        </DashboardLayout>


    )
}

export default EmployeeTaskList;

