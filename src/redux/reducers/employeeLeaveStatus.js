import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginSuccess: false,
    loginError: false,
    errorMessage: '',
    employeeLeaveStatus: []
}

const employeeLeaveStatusReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false,
                loginSuccess: false,

            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loginSuccess: true,
                loading: false,
                loginError: false,
                employeeLeaveStatus: payload.result
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                loginSuccess: false,
                loginError: true,
                errorMessage: payload.error
            }
        default:
            return state;
    }
}

export default employeeLeaveStatusReducer;