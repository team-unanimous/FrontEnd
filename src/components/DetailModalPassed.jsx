import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import doorIcon from '../img/outdoor.png'
import { useNavigate, useParams } from 'react-router-dom';
import thumbnail1 from '../img/TeamBoard/3.beforemeeting/thumbnail1.svg'
import thumbnail2 from '../img/TeamBoard/3.beforemeeting/thumbnail2.svg'
import thumbnail3 from '../img/TeamBoard/3.beforemeeting/thumbnail3.svg'
import thumbnail4 from '../img/TeamBoard/3.beforemeeting/thumbnail4.svg'
import thumbnail5 from '../img/TeamBoard/3.beforemeeting/thumbnail5.svg'
import closeIcon from '../img/TeamBoard/popup/close.svg'
import go from '../img/icon_doc.svg'
import participate from '../img/MeetingMangement-20220725T100748Z-001/MeetingMangement/icon_participate.svg'
import copyIcon from '../img/TeamBoard/popup/icon_url.svg'


const DetailModalPassed = ({open, close,meetingTitle,meetingDate,meetingTime,meetingCreator,issues, meetingId,meetingThumbnail}) => {

    const navigate = useNavigate();
    const teamId = useParams().teamid;
    
    // 복사하기 버튼
    const handleCopyClipBoard = async (text) => {
        await navigator.clipboard.writeText(text);
    };   

  return (
    <>
    {open?
    <>
    <StBack onClick={close}/>
        <StBox>
        <StCloseIcon src={closeIcon} onClick={close}/>
            {meetingThumbnail==1?<StImg src={thumbnail1}/>:<></>}
            {meetingThumbnail==2?<StImg src={thumbnail2}/>:<></>}
            {meetingThumbnail==3?<StImg src={thumbnail3}/>:<></>}
            {meetingThumbnail==4?<StImg src={thumbnail4}/>:<></>}
            {meetingThumbnail==5?<StImg src={thumbnail5}/>:<></>}
            <StTitle>회의명 '{meetingTitle}'</StTitle>
            <StBt onClick={()=>{navigate(`/meetingroom/${teamId}/${meetingId}/result`)}}>
                <StIcon src={go}/><StDoc>문서로 보기</StDoc>
            </StBt>
            <StInfo>
                <StHostBox>
                    <StHostLeft>주최자</StHostLeft>
                    <StRight>{meetingCreator}</StRight>
                </StHostBox>
                <StDateBox>
                    <StHostLeft>날짜</StHostLeft>
                    <StRight>{meetingDate} {meetingTime}</StRight>
                </StDateBox>
                <StIssueBox>
                    <StHostLeft>안건</StHostLeft>
                    {meetingThumbnail==1?<StIssues color="#FCF3E9">
                        {issues?.map((value,index)=>{
                            return  <div key={index}>
                                        <StIssueBoxs>
                                            <StRoundB/><StIssuess>{value.issueContent}</StIssuess>
                                        </StIssueBoxs>
                                        <StIssueResultBox>
                                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                                        </StIssueResultBox>
                                    </div>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==2?<StIssues color="#FCF7E7">
                        {issues?.map((value,index)=>{
                            return  <div key={index}>
                                        <StIssueBoxs>
                                            <StRoundB/><StIssuess>{value.issueContent}</StIssuess>
                                        </StIssueBoxs>
                                        <StIssueResultBox>
                                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                                        </StIssueResultBox>
                                    </div>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==3?<StIssues color="#F3F7F3">
                        {issues?.map((value,index)=>{
                           return   <div key={index}>
                                        <StIssueBoxs>
                                            <StRoundB/><StIssuess>{value.issueContent}</StIssuess>
                                        </StIssueBoxs>
                                        <StIssueResultBox>
                                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                                        </StIssueResultBox>
                                    </div>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==4?<StIssues color="#EFF7FB">
                        {issues?.map((value,index)=>{
                            return  <div key={index}>
                                        <StIssueBoxs>
                                            <StRoundB/><StIssuess>{value.issueContent}</StIssuess>
                                        </StIssueBoxs>
                                        <StIssueResultBox>
                                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                                        </StIssueResultBox>
                                    </div>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==5?<StIssues color="#FCF6F9">
                        {issues?.map((value,index)=>{
                            return  <div key={index}>
                                        <StIssueBoxs>
                                            <StRoundB/><StIssuess>{value.issueContent}</StIssuess>
                                        </StIssueBoxs>
                                        <StIssueResultBox>
                                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                                        </StIssueResultBox>
                                    </div>
                        })}
                    </StIssues>:<></>}
                </StIssueBox>
                
            </StInfo>
        </StBox>
    </>:<></>}
    </>
  )
}

const StIcon = styled.img`
    width : 16px;
    height : 16px;
`;

const StBt = styled.div`
    display: flex;
    justify-content: center;
    width : 104px;
    height : 20px;
    padding : 8px 16px;
    background-color: #EBF7FF;
    border-radius: 100px;
    cursor: pointer;
`;

const StDoc = styled.div`
    width : 80px;
    height : 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #2396F0;
`;

const StIssueResultBox = styled.div`
    display: flex;
    padding : 0 0 0 20px;
    margin : 9px 0 24px 0;
`;

const StIssueBoxs = styled.div`
    display: flex;
    align-content: center;
    width : 312px;
    height: 20px;
`;

const StRoundB = styled.div`
    width : 5px;
    height : 5px;
    border-radius: 5px;
    background-color: black;
    margin : auto 10px auto 0;
`;

const StRoundG = styled.div`
    width : 5px;
    height : 5px;
    border-radius: 5px;
    border: 1px solid #848484;
    margin : auto 10px auto 0;
`;

const StIssueResult = styled.div`
    display: flex;
    width: 312px;
    height: 17px;
    color: #848484;
    font-size: 12px;
`;

const StIssuess = styled.div`
    display: flex;
    width: 302px;
    height: 20px;
    font-style: normal;
    margin : 0 0 9px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;

const StCloseIcon = styled.img`
    position: absolute;
    top : 20px;
    right : 20px;
    cursor: pointer;
`;

const StIssue = styled.div`
    width: 600px;
    height: 20px;
    margin : 0 0 7px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const StIssues = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 591px;
    height: 165px;
    background-color: ${props=>props.color};
    border-radius: 10px;

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
`;

const StIssueBox = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 92px;
    margin : 0 0 10px 0;
`;

const StDateBox = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 20px;
`;

const StRight = styled.div`
    width : 600px;
    height : 20px;
`;

const StHostLeft = styled.div`
    display: flex;
    width: 80px;
    height: 20px;
    margin : 0 83px 0 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const StHostBox = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
`;

const StInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin : 50px 0 50px 0;
    gap: 32px;
    width: 811px;
    height: 278px; 
`;

const StTitle = styled.div`
    width: 784px;
    height: 44px;
    margin : 32px 0 0 0;
    padding : 0 0 32px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
`;

const StImg = styled.img`
    display: flex;
    justify-content: start;
    align-items: center;
    width : 80px;
    height : 80px;
    border-radius: 48px;
`;

const StBox = styled.div`
    position : fixed;
    display: flex;
    flex-direction: column;
    width : 784px;
    height : 568px;
    padding : 80px 80px 80px 80px;
    border-radius: 8px;
    background-color: white;
    z-index: 20;
`;

const StBack = styled.div`
    position : fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 100%;
    background-color: rgba(0,0,0,0.4);
    z-index : 10;
`;

export default DetailModalPassed