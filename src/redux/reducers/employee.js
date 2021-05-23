import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    loginSuccess: false,
    loginError: false,
    errorMessage: ''
}

const allEmployeeReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                loginError: false,
                data: payload.result
            }
        case GET_USER_FAILURE:
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

export default allEmployeeReducer;