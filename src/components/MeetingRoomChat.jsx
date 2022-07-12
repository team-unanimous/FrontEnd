import { getCookie } from "../Cookie";
import Stomp from "stompjs";
import sockJS from "sockjs-client"
// import jwt_decode from "jwt-decode";
import { SocketConnect, ws } from "../api/websocket";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import apis from "../api/main";
import { useMutation } from "react-query";
import { useState } from "react";

const MeetingRoomChat = ()=>{
    const inputRef = useRef(null);
    // const [roomId, setRoomId] = useState(null);
    const token = getCookie("token");
    useEffect(()=>{
        SocketConnect(token);
    })

//handshake 
const target = "http://52.79.226.242:8080/ws-stomp" // http URL
const socket = new sockJS(target);
const ws = Stomp.over(socket);
const roomId = "";

// server에서 Login, passcode 뭐 받는지 확인 필요
const SocketConnect = (token) => { 
    try{
        ws.connect({
            token: token
        }, ()=> {
            ws.subscribe(`/sub/api/chat/rooms/2`,
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
    

    const makeMeetingroom = (meetingInfo) => {
        return apis.postReserveMeet(meetingInfo)
    }
    const { mutate : meetingMutate } = useMutation(makeMeetingroom, {
        onSuccess: (resp) => {
            console.log(resp)
            setRoomId(resp.data.roomId)
        }
    });

    const meetingRoomHandler = () => {
        const data = { 
            meetingTitle : "string",
            meetingDate : "string",
            meetingTime: "00:00",
            meetingSum: "string",
            meetingTheme: "string",
            meetingDuration: "0시간",
            teamId:1            
        };
        console.log(data);
        meetingMutate(data);
    }
    
    const makeChattingroom = (chattingInfo) =>{
        return apis.postMeetingroom(chattingInfo)
    }

    const { mutate : chattingMutate } = useMutation(makeChattingroom, {
        onSuccess: (resp) => {
            console.log(resp)
        }
    });

    

    const chattingRoomHandler = () => {
        const data = {
            meetingId:1
        }
        console.log(data);
        chattingMutate(data);
        }

    function waitForConnection(ws, callback){
        setTimeout(
            function () {
                if (ws.ws.readyState === 1) {
                    callback();
                } else {
                    waitForConnection(ws, callback);
                }
            },1
        )
    }
 
    const HandleSend = async (event)=>{
        event.preventDefault();
        try {
            const data = {
                type: "TALK",
                roomId: "2",
                nickname: "string",
                sender: "string",
                message: `this is a message from the client : ${inputRef.current.value}`,
                createdAt: "10시"
            }
            const token = getCookie("token")
            waitForConnection(ws, function(){
                ws.send('/pub/api/chat/message', {token: token}, JSON.stringify(data));
                // ws.send("/queue/test", {}, "this is a message from the client")
                console.log("clicked anyway");
                console.log(JSON.stringify(data))  
            })
        } catch (error) {
            console.log(error);
        }
    }

    const callbackFn = (message)=>{
        if (message.body) {
            console.log(message)
            alert(`got message with body: ${message.body}`)
        } else {
            console.log("got nothing")
        }
    }
    
    // const subscription = ws.subscribe("/sub/api/chat/rooms/3", callbackFn)

    const HandleUnsubscribe = ()=>{
        subscription.unsubscribe();
        alert("연결 끊김");
    }


    return (
        <>  
        <StChattingContainer>
            <StChattingItem>
            <button onClick={meetingRoomHandler}>create meeting room</button><br/>
            <button onClick={SocketConnect}>Connect</button><br/>
            <button onClick={chattingRoomHandler}>create chatting room</button><br/>
            <form>
                <input type="text" ref={inputRef} id="input"/>
                <input type="submit" value="Send" onClick={HandleSend} />
            </form>

            <button onClick={HandleUnsubscribe}>연결 끊기</button>
            </StChattingItem>
        </StChattingContainer>

        </>
    )
}


const StChattingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const StChattingItem = styled.div`
    
`
const StChattingDisplay = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;

`

export default MeetingRoomChat;