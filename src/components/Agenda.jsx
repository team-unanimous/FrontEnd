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
import useGetIssueList from "../Hooks/useGetIssueList"
import leftbtn from "../img/icon_arrow_left.svg"
import rightbtn from "../img/Icon_arrow_right.svg"
import stampbtn from "../img/stamp.svg"

const Agenda = () => {


    // useEffect(() => {
    //     wsConnect(data); // 서버와연결 
    //     console.log('hihihihi')
    //     useGetIssueLists();
    //     // setNum(msg[0].issueId - eee);
    //     // HandleSend(); // 서버로 받은 데이터 넣기
    //     // return () => {
    //     //     wsDisConnect();
    //     // }
    // }, [])

    const navigate = useNavigate();
    const token = getCookie('token');

    // 소켓 통신
    const sock = new SockJS("https://sparta-ysh.shop/ws-stomp");
    const ws = Stomp.over(sock);

    const [savedata, setSavedata] = useState("");
    // 안건 내용과 순서를 저장
    const [msg, setMsg] = useState(null);
    // 미팅룸 제목('회의명')
    const [meettitle, setMeettitle] = useState(null);

    // 웹소켓 연결, 구독 // 구독주소 달라야됨

    const wsConnect = (data) => {
        try {
            ws.connect(
                { token: data.token }, () => {
                    ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
                        (resp) => {
                            const newMessage = JSON.parse(resp.body);
                            console.log(newMessage);
                            const newnew = JSON.parse(newMessage.message);
                            console.log(newnew);
                            setMsg(newnew);
                            console.log(msg);
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



    const meetID = 6;
    // get 임시로
    const useGetIssueLists = async (meetID) => {
        console.log({ meetID })
        const { data } = await apis.getIssueList({ meetID });
        console.log(data)
        setSavedata(data)
        return data;
    }

    const { useget } = useGetIssueList({ meetID });


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

    // 웹소켓이 연결될 때 까지 실행하는 함수 
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
            meetingTitle: "'회의명이 들어갈곳'",
            meetingDate: "string",
            meetingTime: "00:00",
            meetingSum: "string",
            meetingTheme: "string",
            meetingDuration: "0시간",
            teamId: 1
        };
        setMeettitle(data.meetingTitle)
        meetingMutate(data);
    }



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


    const [eee, setEee] = useState(1);
    // const [num, setNum] = useState(null);

    useEffect(() => {
        useGetIssueLists();
        console.log(111);
        HandleSend(); // 서버로 받은 데이터 넣기
        console.log(222);
        wsConnect(data); // 서버와연결 
        console.log(333);
        // setNum(msg[0].issueId - eee);

        // return () => {
        //     wsDisConnect();
        // }
    }, [])

    // const num = (msg[0].issueId - eee)

    const numberplus = () => {
        return setEee(eee - 1)
    }

    const numberminus = () => {
        return setEee(eee + 1)
    }


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
                {/* {1 <= num ?
                    <img src={leftbtn} onClick={numberminus} />
                    : <Stnumbtn />
                }
                < div > {meettitle}의{msg[num].issueId}번째 안건<br />{msg[num].issueContent}</div>
                {num <= msg.length - 2 ?
                    <img src={rightbtn} onClick={numberplus} />
                    : <Stnumbtn />
                } */}
                {false ?
                    <StstampBtn src={stampbtn} /> : <></>
                }
            </Bigbox>
        </>
    );
}

const StstampBtn = styled.img`
    display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 182px;
height: 182px;
position: absolute;
left: 507px;
top: 80px;
`

const Stnumbtn = styled.div`
width: 46px;
height: 46px;
border: 1px solid #E3F1F9;
`


const Bigbox = styled.div`
    display: flex;
    width: 1129px;
    height: 324px;
    left: 395px;
    top: 390px;
    position: absolute;
    background-color: #E3F1F9;
    border-radius: 36px;
    justify-content: space-between;
    align-items: center;
    
`

export default Agenda;