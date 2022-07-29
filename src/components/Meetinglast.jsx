import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getCookie } from "../Cookie";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import apis from "../api/main";
import { useQuery, useMutation } from "react-query";
import { useGetMeetSpecific } from "../Hooks/useGetMeetSpecific";

const Meetinglast = () => {

    const meetID = useParams().sessionid;
    const token = getCookie('token');

    const sock = new SockJS("https://sparta-ysh.shop/ws-stomp");
    const ws = Stomp.over(sock);
    // map에 돌려질 애
    const [agendalist, setAgendalist] = useState(null);
    // 바뀌는값 저장
    const [resultagen, setResultagen] = useState(null);

    const datas = {
        token: token,
        roomId: meetingId
    }

    // 웹소켓 연결, 구독 // 구독주소 채팅방이랑 달라야됨
    const wsConnect = (data) => {
        try {
            ws.connect(
                { token: data.token }, () => {
                    ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
                        (resp) => {
                            console.log(resp)
                            const newMessage = JSON.parse(resp.body);
                            if (newMessage.type == "RESULT") {
                                console.log(newMessage.message);
                                const answer = JSON.parse(newMessage.message);
                                setAgendalist(answer);
                            }
                        },
                        { token: token }
                    );
                });
        } catch (error) {
            console.log(error);
        }
    }

    // 강제렌더링
    // setTimeout(() => {
    //     ResultSend();
    // }, 3000);
    // clearTimeout(agendalist);

    useEffect(() => {
        useGetIssueLists({ meetID })  // 안건받아오는애
        ResultSend() // 소켓연결
        wsConnect(datas);
    }, [])

    //get 안건정보
    const useGetIssueLists = async ({ meetID }) => {
        const { data } = await apis.getIssueList({ meetID });
        console.log(data)
        // 안건정보 state저장
        setAgendalist(data)
        return data;
    }



    // 안건결과 서버로 보내기
    const ResultSend = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetingId,
                sender: "string",
                message: JSON.stringify(agendalist),
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
                console.log(JSON.stringify(data))
                console.log("안건 결과 전송")
            })
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

    // 안걸 patch
    const patchAg = async (data) => {
        console.log(data)
        return apis.patchAgenda(data);
    }

    const { mutate } = useMutation(patchAg, {
        onSuccess: (res) => {
            console.log(res)
            setAgendalist(res.data)
            alert("변경에 성공했습니다")
        },
        onError: (error) => {
            alert("변경에 실패했습니다")
        },
    })

    const AgendapatchFunction = () => {
        const data = {
            issueResult: resultagen,
            meetingId: meetingId,
            issueId: 1,
        }
        mutate(data)
    }

    return (
        <div>
            {agendalist?.map((value, index) => {
                return (<div key={index}>
                    <Stdiv>
                        안건{value.issueId}<br />
                        {value.issueContent}
                    </Stdiv>
                    <input onChange={(e) => setResultagen(e.target.value)} />
                    <button onClick={AgendapatchFunction}>버튼</button><br />
                    <Stdivunder>
                        {value.issueResult}
                    </Stdivunder>
                </div>
                )
            })
            }
        </div>
    )
}

const Stdiv = styled.div`
    width: 300px;
    height: 150px;
    background-color: #BBBBBB;
`

const Stdivunder = styled.div`
    width: 300px;
    height: 150px;
    background-color: #F1F1F1;
`

export default Meetinglast;