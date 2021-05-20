import { getAllMemoApi } from '../api/memoApi'
import { GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS } from '../actionTypes'

const memoAction = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST
        });

        const response = await getAllMemoApi();
        if (response.status === 201) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {
                    result: response.data.memos
                }
            })
        }
        else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: 'failed to connect to database'
                }
            })
        }
    }
    catch {
        dispatch({
            type: GET_USER_FAILURE,
            payload: {
                error: 'something went wrong!'
            }
        })

    }

}

export default memoAction;