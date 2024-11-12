import axios from 'axios'
//có thể export nhiều instance nếu export luôn ở đây
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 15000,
})

axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//import cả file
export default axiosInstance
