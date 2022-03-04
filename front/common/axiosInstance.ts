import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/v1'

const axiosInstance = axios.create()


export default axiosInstance