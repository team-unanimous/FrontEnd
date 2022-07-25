import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from 'react-router';
import { useSelector } from "react-redux/es/exports";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { getCookie } from "../Cookie";
import apis from "../api/main";
import axis from "../api/sub"
import { useQuery, useMutation } from "react-query";
// 안건정보 get
import useGetIssueList from "../Hooks/useGetIssueList"

const Agenda = () => {

    const navigate = useNavigate();
    const token = getCookie('token');

    // 소켓 통신
    const sock = new SockJS("https://sparta-ysh.shop/ws-stomp");
    const ws = Stomp.over(sock);

    const [savedata, setSavedata] = useState("");
    // 안건 내용과 순서를 저장
    const [msg, setMsg] = useState("");
    // 미팅룸 제목('회의명')
    const [meettitle, setMeettitle] = useState(null);

    // 웹소켓 연결, 구독 // 구독주소 달라야됨
    const wsConnect = (data) => {
        try {
            ws.connect(
                { token: data.token }, () => {
                    ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
                        (data) => {
                            const newMessage = JSON.parse(data.body);
                            console.log(newMessage);
                            const newnew = JSON.parse(newMessage.message);
                            console.log(newnew);
                            setMsg(newnew);
                            console.log(newnew[0]);
                        },
                        { token: token }
                    );
                });
        } catch (error) {
            console.log(error);
        }
    }

    const data = {
        token: token,
        roomId: "1"
    }

    useEffect(() => {
        wsConnect(data); // 서버와연결 성공
        useGetIssueLists();
        // HandleSend(); // 서버로 받은 데이터 넣기
        // return () => {
        //     wsDisConnect();
        // }
    }, [])

    const meetID = 6;
    // get 임시로
    const useGetIssueLists = async ({ meetID }) => {
        console.log({ meetID })
        const { data } = await apis.getIssueList({ meetID });
        console.log(data)
        setSavedata(data)
        return data;
    }
    const { useget } = useGetIssueList({ meetID });
    // console.log(useGetIssueLists({meetID}))
    // console.log(savedata)
    // console.log(savedata[(0)])
    // console.log(savedata[(0 + 1)])
    // console.log(savedata.length)


    // 연결해제, 구독해제 
    function wsDisConnect() {
        try {
            ws.disconnect(
                () => {
                    ws.unsubscribe('sub-0');
                },
                { token: token }
            );
        } catch (error) {
            console.log(error);
        }
    }

    // 웹소켓이 연결될 때 까지 실행하는 함수 > ㅇㅇ
    function waitForConnection(ws, callback) {
        setTimeout(
            function () {
                // 연결되었을 때 콜백함수 실행
                if (ws.ws.readyState === 1) {
                    callback();
                    // 연결이 안 되었으면 재호출
                } else {
                    waitForConnection(ws, callback);
                }
            },
            1 // 밀리초 간격으로 실행
        );
    }


    // 서버로 유저정보 보내기
    // 만약이게안되면 useget에서 쪼개서 하나씩 넣기
    // 소켓연결 + 데이터정보 유저한테 보내기 


    // 미팅 생성하기 > 여기서 임시로 가져오기
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
            meetingTitle: "회의명이 들어갈곳",
            meetingDate: "string",
            meetingTime: "00:00",
            meetingSum: "string",
            meetingTheme: "string",
            meetingDuration: "0시간",
            teamId: 1
        };
        console.log(data);
        setMeettitle(data.meetingTitle)
        meetingMutate(data);
    }
    console.log(meettitle)
    // 채팅룸 생성하기 > 여기서 임시로 가져오기
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

    // console.log(msg)
    // console.log(savedata)
    // console.log(msg[0])

    // 메시지보내기
    const HandleSend = async (event) => {
        event.preventDefault();
        try {
            const data = {
                type: "TALK",
                roomId: 1,
                sender: "string",
                message: JSON.stringify(savedata),
                createdAt: "22시"
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
                // setAgendatitle(JSON.stringify(data)).message
                console.log(JSON.stringify(data))
            })
        } catch (error) {
            console.log(error);
        }
    }

    // 메시지보내기2 타입이 다름
    const EndterSendHandle = async (event) => {
        event.preventDefault();
        try {
            const data = {
                type: "ENTER",
                roomId: "1",
                nickname: "string",
                sender: "string",
                message: "1",
                createdAt: "10시"
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
                console.log(JSON.stringify(data))
            })
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(msg)
    // console.log(msg[0].issueContent)


    // 안건 좌우 +1 -1 안되면 state로 렌더링되야되는데 소켓하면서 렌더링가능?
    // 아니면 계속 쏴보는걸로 
    const numberplus = ({ issueiddata }) => {
        return (issueiddata + 1)
    }

    const numberminus = ({ issueiddata }) => {
        return (issueiddata - 1)
    }
    console.log(msg)
    console.log(msg[0])

    return (
        // 안건개수 최대 10까지
        <>
            <button onClick={meetingRoomHandler}>미팅룸 만들기</button><br />
            <button onClick={chattingRoomHandler}>채팅룸 만들기</button><br />
            <button onClick={EndterSendHandle}>결론확정버튼</button><br />
            <button onClick={useGetIssueLists}> 안건받기</button>
            <button onClick={wsDisConnect}>연결해제</button>
            <form>
                <input type="submit" value="Send" onClick={HandleSend} />
            </form>
            <Bigbox>
                <button onClick={numberminus}>왼쪽</button>
                {/* <div>{meettitle}의 {msg[0].issueId}번째 안건<br />{msg[0].issueContent}</div> */}
                {/* <div>{msg.map((msg, index) => (
                    <div key={index}>
                        {msg[0].issueId}번째 안건<br />{msg[0].issueContent}
                    </div>
                ))}
                </div> */}
                {/* {false ?
                    <StCircleBox>
                        <StCircletitle>결론 <br />확정</StCircletitle>
                    </StCircleBox> : <></>
                } */}
                <button onClick={numberplus}>오른쪽</button>
            </Bigbox>
        </>
    );
}

const StCircletitle = styled.div`
width: 182px;
height: 116px;
font-weight: 700;
font-size: 48px;
line-height: 58px;
text-align: center;
color: #000000;
`

const StCircleBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 182px;
height: 182px;
position: absolute;
left: 507px;
top: 80px;
border: 10px solid #000000;
border-radius: 50%;
transform: rotate(21.03deg);
`


const Bigbox = styled.div`
    display: flex;
    width: 1129px;
    height: 324px;
    left: 395px;
    top: 390px;
    position: absolute;
    background-color: #D9D9D9;
    border-radius: 36px;
    justify-content: space-between;
    align-items: center;
`

export default Agenda;