import { employeeLeaveStatusApi } from '../api/leaveApi'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'

const employeeLeaveStatusAction = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST
        })

        const response = await employeeLeaveStatusApi()
        if (response.status === 201) {
            dispatch ({
                type: GET_USER_SUCCESS,
                payload: {
                    result: response.data.leaveStatus
                }
            })
        }
        else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: 'failed to get data from database'
                }
            })
        }
    }
    catch {
        dispatch ({
            type: GET_USER_FAILURE,
            payload: {
                error: 'an error occur'
            }
        })

    }
}

export default employeeLeaveStatusAction;