import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getCookie } from "../Cookie";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import apis from "../api/main";
import { useQuery, useMutation } from "react-query";
import { useGetMeetSpecific } from "../Hooks/useGetMeetSpecific";
import jwt_decode from "jwt-decode";
import changebtn from "../img/5.MeetingRoom/5.MeetingBook/btn_change.png"
import completebtn from "../img/5.MeetingRoom/5.MeetingBook/btn_conclusion.png"
import cancelbtn from "../img/5.MeetingRoom/5.MeetingBook/btn_cancel.png"


const Meetinglast = ({ meetID, main }) => {

    //임시저장값
    const [save1, setSave1] = useState(null);
    const [save2, setSave2] = useState(null);
    const [save3, setSave3] = useState(null);
    const [save4, setSave4] = useState(null);
    const [save5, setSave5] = useState(null);
    const [save6, setSave6] = useState(null);
    const [save7, setSave7] = useState(null);
    const [save8, setSave8] = useState(null);
    const [save9, setSave9] = useState(null);
    const [save10, setSave10] = useState(null);


    const token = getCookie('token');
    const decoded = jwt_decode(getCookie('token'));

    const sock = new SockJS("https://sparta-ysh.shop/ws-stomp");
    const ws = Stomp.over(sock);
    // 처음에 get저장하는애
    const [agendalist, setAgendalist] = useState(null);

    // 보내는값
    const refone = useRef(null);
    const reftwo = useRef(null);
    const refthree = useRef(null);
    const reffour = useRef(null);
    const reffive = useRef(null);
    const refsix = useRef(null);
    const refseven = useRef(null);
    const refeight = useRef(null);
    const refnine = useRef(null);
    const reften = useRef(null);



    const datas = {
        token: token,
        roomId: meetID
    }

    // 웹소켓 연결, 구독 // 구독주소 채팅방이랑 달라야됨
    const wsConnect = (data) => {
        try {
            ws.connect(
                { token: data.token }, () => {
                    ws.subscribe(`/sub/api/chat/rooms/${data.roomId}`,
                        (resp) => {
                            const newMessage = JSON.parse(resp.body);
                            if (newMessage.type == "RESULT") {
                                // console.log(newMessage)
                                const newArray = JSON.parse(newMessage.message)
                                // console.log(newArray)
                                if (newArray.id === 1) {
                                    setSave1(newArray.value)
                                }
                                if (newArray.id === 2) {
                                    setSave2(newArray.value)
                                }
                                if (newArray.id === 3) {
                                    setSave3(newArray.value)
                                }
                                if (newArray.id === 4) {
                                    setSave4(newArray.value)
                                }
                                if (newArray.id === 5) {
                                    setSave5(newArray.value)
                                }
                                if (newArray.id === 6) {
                                    setSave6(newArray.value)
                                }
                                if (newArray.id === 7) {
                                    setSave7(newArray.value)
                                }
                                if (newArray.id === 8) {
                                    setSave8(newArray.value)
                                }
                                if (newArray.id === 9) {
                                    setSave9(newArray.value)
                                }
                                if (newArray.id === 10) {
                                    setSave10(newArray.value)
                                }
                            }
                        },
                        { token: token }
                    );
                });
        } catch (error) {
        }
    }

    useEffect(() => {
        wsConnect(datas);
        useGetIssueLists({ meetID })  // 안건받아오는애
    }, [])

    // get 하는곳
    const useGetIssueLists = async ({ meetID }) => {
        const { data } = await apis.getIssueList({ meetID });
        // 이걸 안해주면 새로고침할때마다 데이터날라감 state값이라
        // 소켓은 즉발이고 axios는 통신시간때문에 무조건느려서 오류가없다 머리통터질뻔
        setSave1(data?.[0]?.issueResult)
        setSave2(data?.[1]?.issueResult)
        setSave3(data?.[2]?.issueResult)
        setSave4(data?.[3]?.issueResult)
        setSave5(data?.[4]?.issueResult)
        setSave6(data?.[5]?.issueResult)
        setSave7(data?.[6]?.issueResult)
        setSave8(data?.[7]?.issueResult)
        setSave9(data?.[8]?.issueResult)
        setSave10(data?.[9]?.issueResult)
        // 안건정보 state저장
        setAgendalist(data)
        return data;
    }

    // 안건결과 서버로 보내기 1~10 // 안나눠주면 답이없음 이방법이최선
    const ResultSendone = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "1",
                message: JSON.stringify({ id: 1, value: `${refone.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendtwo = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "2",
                message: JSON.stringify({ id: 2, value: `${reftwo.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendthree = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 3, value: `${refthree.current.value}` })

            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendfour = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 4, value: `${reffour.current.value}` })

            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendfive = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 5, value: `${reffive.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendsix = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 6, value: `${refsix.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendseven = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 7, value: `${refseven.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendeight = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 8, value: `${refeight.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendnine = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 9, value: `${refnine.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
        }
    }

    const ResultSendten = () => {
        try {
            const data = {
                type: "RESULT",
                roomId: meetID,
                sender: "string",
                message: JSON.stringify({ id: 10, value: `${reften.current.value}` })
            }
            const token = getCookie("token")
            waitForConnection(ws, function () {
                ws.send("/pub/api/chat/message", { token: token }, JSON.stringify(data));
            })
        } catch (error) {
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

    // 안건 patch
    const patchAg = async (data) => {
        console.log(data)
        const patchagenda = await apis.patchAgenda(data);
        return patchagenda;
    }

    const { mutate } = useMutation(patchAg, {
        onSuccess: () => {
            alert("변경에 성공했습니다")
        },
        onError: (error) => {
            alert("변경에 실패했습니다")
        },
    })

    const AgendaFunction1 = () => {
        mutate({
            issueResult: refone.current.value,
            meetingId: meetID,
            issueId: agendalist[0].issueId,
        })
    }

    const AgendaFunction2 = () => {
        const data = {
            issueResult: reftwo.current.value,
            meetingId: meetID,
            issueId: agendalist[1].issueId,
        }
        mutate(data)
    }

    const AgendaFunction3 = () => {
        const data = {
            issueResult: refthree.current.value,
            meetingId: meetID,
            issueId: agendalist[2].issueId,
        }
        mutate(data)
    }

    const AgendaFunction4 = () => {
        const data = {
            issueResult: reffour.current.value,
            meetingId: meetID,
            issueId: agendalist[3].issueId,
        }
        mutate(data)
    }

    const AgendaFunction5 = () => {
        const data = {
            issueResult: reffive.current.value,
            meetingId: meetID,
            issueId: agendalist[4].issueId,
        }
        mutate(data)
    }

    const AgendaFunction6 = () => {
        const data = {
            issueResult: refsix.current.value,
            meetingId: meetID,
            issueId: agendalist[5].issueId,
        }
        mutate(data)
    }

    const AgendaFunction7 = () => {
        const data = {
            issueResult: refseven.current.value,
            meetingId: meetID,
            issueId: agendalist[6].issueId,
        }
        mutate(data)
    }

    const AgendaFunction8 = () => {
        const data = {
            issueResult: refeight.current.value,
            meetingId: meetID,
            issueId: agendalist[7].issueId,
        }
        mutate(data)
    }

    const AgendaFunction9 = () => {
        const data = {
            issueResult: refnine.current.value,
            meetingId: meetID,
            issueId: agendalist[8].issueId,
        }
        mutate(data)
    }

    const AgendaFunction10 = () => {
        const data = {
            issueResult: reften.current.value,
            meetingId: meetID,
            issueId: agendalist[9].issueId,
        }
        mutate(data)
    }

    console.log(agendalist)
    console.log(agendalist?.[0]?.issueContent)
    console.log(save1)
    console.log(save2)

    // 방장유저 선별
    console.log(main)
    console.log(main?.meetingCreator)
    console.log(decoded?.USER_NICKNAME)

    const [btnopen1, setBtnopen1] = useState(null);
    const [btnopen2, setBtnopen2] = useState(null);
    const [btnopen3, setBtnopen3] = useState(null);
    const [btnopen4, setBtnopen4] = useState(null);
    const [btnopen5, setBtnopen5] = useState(null);
    const [btnopen6, setBtnopen6] = useState(null);
    const [btnopen7, setBtnopen7] = useState(null);
    const [btnopen8, setBtnopen8] = useState(null);
    const [btnopen9, setBtnopen9] = useState(null);
    const [btnopen10, setBtnopen10] = useState(null);

    console.log(btnopen1)

    return (
        <>
            <StChattingContainer>
                <StChattingBody>
                    <StChattingMessageWrapper>
                        {agendalist?.[0] ?
                            <StAgendaBox>
                                {save1 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건1</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[0].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건1</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[0].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen1 === 1 ?
                                            <StInputBox>
                                                <StInput ref={refone}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save1 ? save1 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen1(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendone(); AgendaFunction1(); setBtnopen1(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save1}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen1(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save1}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[1] ?
                            <StAgendaBox>
                                {save2 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건2</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[1].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건2</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[1].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen2 === 1 ?
                                            <StInputBox>
                                                <StInput ref={reftwo}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save2 ? save2 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen2(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendtwo(); AgendaFunction2(); setBtnopen2(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save2}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen2(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save2}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[2] ?
                            <StAgendaBox>
                                {save3 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건3</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[2].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건3</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[2].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen3 === 1 ?
                                            <StInputBox>
                                                <StInput ref={refthree}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save3 ? save3 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen3(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendthree(); AgendaFunction3(); setBtnopen3(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save3}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen3(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save3}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[3] ?
                            <StAgendaBox>
                                {save4 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건4</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[3].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건4</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[3].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen4 === 1 ?
                                            <StInputBox>
                                                <StInput ref={reffour}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save4 ? save4 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen4(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendfour(); AgendaFunction4(); setBtnopen4(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save4}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen4(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save4}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[4] ?
                            <StAgendaBox>
                                {save5 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건5</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[4].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건5</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[4].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen5 === 1 ?
                                            <StInputBox>
                                                <StInput ref={reffive}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save5 ? save5 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen5(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendfive(); AgendaFunction5(); setBtnopen5(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save5}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen5(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save5}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[5] ?
                            <StAgendaBox>
                                {save6 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건6</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[5].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건6</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[5].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen6 === 1 ?
                                            <StInputBox>
                                                <StInput ref={refsix}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save6 ? save6 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen6(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendsix(); AgendaFunction6(); setBtnopen6(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save6}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen6(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save6}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[6] ?
                            <StAgendaBox>
                                {save7 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건7</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[6].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건7</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[6].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen7 === 1 ?
                                            <StInputBox>
                                                <StInput ref={refseven}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save7 ? save7 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen7(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendseven(); AgendaFunction7(); setBtnopen7(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save7}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen7(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save7}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[7] ?
                            <StAgendaBox>
                                {save8 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건8</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[7].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건8</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[7].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen8 === 1 ?
                                            <StInputBox>
                                                <StInput ref={refeight}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save8 ? save8 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen8(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendeight(); AgendaFunction8(); setBtnopen8(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save8}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen8(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save8}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[8] ?
                            <StAgendaBox>
                                {save9 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건9</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[8].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건9</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[8].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen9 === 1 ?
                                            <StInputBox>
                                                <StInput ref={refnine}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save9 ? save9 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen9(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendnine(); AgendaFunction9(); setBtnopen9(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save9}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen9(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save9}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                        {agendalist?.[9] ?
                            <StAgendaBox>
                                {save10 === null ?
                                    <Stdiv>
                                        <StAgendaTitle>안건10</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[9].issueContent}</StAgendaWhite>
                                    </Stdiv>
                                    :
                                    <StdivBlue>
                                        <StAgendaTitle>안건10</StAgendaTitle>
                                        <StAgendaWhite>{agendalist?.[9].issueContent}</StAgendaWhite>
                                    </StdivBlue>
                                }
                                <Stdivunder>
                                    {main?.meetingCreator === decoded?.USER_NICKNAME ?
                                        (btnopen10 === 1 ?
                                            <StInputBox>
                                                <StInput ref={reften}
                                                    placeholder={"결론 내용을 입력해주세요"}
                                                    defaultValue={save10 ? save10 : null} />
                                                <StComBox>
                                                    <StCancelBtn src={cancelbtn} onClick={() => setBtnopen10(null)} />
                                                    <StCompleteBtn src={completebtn} onClick={() => { ResultSendten(); AgendaFunction10(); setBtnopen10(null); }} />
                                                </StComBox>
                                            </StInputBox>
                                            :
                                            <StChangeBox>
                                                <StAgendaBlack>{save10}</StAgendaBlack>
                                                <StChangeImgBox>
                                                    <img src={changebtn} onClick={() => setBtnopen10(1)} />
                                                </StChangeImgBox>
                                            </StChangeBox>
                                        )
                                        :
                                        <StAgendaBlack>{save10}</StAgendaBlack>
                                    }
                                </Stdivunder>
                            </StAgendaBox>
                            :
                            <></>}
                    </StChattingMessageWrapper>
                </StChattingBody>
            </StChattingContainer>
        </ >
    )
}

const StAgendaBox = styled.div`
    display: flex;
    flex-direction: column;
`

const StChangeBox = styled.div`
    display: flex;
    flex-direction: column;

`

const StChangeImgBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
width: 275px;
`

const StInputBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
width: 250px;
height: 80px;
`
const StInput = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
border-radius: 8px;
width: 250px;
height: 25px; 
margin-bottom: 15px;
`

const StChattingMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const StChattingBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 670px;
    background-color: white;
    /* min-height: 0px; */
    /* overflow-x: hidden; */
`


const StChattingContainer = styled.div`
    /* 채팅창 */
    position: relative;
    width: 360px;
    height: 734px;
    display: flex;
    flex-direction: column;

    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
    border-radius: 8px;

    flex: none;
    order: 1;
    flex-grow: 1;
`

const StAgendaTitle = styled.div`
width: 280px;
height: 21px;
font-weight: 700;
font-size: 16px;
line-height: 21px;
margin-bottom: 8px;
color: #FCFCFC;
`

const StAgendaWhite = styled.div`
width: 280px;
height: 26px;
font-family: 'Hallym Gothic';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
color: #FCFCFC;
`

const StAgendaBlack = styled.div`
width: 280px;
/* height: 46px; */
min-height: 0px;
font-family: 'Hallym Gothic';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
color: #1E2222;
`

const StComBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 200px;
`

const StCancelBtn = styled.img`
display: flex;
justify-content: center;
align-items: center;
height: 35px;
border-radius: 5px;
cursor: pointer;
`

const StCompleteBtn = styled.img`
display: flex;
justify-content: center;
align-items: center;
width: 125px;
height: 35px;
border-radius: 5px;
background-color: #063250;
cursor: pointer;
`

const StBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 125px;
height: 39px;
background: #063250;
border-radius: 5px;
cursor: pointer;
`

const StdivBlue = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
width: 272px;
height: 72px;
background-color: #2396F0;
border-radius: 8px 8px 0px 0px;
`

const Stdiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
width: 272px;
height: 72px;
background-color: #BBBBBB;
border-radius: 8px 8px 0px 0px;
`

const Stdivunder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
width: 272px;
/* height: 107px; */
min-height: 0px;
background-color: #F1F1F1;
border-radius: 0 0 8px 8px;
margin-bottom: 15px;
`

export default Meetinglast;