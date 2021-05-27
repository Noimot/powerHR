import React from 'react'
import { Modal } from '@material-ui/core'
import LeaveForm from './leaveForm'


const LeaveModal = ({ open, modalHandler }) => {
    const closeModal = () => {
        modalHandler(false)
    }
    return (
        <Modal open={open} onClick={() => console.log('this is a modal')}>
            <LeaveForm modalHandler={closeModal} />
        </Modal>
    )
}

export default LeaveModal;