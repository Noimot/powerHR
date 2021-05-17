import { GET_TASK_REQUEST, GET_TASK_FAILURE, GET_TASK_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    getTasks: [],
    errorMessage: '',
    loginSuccess: false
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TASK_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                getTasks: payload.result
            }
        case GET_TASK_FAILURE:
            return {
                ...state,
                loading: false,
                loginError: true,
                errorMessage: payload.error
            }
        default:
            return state
    }
}

export default taskReducer;