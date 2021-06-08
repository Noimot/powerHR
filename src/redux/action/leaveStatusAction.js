import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from '../actionTypes'
import { leaveStatusApi } from '../api/leaveApi.js'
import pendingLeaveAction from './pendingLeave'

const leaveStatusAction = (data) => async(dispatch) => {
    try {
        dispatch({
            type: ADD_USER_REQUEST
        });
        const response = await leaveStatusApi(data)
        if(response.status === 201) {
            dispatch({
                type: ADD_USER_SUCCESS,
                payload: {
                    result: response.data
                }
            });
            dispatch(pendingLeaveAction())
        }
        else {
            dispatch({
                type: ADD_USER_FAILURE,
                payload: {
                    error: 'failed to update data'
                }
            })
        }
    }
    catch {
        dispatch({
            type: ADD_USER_FAILURE,
            payload: {
                error: 'something went wrong'
            }
        })

    }
}

export default leaveStatusAction;