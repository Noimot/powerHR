import React, { useState } from 'react'
import { addTask } from '../../redux/api/taskApi'

export default function TaskForm({ modalHandler }) {
    const [task, setTask] = useState('')

    const handleClick = async (data) => {
        const response = await addTask({ tasks: task })
        console.log(response)
        if(response.data.statusCode === 201){
            modalHandler(false)
        }
    }

    return (
        // css style from add AnnouncementForm

        <div className='add-announcement-form'>
            <form>
                <input type='text' name='text' value={task} onChange={(e) => setTask(e.target.value)} />
                <div className='add-announcement-div' style={{ cursor: 'pointer' }}>
                    <p onClick={handleClick}>save</p>
                    <p onClick={() => modalHandler(false)}>cancel</p>
                </div>
            </form>

        </div>
    )
}

