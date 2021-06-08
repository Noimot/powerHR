import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    leave: [],
    errorMessage: ''
}

const pendingLeaveReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST:
        return {
            ...state,
            loading: false
        }
        case GET_USER_SUCCESS:
        return {
            ...state,
            loginSuccess: true,
            leave: payload.result
        }
        case GET_USER_FAILURE:
        return {
            ...state,
            loginError: true,
            errorMessage: payload.error
        }
        default:
        return state;
    }
}

export default pendingLeaveReducer;