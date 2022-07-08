import React from 'react'
import styled from 'styled-components';
import doorIcon from '../img/outdoor.png'

const DetailModalPassed = ({open, close,meetingTitle,meetingDate,meetingTime,meetingCreator,issues, meetingId}) => {
    

  return (
    <>
    {open?
    <StBack onClick={close}>
        <StBox>
            <StImg/>
            <StTitle>회의명 '{meetingTitle}'</StTitle>
            <StLine/>
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
                    <StIssues>
                        {issues?.map((value,index)=>{
                        return <StIssue key={index}>{index+1}. {value.issueContent}</StIssue>})}
                    </StIssues>
                </StIssueBox>
                <StDateBox>
                    <StHostLeft>미팅 URL</StHostLeft>
                    <StIssue></StIssue>
                </StDateBox>
            </StInfo>
            <StLine/>
            <StButton><StIconImg src={doorIcon}/>참여하기</StButton>
        </StBox>
    </StBack>:<></>}
    </>
  )
}

const StIconImg = styled.img`
    width : 24px;
    height : 24px;
`;

const StButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 108px;
    height : 24px;
    padding : 15px 64px 15px 64px;
    margin : 0 0 0 auto;
    border: 1px solid black;
    border-radius: 6px;
    background-color: white;
    color : black;
`;

const StLine = styled.div`
    width : 100%;
    height : 1.5px;
    margin : 40px 0 60px 0;
    background-color: #D9D9D9;
`;

const StIssue = styled.div`
    width: 600px;
    height: 20px;
    margin : 0 0 7px 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const StIssues = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 663px;
    height: 92px;
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
    font-family: 'Inter';
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
    padding: 0px;
    gap: 32px;
    width: 811px;
    height: 278px; 
`;

const StTitle = styled.div`
    width: 784px;
    height: 44px;
    margin : 32px 0 0 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
`;

const StImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 48px;
    height : 48px;
    border-radius: 48px;
    background-color:#D9D9D9;
`;

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    width : 784px;
    height : 628px;
    padding : 120px 80px 80px 80px;
    border-radius: 8px;
    background-color: white;
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