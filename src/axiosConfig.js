import axios from 'axios'


const axiosInstence = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials:true
})

export default axiosInstence