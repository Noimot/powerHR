import api from './config'

export const leaveApi = async(data) => {
    const request = await api.post('/leave/new', data)
    return request;
}

export const pendingLeaveApi = async() => {
    const request = await api.get('/leave/all')
    return request;
}

export const leaveStatusApi = async(data) => {
    const request = await api.put('/leave/update', data)
    return request;
}