import { GET_LEAVE_FAILURE, GET_LEAVE_REQUEST, GET_LEAVE_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    errorMessage: ''
}

const leaveRequestReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_LEAVE_REQUEST:
            return {
                ...state,
                loading: true,
                loginError:false,
                errorMessage: '',
                loginSuccess: false
            }
            case GET_LEAVE_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    loginError: false,
                    loginSuccess: true
                }
                case GET_LEAVE_FAILURE:
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

export default leaveRequestReducer;