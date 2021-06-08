import api from './config.js'

export const addTask = async(data) => {
    const request = await api.post('/tasks/new', data)
    return request;
}

export const allTasks = async() => {
    const request = await api.get('/tasks/all')
    return request;
}

export const taskStatusApi = async(data) => {
    const request = await api.put('/tasks/update', data)
    return request;
}