import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    data: [],
    loginSuccess: false,
    loginError: false,
    errorMessage: ''
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                loginError: false
            }

        case LOGIN_USER_FAILURE:
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

export default loginReducer;