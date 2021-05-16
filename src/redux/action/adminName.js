import {adminName } from '../api/loginAPI'
import { GET_ADMIN_NAME } from '../actionTypes'

const Admin = () => async(dispatch) => {
    const response = await adminName();
    dispatch({
        type: GET_ADMIN_NAME,
        payload: {
            result: response.data
        }
    })
}

export default Admin;