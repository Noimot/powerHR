import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    loginSuccess: false,
    loginError: false,
    errorMessage: ''
}

const AddEmployeeReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                loginError: false
            }
        case ADD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                loginError: true,
                loginSuccess: false,
                errorMessage: payload.error
            }

        default:
            return state;
    }
}

export default AddEmployeeReducer;