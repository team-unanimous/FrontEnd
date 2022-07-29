import React, { useCallback } from "react";
import styled from "styled-components";
import inputEnterVector from "../img/InputEnterVector.png"
import xbutton from "../img/Xbutton.png"
import { getCookie } from "../Cookie";
import { useRef, useEffect, useState } from "react";
import apis from "../api/main";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useGetMeetSpecific } from "../Hooks/useGetMeetSpecific";


const MeetingRoomStyle = () => {
    // let { meetingId } = useParams();
    // useGetMeetSpecific(data);
    // useEffect(()=>{
    //     console.log(meetingId);
    // })
    const token = getCookie("token");
    const inputRef = useRef(null);
    const [msg, setMsg] = useState([]);
    const [date, setDate] = useState([]);
    const [type, setType] = useState([]);
    const [nickname, setNickname] = useState([]);
    const [sender, setSender] = useState([]);
    const [avatar, setAvatar] = useState([]);

    // createdAt={createdAt}
    // type={type} 
    // roomId={roomId}
    // nickname={nickname}
    // sender={sender}
    // message={message}
    // profileUrl={profileUrl}

    const data = {
        token: token,
        roomId: "2" //어디서 가져올수 있는지 확인 필요, string으로 줘야됨
    }

    const SocketConnect = async (data) => {
        try {
            ws.connect({
                token: data.token
            }, () => {
                ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
                    (response) => {
                        const newMessage = JSON.parse(response.body);
                        // setMsg([...msg, newMessage.message]);
                        setMsg(msg => [...msg, newMessage.message])
                        setDate(date => [...date, newMessage.createdAt])
                        setNickname(nickname => [...nickname, newMessage.nickname])
                        setAvatar(avatar => [...avatar, newMessage.profileUrl])
                        // console.log(msg)
                        console.log(newMessage.message);
                        console.log("보낸사람:", newMessage.sender);
                        console.log("받은 메세지:", newMessage.message);
                    },
                    {
                        token: token
                    });
            });
            console.log("구독 성공")
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        SocketConnect(data);
        console.log("hi");
    })

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


    const HandleSend = useCallback(async (event) => {
        event.preventDefault();
        if (!inputRef.current.value) return;
        try {
            const data = {
                type: "TALK",
                roomId: "2",
                nickname: "string",
                sender: "string",
                message: `${inputRef.current.value}`,
                createdAt: "10시"
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send('/pub/api/chat/message', { token: token }, JSON.stringify(data));
                // ws.send("/queue/test", {}, "this is a message from the client")
                console.log("clicked anyway");
                console.log(JSON.stringify(data))
            })
            inputRef.current.value = ""
        } catch (error) {
            console.log(error);
        }
    }, [msg])
    const HandleSendNoConnection = (event) => {
        event.preventDefault();
        setMessage([...message, inputRef?.current?.value]);
        console.log(message);
        inputRef.current.value = ""
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
                        {
                            msg?.map((msg, i) => {
                                return (

                                    <StChattingMessageBox
                                        key={i}
                                        createdAt={date}
                                        // type={type} 
                                        // roomId={roomId}
                                        nickname={nickname}
                                        sender={sender}
                                        // message={message}
                                        profileUrl={avatar}
                                    >{msg}</StChattingMessageBox>
                                )
                            })
                        }
                    </StChattingMessageWrapper>
                    <StChattingInputWrapper>
                        <StChattingInputForm onSubmit={HandleSend}>
                            {/* <StChattingInputForm onSubmit={HandleSendNoConnection}> */}
                            <StChattingInputBox placeholder="내용을 입력해주세요..." ref={inputRef} />
                            <StSendButton type={"image"} src={inputEnterVector} />
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
    height: 100%;
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

    background: #063250;
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
    background-color: #063250;
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
    background: #063250;
    /* margin-top: auto; */
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
const StChattingMessageBox = styled.div`
   /* Frame 126 */
    display: flex;
    display: inline-block;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;

    width: 273px;
    height: fit-content;

    background: linear-gradient(180deg, rgba(35, 150, 240, 0.8) 0%, rgba(73, 182, 255, 0.8) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 8px 8px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    word-wrap: break-word;
`

const StChattingInputWrapper = styled.div`
    background: #063250;
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

    background: #063250;
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
