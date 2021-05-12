import React, { useState } from 'react'

export default function TaskForm({modalHandler}) {
    const [task, setTask ] = useState('')
    return (
        // css style from add AnnouncementForm

        <div className='add-announcement-form'>
            <form>
                <input type='text' name='text' value={task} onChange={(e) => setTask(e.target.value)} />
                <div className='add-announcement-div'>
                    <p>save</p>
                    <p onClick={() => modalHandler(false)}>cancel</p>
                </div>
            </form>
            
        </div>
    )
}

