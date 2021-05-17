import { GET_ADMIN_NAME } from '../actionTypes'

const initialValue = {
    loginSuccess: false,
    data: []
}

const adminReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case GET_ADMIN_NAME:
            return {
                ...state,
                loginSuccess: true,
                data: payload.result
            }
        default:
            return state;
    }
}

export default adminReducer;