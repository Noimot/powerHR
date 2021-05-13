import api from './config'

export default function addEmployeeApi (data) {
    const request = api.post('/employee/add')
    return request;
}