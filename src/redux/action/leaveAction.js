import { leaveApi } from '../api/leaveApi'
import { GET_LEAVE_REQUEST, GET_LEAVE_SUCCESS, GET_LEAVE_FAILURE } from '../actionTypes'

const leaveRequestAction = (data) => async (dispatch) => {
    try {
        dispatch({
            type: GET_LEAVE_REQUEST
        })
        const response = await leaveApi(data)
        if (response.status === 201) {
            dispatch({
                type: GET_LEAVE_SUCCESS,
                payload: {
                    result: response.data
                }
            })
        }
        else {
            dispatch({
                type: GET_LEAVE_FAILURE,
                payload: {
                    error: 'failed to access database'
                }
            })
        }
    }
    catch {
        dispatch({
            type: GET_LEAVE_FAILURE,
            payload: {
                error: 'an error occur'
            }
        })

    }
}

export default leaveRequestAction;

