import { allTasks } from '../api/taskApi'
import { GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS } from '../actionTypes'

const getAllTasks = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST
        });
        const response = await allTasks()
        if (response.status === 200) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {
                    result: response.data
                }
            });
        }
        else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: 'failed to get data'
                }
            });
        }
    }
    catch {
        dispatch({
            type: GET_USER_FAILURE,
            payload: {
                error: 'an error occur'
            }
        })
    }
}

export default getAllTasks;