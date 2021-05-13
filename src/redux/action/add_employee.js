import addEmployeeApi from '../api/add_employee'
import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from '../actionTypes'

const AddNewEmployee = (data) = async(dispatch) => {
    try {
        dispatch({
            type: ADD_USER_REQUEST,
        });
        const response = await addEmployeeApi(data);
        if(response.status === 200) {
            dispatch({
                type: ADD_USER_SUCCESS,
                payload: {
                    result: response.data
                }
            });

        }
        else {
            dispatch ({
                type: ADD_USER_FAILURE,
                payload: {
                    error: 'failed to add new user'
                }
            })
        }
        
    }
    catch {
        dispatch({
            type: ADD_USER_FAILURE,
            payload: {
                error: 'you can not add new user'
            }
        });
    }
}   