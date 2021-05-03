import api from './config'

export const loginApi = (data) => {
    const request =  api.post('/auth/login', data)
    return request;
}

