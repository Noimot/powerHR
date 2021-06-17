import api from './config'

export default function addEmployeeApi (data) {
    const request = api.post('/employee/add', data)
    return request;
}

export const allEmployeeApi = () => {
    const request = api.get('/employee/all')
    return request;
}

export const employeeUseridApi = async (data) => {
    console.log(data)
    const request = await api.post('/employee/userid', data)
    console.log(request.data)
    return request;
}

export const employeeUpdateApi = async (data) => {
    const request = await api.put('/employee/update',data)
    return request;
}