import axios from "axios";
import { setCookie, getCookie } from '../../Cookie';

// 1. Axios instance생성
const api = axios.create({
    baseURL: "https://dkworld.shop"
})


// 상우님 api https://shayangju.shop
// 동관님 api https://dkworld.shop
// h2 https://dkworld.shop/h2-console/login.jsp?jsessionid=c2e65e7cdcb83d6b04d83acdc20b8073
// 합쳐진서버 api http://52.79.226.242/

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