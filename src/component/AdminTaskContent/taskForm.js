import React, { useState } from 'react'
import { addTask } from '../../redux/api/taskApi'
import NestedList from './employeesName'

export default function TaskForm({ modalHandler }) {
    const [task, setTask] = useState('')
    const [modal, setModal] = useState({
        showModal: false
    })

    const handleChangeModal = (e) => {
        const character = e.target.value.match(/@/)
        if (e.target.value.includes('@')) {
            setModal({ showModal: true })
        }
    }

    const handleClick = async () => {
        console.log(task)
        if (task.trim() !== '') {
            const response = await addTask({ tasks: task })
            console.log(response)
            if (response.data.statusCode === 201) {
                modalHandler(false)
            }
        }
    }


    return (
        // css style from add AnnouncementForm

        <div className='add-announcement-form'>
            <form>
                {task.showModal && <NestedList />}
                <input type='text' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
                <div className='add-announcement-div' style={{ cursor: 'pointer' }}>
                    <p onClick={handleClick}>save</p>
                    <p onClick={() => modalHandler(false)}>cancel</p>
                </div>
            </form>

        </div>
    )
}

