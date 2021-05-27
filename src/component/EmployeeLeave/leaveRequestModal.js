import React from 'react'
import { Modal } from '@material-ui/core'
import LeaveRequestForm from './leaveRequestForm'



const LeaveRequestModal = ({open , modalHandler}) => {
    return (
        <Modal open={open} onClose={() => console.log('this is a modal')}> 
<LeaveRequestForm modalHandler={modalHandler} />
        </Modal>
    )
}

export default LeaveRequestModal;