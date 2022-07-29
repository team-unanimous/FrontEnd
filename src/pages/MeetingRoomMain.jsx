import React, { useEffect } from "react";
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

const MeetingRoomMain = ()=> {
    // const meetingId = useParams().meetingId; // meetingId URL에서 받아옴
    const meetingId = useParams().sessionid;
    const {data : main}= useGetMeetSpecific({meetingId})
    const decoded = jwt_decode(getCookie('token'));
    const nickname = decoded.USER_NICKNAME;
    const navigate = useNavigate();
    const teamId = useParams().teamid;

    const leaveSession = () =>{
        navigate(`/teamboard/${teamId}`)
    }

    // 회의 끝내기
    const quit = async(data)=>{
        const datas = await apis.patchDone(data);
        return datas;
    }

    const {mutate} = useMutation(quit,{
        onSuccess:()=>{
            leaveSession();
        },
        onError:(e)=>{
            console.log(e);
        }
    });

    const quiting = ()=>{
        mutate({
            meetingId : meetingId
        })
    }

    return(
        <>
        <StContainer>
            <StMainThemeWrapper theme={main?.meetingTheme}>
            {main?.meetingCreator==nickname?
            <StQuit onClick={quiting}>
                <img src={closeIcon}/>회의 끝내기
             </StQuit>:
            <StLeave onClick={leaveSession}>
                <img src={closeIcon}/>회의 나가기
            </StLeave>}
                <JoinRoom Theme={main?.meetingTheme} />
            </StMainThemeWrapper>
            <StSidebarWrapper>
                <MeetingRoomInfo thumbnail={main?.meetingSum}></MeetingRoomInfo>
                <MeetingRoomStyle meetingId={meetingId}></MeetingRoomStyle>
            </StSidebarWrapper>
        </StContainer>
        </>
    )
}

const StQuit = styled.div`
    display: flex;
    align-items: center;
    position : absolute;
    left : 36px;
    top : 30px;
    width : 127px;
    height : 12px;
    padding : 14px 20px;
    border-radius: 100px;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.025);
    background-color: rgba(30,34,34,0.4);
    color : white;
    z-index: 10;
    cursor: pointer;
`;

const StLeave = styled.div`
    display: flex;
    align-items: center;
    position : absolute;
    left : 36px;
    top : 30px;
    width : 127px;
    height : 12px;
    padding : 14px 20px;
    border-radius: 100px;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.025);
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
    gap: 18px;
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

export default MeetingRoomMain;