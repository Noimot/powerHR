import api from './config'

export default function addEmployeeApi (data) {
    const request = api.post('/employee/add', data)
    return request;
}

export const allEmployeeApi = () => {
    const request = api.get('/employee/all')
    return request;
}