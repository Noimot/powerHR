import axios from 'axios'

export const userToken = () => {
    const token = localStorage.getItem('x-access-token')
    if (token) {
        return token;
    }
    return null;
}

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://power-hr-api.herokuapp.com/api/v1'
})

instance.interceptors.request.use(
    async (config) => {
        const token = userToken();

        if (token){
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;