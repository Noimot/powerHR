import React from 'react'
import TaskForm from './taskForm'
import { Modal } from '@material-ui/core'

export default function TaskModal({open, modalHandler}) {
    return (
        <Modal open={open} onClose={() => console.log('display task modal')}>
            <TaskForm modalHandler={modalHandler} />    
        </Modal>
    )
}

