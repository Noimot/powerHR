import React, { useState, useEffect } from 'react'
import { addTask } from '../../redux/api/taskApi'
import { MentionsInput, Mention } from 'react-mentions'
import { useDispatch, useSelector } from 'react-redux'
import allEmployee from '../../redux/action/employee'

// import UserMention from './employeesName'

export default function TaskForm({ modalHandler }) {
    const [task, setTask] = useState('')

    // const dispatch = useDispatch();
    // const employeeDataStore = useSelector(({ allEmployeeReducer }) => allEmployeeReducer)
    // console.log(employeeDataStore)

    // useEffect(() => {
    //     dispatch(allEmployee())
    // }, [dispatch])


    // const [modal, setModal] = useState({
    //     showModal: false
    // })

    // const handleChangeModal = (e) => {
    //     const character = e.target.value.match(/@/)
    //     if (e.target.value.includes('@')) {
    //         setModal({ showModal: true })
    //     }
    // }

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(task)
        if (task.trim() !== '') {
            const response = await addTask({ tasks: task })
            console.log(response)
            if (response.data.statusCode === 201) {
                modalHandler(false)
            }
        }
    }

    // const users = () => {
    //     {employeeDataStore.data.map(store => {
    //                             return {
    //                                 id: store.userid,
    //                                 display: store.employee_name
    //                             }
    //                         })}
    // }


    return (
        // css style from add AnnouncementForm

        <div className='add-announcement-form'>
            <form>
                {/* {task.showModal && <NestedList />} */}
                <input type='text' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
                {/* <UserMention /> */}
                {/* <MentionsInput
                    singleLine
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder={"Mention people using '@'"}
                    a11ySuggestionsListLabel={"Suggested mentions"}
                >
                    <Mention data={users()} trigger="@" />
                </MentionsInput> */}

                <div className='add-announcement-div' style={{ cursor: 'pointer' }}>
                    <p onClick={handleClick}>save</p>
                    <p onClick={() => modalHandler(false)}>cancel</p>
                </div>

            </form>
        </div>
    )
}

