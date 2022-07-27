import React from "react";
import styled from "styled-components";
import MeetingRoomStyle from "../components/MeetingRoomStyle";
import MeetingRoomInfo from "../components/MeetingRoomInfo";

import { useGetMeetSpecific } from "../Hooks/useGetMeetSpecific";
import ThemeOne from "../img/themeOne.png";
import ThemeTwo from "../img/themeTwo.svg";

const MeetingRoomMain = ()=> {
    // const meetingId = useParams().meetingId; // meetingId URL에서 받아옴
    const meetingId = 1;  // 추후 삭제
    const {data : main}= useGetMeetSpecific({meetingId})

    console.log(main);
    console.log(main?.meetingTheme);
    console.log(main?.meetinSum);

    // if (!main){
    //     return <>Something wrong!</>
    // }
    if (!main){  //network error 일때
        return (
            <StContainer>
                    <StMainWrapper>
                            <StMainThemeWrapper></StMainThemeWrapper>
                    </StMainWrapper>
                    <StSidebarWrapper>
                        <MeetingRoomInfo></MeetingRoomInfo>
                        <MeetingRoomStyle></MeetingRoomStyle>
                    </StSidebarWrapper>
            </StContainer>
        )
    }
    return(
        <>
        <StContainer>
                <StMainWrapper>
                        <StMainThemeWrapper theme={main.meetingTheme} title={main.meetingTitle}></StMainThemeWrapper>
                </StMainWrapper>
                <StSidebarWrapper>
                    <MeetingRoomInfo thumbnail={main.meetingSum}></MeetingRoomInfo>
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
    height: 979px;
    margin: 24px;
    box-sizing: border-box;
    gap: 18px;
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
`

export default MeetingRoomMain;