import api from './config'

export const loginApi = (data) => {
    const request = api.post('/auth/login', data)
    return request;
}


export const adminName = async () => {
    const request = await api.get('/auth/admin')
    return request
}


