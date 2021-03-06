import { GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    getTasks: [],
    errorMessage: '',
    loginSuccess: false
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false,
                getTasks: [],
                errorMessage: '',
                loginSuccess: false
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginError: false,
                errorMessage: '',
                loginSuccess: true,
                getTasks: payload.result
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
            return state
    }
}

export default taskReducer;