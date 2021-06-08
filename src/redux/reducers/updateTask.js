import { GET_TASK_REQUEST, GET_TASK_FAILURE, GET_TASK_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    errorMessage: '',
}

const updateTaskStatusReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false,
                loginSuccess: false,
                errorMessage: ''
            }
        case GET_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                loginError: false,
                errorMessage: ''
            }

        case GET_TASK_FAILURE:
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

export default updateTaskStatusReducer;