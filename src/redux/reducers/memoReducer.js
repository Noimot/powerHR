import { GET_MEMO_FAILURE, GET_MEMO_REQUEST, GET_MEMO_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    errorMessage: '',
    allMemo: []
}


const memoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MEMO_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false
            }

        case GET_MEMO_SUCCESS:
            return {
                ...state,
                loginError: false,
                allMemo: payload.result,
                loading: false,
            }

        case GET_MEMO_FAILURE:
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