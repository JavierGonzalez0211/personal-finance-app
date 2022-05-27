import axios from "axios";
import {axiosResponse, axiosResponseReject} from "./axiosResponseInterceptors"

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true
})

axiosApi.interceptors.response.use(axiosResponse, axiosResponseReject)

export default axiosApi;