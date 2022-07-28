import Stomp from "stompjs";
import sockJS from "sockjs-client"

export const target = "https://sparta-ysh.shop/ws-stomp" //"http://52.79.226.242:8080/ws-stomp" 

// export const target = "https://dkworld.shop/ws-stomp" // http URL dasfsdgfadsdga
export const socket = new sockJS(target);
export const ws = Stomp.over(socket);

export const SocketConnect = (data) => {
    try{
        ws.connect({
            token: data.token
        }, ()=> {
            ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
            (response) => {
                const newMessage = JSON.parse(response.body);
                console.log(newMessage)
                // setMsg([...msg, newMessage.message]);
                if (newMessage.type == "TALK") {
                    setMsg(msg=>[...msg, newMessage])
                    // setDate(date=>[...date, newMessage.createdAt])
                    // setNickname(nickname=>[...nickname, newMessage.nickname])
                    // setAvatar(avatar=>[...avatar, newMessage.profileUrl])
                    // console.log(msg)
                    console.log(newMessage.message);
                    console.log("보낸사람:", newMessage.sender);
                    console.log("받은 메세지:", newMessage.message);
                }
            },
            {
                token: token
            });
        });
        console.log("구독 성공")
    } catch (error) {
        console.log(error.response);
    }}