import React, { useCallback, useRef, useEffect, useState  } from "react";
import { ws } from "../api/websocket";
import { getCookie } from "../Cookie";
import jwt_decode from "jwt-decode";
import styled from "styled-components";
import ChatMessageBox from "./ChatMessageBox";
import inputEnterVector from "../img/InputEnterVector.png"
import xbutton from "../img/Xbutton.png"
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import Stomp from "stompjs";
import sockJS from "sockjs-client";

const MeetingRoomStyle = ({meetingId})=>{
    const token = getCookie("token");
    const decoded = jwt_decode(getCookie('token'));
    const myName = decoded.USER_NICKNAME;
    const inputRef = useRef(null);
    const [msg, setMsg] = useState([]);

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

    const data = {
        token: token,
        roomId: meetingId // "1" //어디서 가져올수 있는지 확인 필요, string으로 줘야됨
    }
    
    //Socket 통신
    const SocketConnect = (data) => {
        try{
            ws.connect({
                token: data.token
            }, ()=> {
                ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
                (response) => {
                    const newMessage = JSON.parse(response.body);
                    console.log(newMessage)
                    if (newMessage.type == "TALK") {
                        setMsg(msg=>[...msg, newMessage])
                    }
                },
                {
                    token: data.token
                });
            });
            console.log("구독 성공")
        } catch (error) {
            console.log(error.response);
        }}

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

    const HandleSend = useCallback( async (event)=>{
        event.preventDefault();
        if(!inputRef.current.value) return;
        try {
            const data = {
                type: "TALK",
                roomId: meetingId,
                nickname: "string",
                sender: "string",
                message: `${inputRef.current.value}`,
            }
            const token = getCookie("token")
            waitForConnection(ws, function(){
                ws.send('/pub/api/chat/message', {token: token}, JSON.stringify(data));
                // ws.send("/queue/test", {}, "this is a message from the client")
                console.log("clicked anyway");
                console.log(JSON.stringify(data))  
            })
            inputRef.current.value = ""
        } catch (error) {
            console.log(error);
        }
    }, [msg])
    
    //배포시 삭제
    const HandleSendNoConnection = (event)=> {
        event.preventDefault();
        setMsg([...msg, inputRef?.current?.value]);
        inputRef.current.value = ""
    }
    
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
    

    return (
        <>
            <StChattingContainer>
                <StChattingHeader>
                    <StChattingHeaderWrapper>
                        <StChattingTabBox>
                            채팅
                        </StChattingTabBox>
                        <StNoteTabBox>
                            회의록
                        </StNoteTabBox>
                        {/* <StChattingTitle> */}
                            {/* <StChattingTitleBox> */}
                                {/* 채팅 (0)데이터 바인딩 필요   */}
                            {/* </StChattingTitleBox> */}
                        {/* </StChattingTitle> */}
                        {/* <StChattingXbutton> */}
                            {/* <StChattingXbuttonBox type={"image"} src={xbutton}> */}
                            {/* </StChattingXbuttonBox> */}
                        {/* </StChattingXbutton> */}
                    </StChattingHeaderWrapper>
                </StChattingHeader>
                <StChattingBody>
                    <StChattingMessageWrapper>
                        {
                            msg?.map((msg, i) =>{
                                return (
                                    // <StChattingMessageBox
                                    // key={i}
                                    // createdAt={date}
                                    // nickname={nickname}
                                    // sender={sender}
                                    // profileUrl={avatar}
                                    // isMe={isMe}
                                    // >
                                    // {msg}
                                    // </StChattingMessageBox>
                                    <ChatMessageBox
                                    key={i}
                                    createdAt={msg.createdAt}
                                    nickname={msg.nickname}
                                    sender={msg.sender}
                                    profileUrl={msg.profileUrl}
                                    myName={myName}
                                    msg={msg.message}
                                    >
                                    {msg.message}
                                    </ChatMessageBox>
                                )
                            })
                        }
                    </StChattingMessageWrapper>
                    <StChattingInputWrapper>
                        <StChattingInputForm onSubmit={HandleSend}>
                        {/* <StChattingInputForm onSubmit={HandleSendNoConnection}> */}
                            <StChattingInputBox placeholder="내용을 입력해주세요..." ref={inputRef} maxLength="100"/>
                            <StSendButton type={"image"} src={inputEnterVector}/>
                        </StChattingInputForm>
                    </StChattingInputWrapper>
                </StChattingBody>
            </StChattingContainer>
        </>
    )
}

const StChattingContainer = styled.div`
    /* 채팅창 */
    position: relative;
    width: 360px;
    height: 734px;
    right: 0px;
    display: flex;
    flex-direction: column;

    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
    border-radius: 8px;

    flex: none;
    order: 1;
    flex-grow: 1;
`
const StChattingHeader = styled.div`
    /* Frame 146 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    /* position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 91.95%; */
    height: 100px;

    background: #FCFCFC;
`
const StChattingHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 90%;
    height: 4rem;
    border-bottom: 1px solid #D9D9D9;
`
const StChattingTabBox = styled.div`
    /* 미팅 관리/탭/default */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 140px;
    height: 68px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StNoteTabBox = styled.div`
    /* 미팅 관리/탭/disabled */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 140px;
    height: 68px;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StChattingTitle = styled.div`
    background-color: #FCFCFC;
    display:flex;
    flex-direction: row;
    width: 50%;
    height: 100%;;
    justify-content: flex-start;
    align-items: center;
`
const StChattingTitleBox = styled.span`
    font-size: 1.25rem;
    color: #FCFCFC;
`

const StChattingXbutton = styled.div`
    /* align-self: flex-end; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
`
const StChattingXbuttonBox = styled.input`
    /* background-color: #fff; */
    height: 1rem;
    width: 1rem;
`

const StChattingBody = styled.div`
    /* Frame 150 */
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    height: 100%;
`
const StChattingMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #FCFCFC;
    overflow-x: hidden;
  ::-webkit-scrollbar{
    width:10px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #2f3542;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 1rem;
  }
`

// const StChattingMessageBox = styled.div`
//    /* Frame 126 */
//     display: flex;
//     display: inline-block;
//     flex-direction: row;
//     justify-self: flex-end;
//     margin-left: auto;
//     padding: 16px;
//     gap: 10px;
//     margin-top: 20px;

//     width: 273px;
//     height: fit-content;

//     background: linear-gradient(180deg, rgba(35, 150, 240, 0.8) 0%, rgba(73, 182, 255, 0.8) 100%);
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
//     border-radius: 8px 0px 8px 8px;

//     flex: none;
//     order: 0;
//     align-self: stretch;
//     flex-grow: 0;
//     word-wrap: break-word;
//     color: white;
// `

const StChattingInputWrapper = styled.div`
    background: #FCFCFC;
    /* background-color: blue; */
    /* Frame 142 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    width: 100%;
    height: 84px;

    border-top: 1px solid #D9D9D9;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StChattingInputForm = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid grey;
    padding: 2px;
    justify-content: center;
    align-items: center;
`
const StChattingInputBox = styled.input`
    /* Frame 140 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 2;

    width: 19rem;
    height: 2.75rem;

    padding-left: 1rem;

    background: #F1f1f1;
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StSendButton = styled.input`
    height: 1.5rem;
    width: 1.5rem;
`


export default MeetingRoomStyle;
