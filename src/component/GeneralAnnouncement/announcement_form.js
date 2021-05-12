import React, {useState} from 'react'
import './style.css'

const AnnouncementForm = ({modalHandler}) => {

    const [ formValue, setFormValue ] = useState('')
    return (
        <section className='add-announcement-form'>
            <form>
                <input type='text' name='text' value={formValue} onChange={(e)=>setFormValue(e.target.value)} />
                <div className='add-announcement-div'>
                    <p>save</p>
                    <p onClick={() => modalHandler(false)}>cancel</p>
                </div>
            </form>

        </section>
    )
}

export default AnnouncementForm;