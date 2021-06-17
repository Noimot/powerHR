import { getAllMemoApi } from '../api/memoApi'
import { GET_MEMO_REQUEST, GET_MEMO_FAILURE, GET_MEMO_SUCCESS } from '../actionTypes'

const memoAction = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_MEMO_REQUEST
        });

        const response = await getAllMemoApi();
        if (response.status === 201) {
            dispatch({
                type: GET_MEMO_SUCCESS,
                payload: {
                    result: response.data.memos
                }
            })
        }
        else {
            dispatch({
                type: GET_MEMO_FAILURE,
                payload: {
                    error: 'failed to connect to database'
                }
            })
        }
    }
    catch {
        dispatch({
            type: GET_MEMO_FAILURE,
            payload: {
                error: 'something went wrong!'
            }
        })

    }

}

export default memoAction;