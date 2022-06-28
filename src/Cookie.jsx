// 설치된 패키지 import
import Cookies from "universal-cookie";
// 객체를 하나의 변수에 담아서 사용을 용이하게 함
const cookies = new Cookies();
// 쿠키에 값을 저장할때
export const setCookie = (name, value, option) => {
    return cookies.set(name, value, { ...option });
}
// 쿠키에서 값을 빼내올때
export const getCookie = (name) => {
    return cookies.get(name);
}
// 쿠키에 있는 값을 지울때
export const removeCookie = (name) =>{
    return cookies.remove(name);
}