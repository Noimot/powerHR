import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    errorMessage: ''
}

const leaveStatusReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_USER_REQUEST:
        return {
            ...state,
            loading: true,
            loginSuccess: false,
            loginError: false
        }
        case ADD_USER_SUCCESS:
        return {
            ...state,
            loginSuccess: true,
            loading: false,
            loginError: false
        }
        case ADD_USER_FAILURE:
        return {
            ...state,
            loginError: true,
            errorMessage: payload.error
        }
        default:
        return state;
    }
}

export default leaveStatusReducer;