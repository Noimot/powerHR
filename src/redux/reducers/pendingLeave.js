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
            loading: true,
            loginSuccess: false,
            loginError: false,
            errorMessage:'',
        }
        case GET_USER_SUCCESS:
        return {
            ...state,
            loginSuccess: true,
            loginError: false,
            loading:false,
            errorMessage:'',
            leave: payload.result
        }
        case GET_USER_FAILURE:
        return {
            ...state,
            loginError: true,
            loading: false,
            loginSuccess: false,
            errorMessage: payload.error
        }
        default:
        return state;
    }
}

export default pendingLeaveReducer;