import React from "react";
import styled from "styled-components";
import MeetingRoomStyle from "../components/MeetingRoomStyle";

const MeetingRoomMain = ()=> {

    return(
        <>
        <StContainer>
            <StMainWrapper>
                <StSidebarBox>
                    회의록 또는 화상 채팅 컴포넌트
                </StSidebarBox>
                <StMeetingRoomMainWrapper>
                    화상 채팅 또는 회의 안건 컴포넌트
                </StMeetingRoomMainWrapper>
                <StChattingWrapper>
                    <MeetingRoomStyle></MeetingRoomStyle>
                </StChattingWrapper>

            </StMainWrapper>
            <StBottomNav>

            </StBottomNav>
        </StContainer>
        </>
    )
}

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
const StMainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: blue;
    height: 100%;
`
const StBottomNav = styled.div`
    background-color: black;
    width: 100%;
    height: 5rem;
`
const StSidebarBox = styled.div`
    background-color: yellow;
    width: 22.5rem;
    height: 100%;
`
const StMeetingRoomMainWrapper = styled.div`
    background-color: skyblue;
    width: 100%;
    height: 100%;
    z-index: 1;
`
const StChattingWrapper = styled.div`
    background-color: red;
    width: 22.5rem;
    height: 100%;
`

export default MeetingRoomMain;