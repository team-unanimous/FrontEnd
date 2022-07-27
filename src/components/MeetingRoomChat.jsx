import { getCookie } from "../Cookie";
import { ws } from "../api/websocket";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import apis from "../api/main";
import { useMutation } from "react-query";
import { useCallback } from "react";

import Stomp from "stompjs";
import sockJS from "sockjs-client"
import { useNavigate } from "react-router-dom";

const MeetingRoomChat = ()=>{
    const navigate = useNavigate()
    const [color, setColor] = useState(null);
    const [msg, setMsg] = useState("");
    const [issue, setIssue] =useState({}); 

    useEffect(()=>{
        SocketConnect(data);
        return () => {
            alert("alert!!!!")
            console.log("언마운트 됨");
            HandleUnsubscribe();
        }
    }, [])

    const target = "https://sparta-ysh.shop/ws-stomp" //"http://52.79.226.242:8080/ws-stomp" 
    const socket = new sockJS(target);
    const ws = Stomp.over(socket);
    const inputRef = useRef(null);
    const EnterRef = useRef(null);
    // const [roomId, setRoomId] = useState(null);
    
    const token = getCookie("token");

    const SocketConnect = (data) => {
        console.log("뿅")
    try{
        ws.connect({
            token: data.token
        }, ()=> {
            ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
            (response) => {
                const newMessage = JSON.parse(response.body);
                console.log(newMessage.message);
                setMsg(newMessage.message);
                setIssue(newMessage.message);
                console.log("보낸사람:", newMessage.sender);
                console.log("받은 메세지:", newMessage.message);
                // console.log(JSON.parse(issue));
            },
            {
                token: token
            });
        });
        console.log("구독 성공")
    } catch (error) {
        console.log(error.response);
    }}
    

    const HandleUnsubscribe = useCallback(()=>{
        try{
            ws.disconnect(
                ()=>{
                    ws.unsubscribe("sub-0");
                    console.log("Disconnected...")
                },
                {token: getCookie("token")}
            );
            // ws.unsubscribe(`/sub/api/chat/rooms/${data.roomId}`);
        } catch (error) {
            console.log(error);
        }
    })
    
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

    const data = {
        token: token,
        roomId: "1"//어디서 가져올수 있는지 확인 필요, string으로 줘야됨
    }

// const SocketConnect = (token) => { 
//     try{
//         ws.connect({
//             token: token
//         }, ()=> {
//             ws.subscribe(`/sub/api/chat/rooms/2`,
//             (response) => {
//                 const newMessage = JSON.parse(response.body);
//                 console.log("보낸사람:", newMessage.sender);
//                 console.log("받은 메세지:", newMessage.message)
//             },
//             {
//                 token: token
//             }
//             );
//         });
//     } catch (error) {
//         console.log(error.response);
//     }}

    const makeMeetingroom = (meetingInfo) => {
        return apis.postReserveMeet(meetingInfo)
    }
    const { mutate: meetingMutate } = useMutation(makeMeetingroom, {
        onSuccess: (resp) => {
            console.log(resp)
            // setRoomId(resp.data.roomId)
        }
    });

    const meetingRoomHandler = () => {
        const data = {
            meetingTitle: "string",
            meetingDate: "string",
            meetingTime: "00:00",
            meetingSum: "string",
            meetingTheme: "string",
            meetingDuration: "0시간",
            teamId: 1
        };
        console.log(data);
        meetingMutate(data);
    }

    const makeChattingroom = (chattingInfo) => {
        return apis.postMeetingroom(chattingInfo)
    }

    const { mutate: chattingMutate } = useMutation(makeChattingroom, {
        onSuccess: (resp) => {
            console.log(resp)
        }
    });

    const chattingRoomHandler = () => {
        const data = {
            meetingId: 1
        }
        console.log(data);
        chattingMutate(data);
    }

    function waitForConnection(ws, callback) {
        setTimeout(
            function () {
                if (ws.ws.readyState === 1) {
                    callback();
                } else {
                    waitForConnection(ws, callback);
                }
            }, 1
        )
    }

    const HandleSend = async (event) => {
        event.preventDefault();
        try {
            const data = {
                type: "TALK",
                roomId: "1",
                nickname: "string",
                sender: "string",
                message: `${inputRef.current.value}`,
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

    const EndterSendHandle = async (event)=>{
        event.preventDefault();
        try {
            const data = {
                type: "ENTER",
                roomId: "1",
                nickname: "string",
                sender: "string",
                message: `this is a Enter message from the client : ${EnterRef.current.value}`,
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
    const IssueSendHandle = async (event)=>{
        event.preventDefault();
        try {
            const data = {
                type: "ISSUE",
                roomId: "1",
                nickname: "string",
                sender: "string",
                message: JSON.stringify({"안건1":"안건입니다", "안건2":"안건이 아닙니다"}),
                createdAt: "10시"
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send('/pub/api/chat/message', { token: token }, JSON.stringify(data));
                // ws.send("/queue/test", {}, "this is a message from the client")
                console.log("clicked anyway");
                console.log(JSON.stringify(data))
            })
        } catch (error) {
            console.log(error);
        }
    }

    const callbackFn = (message) => {
        if (message.body) {
            console.log(message)
            alert(`got message with body: ${message.body}`)
        } else {
            console.log("got nothing")
        }
    }

    // const subscription = ws.subscribe("/sub/api/chat/rooms/3", callbackFn)

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
            <form>
                <input type="text" ref={EnterRef} id="Enter"/>
                <input type="submit" value="Send Enter" onClick={EndterSendHandle} />
            </form>
            <form>
                <input type="text" ref={EnterRef} id="Enter"/>
                <input type="submit" value="Send Enter" onClick={IssueSendHandle} />
            </form>
            <button onClick={HandleUnsubscribe}>연결 끊기</button>
            <button onClick={()=>navigate('/')}>나가기</button>
            </StChattingItem>
            {
                <>
                <p style={{color:`${msg}`}}>{msg}</p>
                {console.log(`${msg}`)}
                </>
            }
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