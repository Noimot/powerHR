import React from 'react'
import { Modal } from '@material-ui/core'
import AnnouncementForm from './announcement_form'


const AnnouncementModal = ({open, modalHandler}) => {
    return (
        <Modal open={open} onClose={() => console.log('this is a modal')}>
            <AnnouncementForm modalHandler={modalHandler}/>
        </Modal>
    )
}

export default AnnouncementModal;