import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MeetingRoomStyle from "../components/MeetingRoomStyle";
import MeetingRoomInfo from "../components/MeetingRoomInfo";
import { useGetMeetSpecific } from "../Hooks/useGetMeetSpecific";
import ThemeOne from "../img/themeOne.png";
import { useNavigate, useParams } from "react-router";
import jwt_decode from "jwt-decode";
import { getCookie } from '../Cookie';
import JoinRoom from "../components/WebRTC/JoinRoom";
import ThemeTwo from "../img/themeTwo.svg";
import closeIcon from "../img/5.MeetingRoom/popup_icon_close.svg"
import apis from "../api/main";
import { useMutation } from "react-query";
import Agenda from "../components/Agenda"
import ModalFinish from "../components/ModalFinish";
import Meetinglast from "../components/Meetinglast"


const MeetingRoomMain = () => {
    // const meetingId = useParams().meetingId; // meetingId URL에서 받아옴
    const meetingId = useParams().sessionid;
    const { data: main } = useGetMeetSpecific({ meetingId })
    const decoded = jwt_decode(getCookie('token'));
    const nickname = decoded.USER_NICKNAME;
    const navigate = useNavigate();
    const teamId = useParams().teamid;
    const [page, setPage] = useState("chat"); 


    const leaveSession = () => {
        navigate(`/teamboard/${teamId}`)
    }

    // 회의 끝내기
    const quit = async (data) => {
        const datas = await apis.patchDone(data);
        return datas;
    }

    const { mutate } = useMutation(quit, {
        onSuccess: () => {
            leaveSession();
        },
        onError: (e) => {
        }
    });

    const quiting = () => {
        mutate({
            meetingId: meetingId
        })
    }

    // 채팅 끝내기
    const chat = async (data) => {
        const datas = await apis.postChatFinish(data);
        return datas;
    }

    const { mutate: chatting } = useMutation(chat, {
        onSuccess: () => {
        },
        onError: () => {
        }
    });

    const chatt = () => {
        chatting({
            meetingId: meetingId,
        })
    }



    //모달
    const [openFinish, setOpenFinish] = useState(false);

    const closeModal = () => {
        setOpenFinish(false);
    }

    return (
        <>
            <ModalFinish
                prop={main}
                close={closeModal}
                open={openFinish} />
            <StContainer>
                <StMainThemeWrapper theme={main?.meetingTheme}>
                    {main?.meetingCreator == nickname ?
                        <div onClick={chatt}>
                            <StQuit onClick={() => { setOpenFinish(true) }}>
                                <img src={closeIcon} />회의 끝내기
                            </StQuit>
                        </div> :
                        <div onClick={chatt}>
                            <StLeave onClick={() => { setOpenFinish(true) }}>
                                <img src={closeIcon} />회의 나가기
                            </StLeave></div>}
                    <JoinRoom Theme={main?.meetingTheme} />
                    {/* <Agenda meetID={meetingId} main={main} /> */}
                </StMainThemeWrapper>
                <StSidebarWrapper>
                    <MeetingRoomInfo thumbnail={main?.meetingSum}></MeetingRoomInfo>
                    <StMeetingRoomTabBox>
                        <StMeetingRoomTab>
                            <StChattingTab page={page}
                            onClick={()=>{
                                setPage("chat");
                            }}
                            >채팅</StChattingTab>
                            <StNoteTab page={page}
                            onClick={()=>{
                                setPage("note");
                            }}
                            >회의록</StNoteTab>
                        </StMeetingRoomTab>
                    </StMeetingRoomTabBox>
                    {
                        page == "chat"
                        ? <MeetingRoomStyle meetingId={meetingId}></MeetingRoomStyle>
                        : <Meetinglast meetID={meetingId} main={main} /> //용우님
                    }
                </StSidebarWrapper>
            </StContainer>
        </>

    )
}

const StQuit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position : absolute;
    left : 36px;
    top : 30px;
    width : 117px;
    height : 12px;
    padding : 20px 25px;
    border-radius: 100px;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(30,34,34,0.4);
    color : white;
    font-size: 16px;
    z-index: 10;
    cursor: pointer;
`;

const StLeave = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position : absolute;
    left : 36px;
    top : 30px;
    width : 117px;
    height : 12px;
    padding : 20px 25px;
    border-radius: 100px;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #2396F0;
    color : white;
    z-index: 10;
    cursor: pointer;
`;

const StContainer = styled.div`
    position : relative;
    display: flex;
    flex-direction: row;
    width: 99vw;
    height: 100vh;
    background-color: #F2F6F9;
    justify-content: flex-start;
    align-items: flex-start;
`

const StMainWrapper = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`
const StSidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height:930px;
    margin: 24px;
    box-sizing: border-box;
`
const StMainThemeWrapper = styled.div`
    display:flex;
    width: 1474px;
    height: 930px;
    /* left: 34px;
    top: 59px; */
    margin: 24px;
    box-sizing: border-box;
    background-image: ${props => (props.theme == 2 ? `url(${ThemeOne})` : `url(${ThemeTwo})`)};

    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.05));
    border-radius: 24px;
`
const StMeetingRoomTabBox = styled.div`
    /* Frame 146 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 75px;
    width: 100%;

    border-radius: 8px 8px 0px 0px;
    background-color: #FCFCFC;
    margin-top: 18px;
`
const StMeetingRoomTab = styled.div`
    /* Frame 487 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;

    width: 316px;
    height: 75px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
`
const StChattingTab = styled.div`
    /* 미팅 관리/탭/default */
    display: flex;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 68px;

    flex: none;
    order: 0;
    flex-grow: 0;
    /* color: #2396F0; */
    color: ${props => props.page == "chat" ? "#2396F0": "black"};
    background-color: #FCFCFC;
    border-bottom: solid 4px ${props => props.page == "chat" ? "#2396F0": "#D7D7D7"};
    box-sizing: border-box;
    cursor: pointer;
`
const StNoteTab = styled.div`
    /* 미팅 관리/탭/default */
    display: flex;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 68px;

    flex: none;
    order: 0;
    flex-grow: 0;
    color: ${props => props.page == "note" ? "#2396F0": "black"};
    border-bottom: solid 4px ${props => props.page == "note" ? "#2396F0": "#D7D7D7"};
    box-sizing: border-box;
    cursor: pointer;
`

export default MeetingRoomMain;