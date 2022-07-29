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
                <StBottomButtonsWrapper>
                    <StBottomButtonsLeft>
                        <StBottomLeftBtn>회의록</StBottomLeftBtn>
                        <StBottomLeftBtn>나가기</StBottomLeftBtn>
                        <StBottomLeftBtn>결론 도출</StBottomLeftBtn>
                    </StBottomButtonsLeft>
                    <StBottomButtonsRight>
                        <StBottomRightBtn></StBottomRightBtn>
                        <StBottomRightBtn></StBottomRightBtn>
                        <StBottomRightBtn></StBottomRightBtn>
                        <StBottomRightBtn></StBottomRightBtn>
                    </StBottomButtonsRight>
                </StBottomButtonsWrapper>
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
    height: 100%;
`
const StBottomNav = styled.div`
    background-color: #063250;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StBottomButtonsWrapper = styled.div`
    /* Frame 358 */
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 52px;
`
const StBottomButtonsLeft = styled.div`
    /* Frame 356 */
    width: 928px;
    height: 100%;
    /* background-color: black; */

    margin-left: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StBottomButtonsRight = styled.div`
    /* Frame 356 */
    /* background-color: red; */
    width: 928px;
    height: 100%;

    margin-right: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    justify-self: end;
    margin-left: auto;

    order: 1;
    flex-grow: 0;
`
const StBottomLeftBtn = styled.div`
    /* Frame 426 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 121px;
    height: 52px;

    background: rgba(215, 215, 215, 0.15);
    border-radius: 100px;
    color: #fff;

    justify-content: center;
    align-items: center;
    margin-right: 16px;

    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
`

const StBottomRightBtn = styled.div`
    /* Frame 426 */
    display: flex;
    flex-direction: column;

    width: 52px;
    height: 52px;

    background: rgba(215, 215, 215, 0.15);
    border-radius: 100px;
    color: #fff;

    justify-content: center;
    align-items: center;
    margin-right: 16px;

    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
`

const StSidebarBox = styled.div`
    background-color: yellow;
    width: 22.5rem;
    /* width: 40rem; */
    height: 100%;
`
const StMeetingRoomMainWrapper = styled.div`
    background-color: skyblue;
    width: 100%;
    height: 100%;
    z-index: 1;
`
const StChattingWrapper = styled.div`
    background-color: #063250;
    width: 22.5rem;
    height: 100%;
`

export default MeetingRoomMain;