import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetMeetList from '../Hooks/useGetMeetList';
import { useGetPassed } from '../Hooks/useGetPassed';
import { useGetOnAir } from '../Hooks/useGetOnAir'
import { useGetReserve } from '../Hooks/useGetReserve'

const MeetingManage = () => {

  const [state, setState] = useState(0);

  const teamId = useParams().teamid;

  const {data:passed} = useGetPassed({teamId});
  const {data:onAir} = useGetOnAir({teamId});
  const {data:reserve} = useGetReserve({teamId});

  console.log(reserve);
    
  return (
    <StRight>
      <StBlackBox>
        <StBlack0 state={state} onClick={()=>{setState(0)}}>진행중 미팅</StBlack0>
        <StBlack1 state={state} onClick={()=>{setState(1)}}>이전 미팅</StBlack1>
        <StBlack2 state={state} onClick={()=>{setState(2)}}>예약된 미팅</StBlack2>
      </StBlackBox>
      <StfListBox>  
        <StListTop>
          <StDate>날짜</StDate>
          <StHost>주최자</StHost>
          <StTitle>회의명</StTitle>
          <StTime>시간</StTime>
        </StListTop>
        {state==0?
        <>{onAir?.map((value,index)=>
          <StList key={index}>
            <StDate>{value.meetingDate}</StDate>
            <StHost>서구</StHost>
            <StTitle>{value.meetingTitle}</StTitle>
            <StTime>{value.meetingTime}~</StTime>
          </StList>)}
        </>:<></>}
        {state==1?
        <>{passed?.map((value,index)=>
          <StList key={index}>
            <StDate>{value.meetingDate}</StDate>
            <StHost>서구</StHost>
            <StTitle>{value.meetingTitle}</StTitle>
            <StTime>{value.meetingTime}~</StTime>
          </StList>)}
        </>:<></>}
        {state==2?
        <>{reserve?.map((value,index)=>
          <StList key={index}>
            <StDate>{value.meetingDate}</StDate>
            <StHost>서구</StHost>
            <StTitle>{value.meetingTitle}</StTitle>
            <StTime>{value.meetingTime} ~ {value.meetingOverTime}</StTime>
          </StList>)}
        </>:<></>}
          
      </StfListBox>
      <StLine/>
    </StRight>
  )
}

const StTime = styled.div`
  display: flex;
  justify-content: center;
  width : 120px;
  height : 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const StTitle = styled.div`
  display: flex;
  justify-content: center;
  width : 320px;
  height : 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const StHost = styled.div`
  display: flex;
  justify-content: center;
  width : 120px;
  height : 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const StDate = styled.div`
  display: flex;
  justify-content: center;
  width : 120px;
  height : 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const StListTop = styled.div`
  display: flex;
  width : 700px;
  height : 20px;
  margin : 5px 0 5px 0;
  border-radius: 6px;
`;

const StList = styled.div`
  display: flex;
  width : 700px;
  height : 20px;
  margin : 5px 0 5px 0;
  border-radius: 6px;
  transition: 0.1s ease-in-out;
  &:hover{
    background-color:#E2E2E2 ;
  }
  cursor: pointer;
`;

const StfListBox = styled.div`
  display: flex;
  flex-direction: column;
  width : 700px;
  height : 50vh;
  margin: 100px auto 0 40px;
`;

const StBlackBox = styled.div`
  display: flex;
  width : 320px;
  height : 20px;
  margin : 80px auto 0 40px;
  z-index: 1; 
`;

const StBlack2 = styled.div`
    display: flex;
    justify-content: center;
    width : 150px;
    height : 20px;
    border-bottom: ${props=>props.state==2?"3px solid":"none"};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
`;

const StBlack1 = styled.div`
    display: flex;
    justify-content: center;
    width : 150px;
    height : 20px;
    border-bottom: ${props=>props.state==1?"3px solid":"none"};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
`;

const StBlack0 = styled.div`
    display: flex;
    justify-content: center;
    width : 150px;
    height : 20px;
    border-bottom: ${props=>props.state==0?"3px solid":"none"};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
`;

const StLine = styled.div`
  width : 100%;
  height : 3px;
  background-color: #EAEAEA;
`;

const StRight = styled.div`
  width : 930px;
  height : 86.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;
  margin : 1rem 0 0 0;
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

export default MeetingManage