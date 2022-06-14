
import axios from 'axios'
const axiosParams = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/' // Alternative for more environments
}
const axiosInstance = axios.create(axiosParams)
const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config)
  }
}
export default api(axiosInstance)
