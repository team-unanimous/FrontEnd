import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetMeetSpecific } from "../Hooks/useGetMeetSpecific";
import useGetTeamMain from "../Hooks/useGetTeamMain";
import back_btn from "../img/back_btn.png";

const ResultDoc = () => {
    const teamId = useParams().teamid;
    const meetingId = useParams().sessionid;
    const { data: teamInfo } = useGetTeamMain({ teamId });
    const { data: meetingInfo } = useGetMeetSpecific({ meetingId });
    const issues = meetingInfo?.issues
    const navigate = useNavigate();
    console.log(issues);
    return(
        <>
            <StContainer>
                <StBackButtonDiv
                    onClick={() => navigate(-1)}>
                    <img src={back_btn}/>
                    돌아가기</StBackButtonDiv>
                <StWrapper>
                    <StContentBox>
                        <StTitle>
                            회의록
                        </StTitle>
                        <StTopInfo>
                            <StInfoUpper>
                                <StDataTitleBox>팀  명</StDataTitleBox>
                                <StShortInputBox>{teamInfo?.teamname}</StShortInputBox>
                                <StDataTitleBox>주최자</StDataTitleBox>
                                <StShortInputBox>{meetingInfo?.meetingCreator}</StShortInputBox>
                            </StInfoUpper>
                            <StInfoMid>
                                <StDataTitleBox>회 의 명</StDataTitleBox>
                                <StLongInputBox>{meetingInfo?.meetingTitle}</StLongInputBox>
                            </StInfoMid>
                            <StInfoLower>
                                <StDataTitleBox>날 짜</StDataTitleBox>
                                <StLongInputBox>{meetingInfo?.meetingDate}</StLongInputBox>
                            </StInfoLower>
                        </StTopInfo>
                        <StAgendaWrapper>
                            { (issues)
                                ?(issues?.map((item, index)=>{
                                    return (
                                    <StAgendaItem key={index}>
                                        <StAgendaTitle>• 안건 {index+1} </StAgendaTitle>
                                        <StAgendaBody>{item.issueContent}
                                        <StAgendaResult>{item.issueResult}</StAgendaResult>
                                        </StAgendaBody>
                                    </StAgendaItem>
                                    )}))
                                :<></>
                            }
                        </StAgendaWrapper>
                    </StContentBox>
                </StWrapper>
            </StContainer>
        </>
    )
}

const StAgendaResult = styled.div`
    width: 100%;
    height: fit-content;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #1E2222;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`
const StBackButtonDiv = styled.div`
    /* Frame 556 */
    display: flex;
    flex-direction: row;
    padding: 8px 16px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: #2396F0;

    position: fixed;
    width: 121px;
    height: 36px;
    left: 29px;
    top: 62px;

    background: #EBF7FF;
    border-radius: 100px;
    cursor: pointer;
`

const StAgendaBody = styled.div`
    /* Frame 542 */
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;

    width: 793px;
    height: fit-content;
    min-height: 68px;

    border: 1px solid #888888;

    flex: none;
    order: 1;
    flex-grow: 0;
    word-break: break-all;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
`
const StAgendaTitle = styled.div`
    /* Frame 539 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    box-sizing: border-box;

    width: 793px;
    height: 40px;

    /* Primary/darkblue */

    background: #063250;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    color: white;
`
const StAgendaItem = styled.div`
    
`
const StDataTitleBox = styled.div`
    /* Frame 532 */
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 130px;
    height: 40px;

    background: #F1F1F1;

    border: 1px solid #888888;

    flex: none;
    flex-grow: 0;
    margin: 0px 0px;
`

const StLongInputBox = styled.div`
    /* Rectangle 182 */
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;

    width: 663px;
    height: 40px;

    border: 1px solid #888888;
    border-left: none;

    flex: none;
    flex-grow: 0;
    background-color: #fff;
`

const StShortInputBox = styled.div`
    /* Frame 533 */
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;

    width: 268px;
    height: 40px;

    border: 1px solid #888888;

    flex: none;
    flex-grow: 0;
    margin: 0px -1px;
    background-color: #fff;
`
const StInfoUpper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 33.3%;
`
const StInfoMid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 33.3%;
`
const StInfoLower = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 33.3%;
`
const StAgendaWrapper = styled.div`
    /* Frame 547 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;

    width: 793px;
    height: fit-content;

    flex: none;
    order: 1;
    flex-grow: 0;
`

const StTopInfo = styled.div`
    /* Frame 538 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;

    width: 793px;
    height: 120px;
    margin-top: 24px;

    flex: none;
    order: 0;
    flex-grow: 0;
    /* background-color: black; */
    border-top: 2.5px solid #5C5C5C;
    border-bottom: 2.5px solid #5C5C5C;
`
const StTitle = styled.div`
    font-size: 32px;
    font-weight: 700;

`

const StContainer = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding : 0;
    background-color: #F2F6F9;
`
const StWrapper = styled.div`
    /* Frame 549 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 160px 120px;
    gap: 10px;
    margin-top: 85px;
    margin-bottom: 85px;

    width: 1033px;
    height: 960px;

    background: #FCFCFC;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StContentBox =styled.div`
    /* Frame 548 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;

    width: 793px;
    height: 100%;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export default ResultDoc;