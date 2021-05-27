import React from 'react'
import { Modal } from '@material-ui/core'
import MemoModalContent from './memoContent'


const MemoContentModal = ({ open, modalHandler, memo }) => {
    const closeModal = () => {
        modalHandler(false)
        console.log(open)
    }
    return (
        <Modal open={open} onClose={() => console.log('this is a memo modal')}>
            <MemoModalContent memo={memo} modalHandler={closeModal} />
        </Modal>

    )
}
export default MemoContentModal;