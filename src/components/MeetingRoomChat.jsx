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

const MeetingRoomChat = ({meetingId})=>{
    const navigate = useNavigate()
    const [color, setColor] = useState(null);
    const [msg, setMsg] = useState("");
    const [issue, setIssue] =useState({}); 

    useEffect(()=>{
        SocketConnect(data);
        return () => {
            alert("alert!!!!")
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
    try{
        ws.connect({
            token: data.token
        }, ()=> {
            ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
            (response) => {
                const newMessage = JSON.parse(response.body);
                if (newMessage.type == "TALK"){
                    setMsg(newMessage.message);
                }
            },
            {
                token: token
            });
        });
    } catch (error) {
    }}
    

    const HandleUnsubscribe = useCallback(()=>{
        try{
            ws.disconnect(
                ()=>{
                    ws.unsubscribe("sub-0");
                },
                {token: getCookie("token")}
            );
            // ws.unsubscribe(`/sub/api/chat/rooms/${data.roomId}`);
        } catch (error) {
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
        roomId: meetingId,
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
        meetingMutate(data);
    }

    const makeChattingroom = (chattingInfo) => {
        return apis.postMeetingroom(chattingInfo)
    }

    const { mutate: chattingMutate } = useMutation(makeChattingroom, {
        onSuccess: (resp) => {
        }
    });

    const chattingRoomHandler = () => {
        const data = {
            meetingId: 1
        }
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
                roomId: meetingId,
                nickname: "string",
                sender: "string",
                message: `${inputRef.current.value}`
            }
            const token = getCookie("token")
            waitForConnection(ws, function(){
                ws.send('/pub/api/chat/message', {token: token}, JSON.stringify(data));
                // ws.send("/queue/test", {}, "this is a message from the client")
            })
        } catch (error) {
        }
    }

    const EndterSendHandle = async (event)=>{
        event.preventDefault();
        try {
            const data = {
                type: "ENTER",
                roomId: meetingId,
                nickname: "string",
                sender: "string",
                message: `this is a Enter message from the client : ${EnterRef.current.value}`,
            }
            const token = getCookie("token")
            waitForConnection(ws, function(){
                ws.send('/pub/api/chat/message', {token: token}, JSON.stringify(data));
                // ws.send("/queue/test", {}, "this is a message from the client")

            })
        } catch (error) {

        }
    }
    const IssueSendHandle = async (event)=>{
        event.preventDefault();
        try {
            const data = {
                type: "ISSUE",
                roomId: meetingId,
                nickname: "string",
                sender: "string",
                message: JSON.stringify({"안건1":"안건입니다", "안건2":"안건이 아닙니다"}),
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send('/pub/api/chat/message', { token: token }, JSON.stringify(data));
                // ws.send("/queue/test", {}, "this is a message from the client")

            })
        } catch (error) {

        }
    }

    const callbackFn = (message) => {
        if (message.body) {

            alert(`got message with body: ${message.body}`)
        } else {

        }
    }

    // const subscription = ws.subscribe("/sub/api/chat/rooms/3", callbackFn)

    return (
        <>  
        {/* <StChattingContainer>
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
        </StChattingContainer> */}
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