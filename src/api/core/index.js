import axios from "axios";
import { setCookie, getCookie } from '../../Cookie';

// 1. Axios instance생성
const api = axios.create({
    baseURL: "https://dkworld.shop"
    // baseURL: "http://52.79.226.242/"
})

// 상우님 api http://13.125.217.152
// 동관님 api https://dkworld.shop/

// 2. request interceptor
api.interceptors.request.use(
    config => {
        const token = getCookie("token");
        config.headers.Authorization = token;
        return config;
    },
    error => {
        console.log(error);
    }
)

// 3. response interceptor
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error);
    }
);

// 4. 인스턴스 내보내기
export default api;