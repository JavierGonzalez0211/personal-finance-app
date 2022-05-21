import axios from "axios";

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})



export default axiosApi;