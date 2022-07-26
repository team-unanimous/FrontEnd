import React from "react";
import styled from "styled-components";
import MeetingRoomStyle from "../components/MeetingRoomStyle";
import MeetingRoomInfo from "../components/MeetingRoomInfo";
import { getCookie } from "../Cookie";
import jwt_decode from "jwt-decode";
import { useGetMeetSpecific } from "../Hooks/useGetMeetSpecific";
import ThemeOne from "../img/themeOne.png";
// import ThemeTwo from "../img/themeTwo.png";

const MeetingRoomMain = ()=> {
    // const meetingId = useParams().meetingId; // meetingId URL에서 받아옴
    const meetingId = 1;  // 추후 삭제
    const {data : main}= useGetMeetSpecific({meetingId})
    const decoded = jwt_decode(getCookie('token'));
    const nickname = decoded.USER_NICKNAME;
    console.log(main);
    console.log(main?.meetingTheme);
    console.log(main?.meetinSum)

    if (!main){
        return <>Something wrong!</>
    }
    return(
        <>
        <StContainer>
                <StMainWrapper>
                        <StMainThemeWrapper theme={main.meethingTheme}></StMainThemeWrapper>
                </StMainWrapper>
                <StSidebarWrapper>
                    <MeetingRoomInfo thumbnail={main.meetinSum}></MeetingRoomInfo>
                    <MeetingRoomStyle></MeetingRoomStyle>
                </StSidebarWrapper>
        </StContainer>
        </>
    )
}

const StContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: #F2F6F9;
`

const StMainWrapper = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    z-index: 1;
`
const StMainThemeWrapper = styled.div`
    display:flex;
    width: 1474px;
    height: 980px;
    /* left: 34px;
    top: 59px; */
    margin: 24px;
    box-sizing: border-box;
    background-image: ${props => (props.theme == 2 ? `url(${ThemeTwo})` : `url(${ThemeOne})`)};

    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.05));
    border-radius: 24px;

    /* Mask group */
`

const StSidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 979px;
    margin: 24px;
    box-sizing: border-box;
`

export default MeetingRoomMain;