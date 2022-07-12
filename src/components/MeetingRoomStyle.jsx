import React from "react";
import styled from "styled-components";

const MeetingRoomStyle = ()=>{

    return (
        <>
            <StChattingContainer>
                <StChattingHeader>

                </StChattingHeader>
                <StChattingBody>
                    <StChattingInputWrapper>

                    </StChattingInputWrapper>
                </StChattingBody>
            </StChattingContainer>
        </>
    )
}

const StChattingContainer = styled.div`
    /* 채팅창 */
    position: absolute;
    width: 360px;
    height: 100vh;
    right: 0px;
    top: 34px; // 이후 
    display: flex;
    flex-direction: column;
`
const StChattingHeader = styled.div`
    /* Frame 146 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 91.95%;

    background: #EAEAEA;
`
const StChattingBody = styled.div`
    /* Frame 150 */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px 20px 0px;
    gap: 12px;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 8.08%;
    bottom: 0.03%;
`
const StChattingInputWrapper = styled.div`

`

export default MeetingRoomStyle;
