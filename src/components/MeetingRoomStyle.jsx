import React from "react";
import styled from "styled-components";
import inputEnterVector from "../img/InputEnterVector.png"
import xbutton from "../img/Xbutton.png"
import { getCookie } from "../Cookie";
import { ws } from "../api/websocket";
import { useRef, useEffect, useState } from "react";
import apis from "../api/main";
import { useMutation } from "react-query";


const MeetingRoomStyle = ()=>{
    const inputRef = useRef(null);
    // const [roomId, setRoomId] = useState(null);
    const token = getCookie("token");

    const data = {
        token: token,
        roomId: "2"//어디서 가져올수 있는지 확인 필요, string으로 줘야됨
    }

    const SocketConnect = (data) => {
        try{
            ws.connect({
                token: data.token
            }, ()=> {
                ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
                (response) => {
                    const newMessage = JSON.parse(response.body);
                    console.log(newMessage);
                    setMsg(newMessage.message);
                    console.log("보낸사람:", newMessage.sender);
                    console.log("받은 메세지:", newMessage.message)
                },
                {
                    token: token
                });
            });
            console.log("구독 성공")
        } catch (error) {
            console.log(error.response);
        }}

    useEffect(()=>{
        SocketConnect(data);
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

    return (
        <>
            <StChattingContainer>
                <StChattingHeader>
                    <StChattingHeaderWrapper>
                        <StChattingTitle>
                            <StChattingTitleBox>
                                채팅 (0){/* 데이터 바인딩 필요   */}
                            </StChattingTitleBox>
                        </StChattingTitle>
                        <StChattingXbutton>
                            <StChattingXbuttonBox type={"image"} src={xbutton}>

                            </StChattingXbuttonBox>
                        </StChattingXbutton>
                    </StChattingHeaderWrapper>

                </StChattingHeader>
                <StChattingBody>
                    <StChattingMessageWrapper>
                    </StChattingMessageWrapper>
                    <StChattingInputWrapper>
                        <StChattingInputForm onSubmit={HandleSend}>
                            <StChattingInputBox placeholder="내용을 입력해주세요..." ref={inputRef}/>
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
    height: 100vh;
    right: 0px;
    display: flex;
    flex-direction: column;
`
const StChattingHeader = styled.div`
    /* background-color: blue; */
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

    background: #EAEAEA;
`
const StChattingHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 90%;
    height: 4rem;
    /* background-color: yellow; */
    border-bottom: 1px solid #D9D9D9;
`
const StChattingTitle = styled.div`
    background-color: #EAEAEA;
    display:flex;
    flex-direction: row;
    width: 50%;
    height: 100%;;
    justify-content: flex-start;
    align-items: center;
`
const StChattingTitleBox = styled.span`
    font-size: 1.25rem;
`

const StChattingXbutton = styled.div`
    /* align-self: flex-end; */
    /* background-color: blue; */
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
    /* background-color: black; */
    /* Frame 150 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`
const StChattingMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #EAEAEA;
`
const StChattingInputWrapper = styled.div`
    background: #EAEAEA;
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

    background: #FFFFFF;
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
