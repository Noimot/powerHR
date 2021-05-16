import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    loginSuccess: false,
    allAnnouncement: [],
    errorMessage: ''
}

const announcementReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                allAnnouncement: payload.result
            }
        case GET_USER_FAILURE:
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

export default announcementReducer;