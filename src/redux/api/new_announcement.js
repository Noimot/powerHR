import api from './config.js'

const announcementApi = (data) => {
    const request = api.post('/announcements/new', data)
    return request;
}

export default announcementApi;


export const getAllAnnouncement = async() => {
    const request = await api.get('/announcements/all')
    console.log(request)
    return request;
}