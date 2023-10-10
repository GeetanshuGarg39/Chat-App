import axios from "axios";
import { BASE_URL } from "../config";

const axiosInst = axios.create({baseURL: BASE_URL})

axiosInst.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(
        (error.response && error.response.data) || "Something went wrong"
    )
)

export default axiosInst;