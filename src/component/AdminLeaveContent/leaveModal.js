import React from 'react'
import { Modal } from '@material-ui/core'
import LeaveForm from './leaveForm'


const LeaveModal = ({ leave, open, modalHandler }) => {
    const closeModal = () => {
        modalHandler(false)
    }
    return (
        <Modal open={open} onClick={() => console.log('this is a modal')}>
            <LeaveForm leave={leave} modalHandler={closeModal} />
        </Modal>
    )
}

export default LeaveModal;