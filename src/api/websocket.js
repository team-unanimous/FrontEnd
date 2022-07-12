import { getCookie } from "../Cookie";
import Stomp from "stompjs";
import sockJS from "sockjs-client"

const token = getCookie("token");

//handshake 
const target = "http://52.79.226.242:8080/ws-stomp" // http URL
export const socket = new sockJS(target);
export const ws = Stomp.over(socket);
const roomId = "";

// server에서 Login, passcode 뭐 받는지 확인 필요
export const SocketConnect = (token) => { 
    try{
        ws.connect({
            token: token
        }, ()=> {
            ws.subscribe(`/sub/api/chat/rooms/${roomId}`,
            (response) => {
                const newMessage = JSON.parse(response.body);
                console.log("보낸사람:", newMessage.sender);
                console.log("받은 메세지:", newMessage.message)
            },
            {
                token: token
            }
            );
        });
    } catch (error) {
        console.log(error.response);
    }}

    // ws.connect(
    //     {token: accessToken},
    //     ()=> ws.subscribe(`/sub/api/chat/rooms/${roomId}`, 
    //     (response)=>{
    //         const newMessage = JSON.parse(response.body);
    //     console.log(newMessage)},
    //     {token: accessToken})
    //     )}


// disconnect 시에는 callback fn만    
// export const SocketDisconnect = () => {
//     ws.disconnect(
//         ()=> {
//             console.log("disconnected");
//         },
//         { token: token}
//     )
// }