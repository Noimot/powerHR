import {employeeUseridApi} from '../api/employee'
import { GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_FAILURE} from '../actionTypes'

const employeeUseridAction = (data) => async(dispatch) => {
    try{
        dispatch({
            type: GET_EMPLOYEE_REQUEST
        });
         const response = await employeeUseridApi(data)
         if (response.status === 201) {
             dispatch({
                 type: GET_EMPLOYEE_SUCCESS,
                 payload: {
                     result: response.data.data
                 }
             });
         }
         else {
             dispatch({
                 type: GET_EMPLOYEE_FAILURE,
                 payload: {
                     error: 'unable to fetch data from database'
                 }
             })
         }
        
    }
    catch{
        dispatch({
            type: GET_EMPLOYEE_FAILURE,
            payload: {
                error: 'an error occur'
            }
        })

    }
}

export default employeeUseridAction;