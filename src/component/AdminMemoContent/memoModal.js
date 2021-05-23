import React from 'react'
import { Modal } from '@material-ui/core'
import MemoForm from './memoForm'


const MemoModal = ({ open, modalHandler }) => {
    return (
        <Modal open={open} onClose={() => console.log('this is a memo modal')}>
                <MemoForm modalHandler={modalHandler} />
        </Modal>

    )
}
export default MemoModal;