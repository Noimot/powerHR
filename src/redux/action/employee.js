import { allEmployeeApi } from '../api/employee'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'


const allEmployee = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST,
        });

        const response = await allEmployeeApi();
        if (response.status === 201) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {
                    result: response.data.employeeData
                }
            });

        }
        else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: 'failed to GET new user'
                }
            })
        }

    }
    catch {
        dispatch({
            type: GET_USER_FAILURE,
            payload: {
                error: 'you can not GET new user'
            }
        });
    }
}

export default allEmployee;