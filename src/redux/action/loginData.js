import { loginApi } from '../api/loginAPI'
import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST } from '../actionTypes'
import jwt from 'jwt-decode'


const redirectRoute = (token) => {
    console.log('not working')
    const user = jwt(token)
    console.log(user)
    console.log(user.role)
    if (user.role === 'admin') {
        window.location.assign('/admindashboard')
    }
    else if (user.role === 'employee') {
        window.location.assign('/employeedashboard')
    }
}

export const LoginData = (data) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER_REQUEST,
        });
        const response = await loginApi(data);
        if (response.status === 200) {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    result: response.data
                },
            })
            const token = localStorage.setItem('x-access-token', response.data.token)
            console.log(response.data.token)
            redirectRoute(response.data.token)

        }
        else {
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: {
                    error: 'Failed to LOGIN user'
                }
            })
        }
    }
    catch (error) {
        const status = error.response.status;
        if (status === 404) {
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: {
                    error: 'userid or password is incorrect'
                }
            })
        }

        else {
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: {
                    error: 'something went wrong, try again!'
                }
            })
        }

    }
}