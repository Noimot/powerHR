import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    errorMessage: '',
    allMemo: []
}


const memoReducer = (state = initialState, { type, payload }) => {
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
                loginError: false,
                allMemo: payload.result,
                loading: false,
            }

        case GET_USER_FAILURE:
            return {
                ...state,
                loginError: true,
                errorMessage: payload.error
            }
        default:
            return state
    }
}

export default memoReducer;