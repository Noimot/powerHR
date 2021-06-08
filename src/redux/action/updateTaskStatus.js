import { taskStatusApi } from '../api/taskApi'
import { GET_TASK_REQUEST, GET_TASK_SUCCESS, GET_TASK_FAILURE } from '../actionTypes'
import getAllTasks from './tasks'


const updateTaskStatus = (data) => async (dispatch) => {
    try {
        dispatch({
            type: GET_TASK_REQUEST
        });
        const response = await taskStatusApi(data)
        if (response.status === 201) {
            dispatch({
                type: GET_TASK_SUCCESS,
                payload: {
                    result: response.data
                }
            })
            dispatch(getAllTasks())
        }
        else {
            dispatch({
                type: GET_TASK_FAILURE,
                payload: {
                    error: 'failed to update data'
                }
            })
        }
    }
    catch {
        dispatch({
            type: GET_TASK_FAILURE,
            payload: {
                error: 'incorrect id'
            }
        })

    }
}

export default updateTaskStatus;