import Stomp from "stompjs";
import sockJS from "sockjs-client"

export const target = "https://sparta-ysh.shop/ws-stomp" //"http://52.79.226.242:8080/ws-stomp" 

// export const target = "https://dkworld.shop/ws-stomp" // http URL dasfsdgfadsdga
export const socket = new sockJS(target);
export const ws = Stomp.over(socket);