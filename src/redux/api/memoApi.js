import api from './config'

export const memoApi = async (data) => {
    const request = await api.post('memos/new', data)
    return request
};

export const getAllMemoApi = async() => {
    const request = await api.get('memos/all')
    return request
}

