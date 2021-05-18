import { allTasks } from '../api/taskApi'
import { GET_TASK_REQUEST, GET_TASK_FAILURE, GET_TASK_SUCCESS } from '../actionTypes'

const getAllTasks = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_TASK_REQUEST
        });
        const response = await allTasks();
        console.log(response)
        if(response.status === 201) {
            dispatch({
                type: GET_TASK_SUCCESS,
                payload: {
                    result: response.data.tasks
                }
            });
            
        }
        else {
            dispatch({
                type: GET_TASK_FAILURE,
                payload: {
                    error: 'failed to get data'
                }
            });
        }
    }
    catch {
        dispatch({
            type: GET_TASK_FAILURE,
            payload: {
                error: 'an error occur'
            }
        })
    }
}

export default getAllTasks;