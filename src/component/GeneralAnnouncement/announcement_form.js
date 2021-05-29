import React, { useState } from 'react'
import './style.css'
import announcementApi from '../../redux/api/new_announcement.js'

const AnnouncementForm = ({ modalHandler }) => {

    const [formValue, setFormValue] = useState('')

    const handleClick = async () => {
        if (formValue) {
            const response = await announcementApi({ announcements: formValue })

            console.log(response)
            if (response.data.statusCode === 201) {
                modalHandler(false)
            }
        }
    }
    return (
        <section className='add-announcement-form'>
            <form>
                <input type='text' name='text' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <div className='add-announcement-div' style={{ cursor: 'pointer' }}>
                    <p onClick={() => handleClick()}>save</p>
                    <p onClick={() => modalHandler(false)}>cancel</p>
                </div>
            </form>

        </section>
    )
}

export default AnnouncementForm;