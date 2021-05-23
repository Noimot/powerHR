import React from 'react'
import { Modal } from '@material-ui/core'
import MemoContent from './memoContent'


const MemoContentModal = ({ open, modalHandler }) => {
    const closeModal = () => {
        modalHandler(false)
        console.log(open)
    }
    return (
        <Modal open={open} onClose={() => console.log('this is a memo modal')}>
            <MemoContent modalHandler={closeModal} />
        </Modal>

    )
}
export default MemoContentModal;