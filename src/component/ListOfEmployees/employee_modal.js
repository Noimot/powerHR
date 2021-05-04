import React from 'react'
import { Modal } from '@material-ui/core'
import AddEmployeeForm from '../AddEmployeeForm'


const EmployeeModal = ({open, modalHandler}) => {
    return (
        <section>
            <Modal open={open} onClose={ () => console.log('you are damn troublesome')}>
                <div>
                    <AddEmployeeForm modalHandler={modalHandler}/>
                </div>
            </Modal>
        </section>


    )
}

export default EmployeeModal;