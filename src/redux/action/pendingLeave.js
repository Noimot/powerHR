import { pendingLeaveApi } from '../api/leaveApi'
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE} from '../actionTypes'

const pendingLeaveAction = () => async(dispatch) => {
    try{
        dispatch({
            type: GET_USER_REQUEST
        });

        const response = await pendingLeaveApi()
        if(response.status === 201) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload:{
                    result: response.data.pendingLeave
                } 
            })
        }
        else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: 'failed to get data'
                }               
            })
        }

    }
    catch{
        dispatch({
            type: GET_USER_FAILURE,
            payload: {
                error: 'an error occur'
            }
        
        })

    }
}

export default pendingLeaveAction;