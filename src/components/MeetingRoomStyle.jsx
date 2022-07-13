import React from "react";
import styled from "styled-components";
import inputEnterVector from "../img/InputEnterVector.png"
import Header from "./Header";


const MeetingRoomStyle = ()=>{

    return (
        <>
            <StChattingContainer>
                <StChattingHeader>

                </StChattingHeader>
                <StChattingBody>
                    <StChattingInputWrapper>
                        <StChattingInputForm>
                            <StChattingInputBox placeholder="내용을 입력해주세요..."/>
                            <StSendButton type={"image"} src={inputEnterVector}/>
                        </StChattingInputForm>
                    </StChattingInputWrapper>
                </StChattingBody>
            </StChattingContainer>
        </>
    )
}

const StChattingContainer = styled.div`
    /* 채팅창 */
    position: relative;
    width: 360px;
    height: 100%;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-self:flex-end;
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
    background-color: black;
    /* Frame 150 */
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 8.08%;
    bottom: 0.03%;
`
const StChattingInputWrapper = styled.div`
    /* background: #EAEAEA; */
    background-color: red;
    /* Frame 142 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    width: 100%;
    height: 84px;

    border-top: 2px solid white;

    flex: none;
    order: 1;
    flex-grow: 0;

`
const StChattingInputForm = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid grey;
    padding: 2px;
    justify-content: center;
    align-items: center;
`
const StChattingInputBox = styled.input`
    /* Frame 140 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 2;

    width: 19rem;
    height: 2.75rem;

    padding-left: 1rem;

    background: #FFFFFF;
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StSendButton = styled.input`
    height: 1.5rem;
    width: 1.5rem;
`


export default MeetingRoomStyle;
