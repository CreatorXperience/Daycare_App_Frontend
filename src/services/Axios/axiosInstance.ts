import axios from "axios";
import {URL} from "../../constants/endpoints";

const axiosInstance = axios.create({
    baseURL: URL().endpoint,
})


export default axiosInstance