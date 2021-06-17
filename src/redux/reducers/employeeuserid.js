import { GET_EMPLOYEE_FAILURE, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_REQUEST } from "../actionTypes";

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    errorMessage: '',
    employee: []
}

const employeeUseridReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false,
                loginSuccess: false
            }
            case GET_EMPLOYEE_SUCCESS:
                return {
                    ...state,
                    loginSuccess: true,
                    employee: payload.result,
                    loading: false,
                    loginError: false
                }
                case GET_EMPLOYEE_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        loginError: true,
                        errorMessage: payload.error
                    }
                    default:
                        return state;
    }
}

export default employeeUseridReducer;