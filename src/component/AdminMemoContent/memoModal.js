import React from 'react'
import { Modal } from '@material-ui/core'
import MemoForm from './memoForm'
// import MemoContent from './memoContent'


const MemoModal = ({open, modalHandler}) => {
    return (
        <Modal open={open} onClose={() => console.log('this is a memo modal')}>
            <MemoForm  modalHandler={modalHandler} />
            {/* <MemoContent modalHandler={modalHandler} /> */}
        </Modal>

    )
}
export default MemoModal;