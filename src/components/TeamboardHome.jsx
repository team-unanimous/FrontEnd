import React from 'react'
import styled from 'styled-components';
import TodayMeet from '../components/TodayMeet';
import LastMeeting from '../components/LastMeeting';
import MeetingLeft from '../components/MeetingLeft';
import MeetingRight from '../components/MeetingRight';
import RecentMeet from '../components/RecentMeet';
import { useGetPassed } from '../Hooks/useGetPassed';
import { useGetReserve } from '../Hooks/useGetReserve';
import { useGetOnAir } from '../Hooks/useGetOnAir';
import { useParams } from 'react-router-dom';

const TeamboardHome = () => {

  const teamId = useParams().teamid;

  const {data : passed} = useGetPassed({teamId});
  const {data : onAir} = useGetOnAir({teamId});
  const {data : reserve} = useGetReserve({teamId});

  return (
    <StRight>
    <StSaying>
      Unanimous가 추천하는 오늘의 안건을 만나보세요
    </StSaying>
    <StTodaysMeetBox>
      오늘의 안건 추천
      <StTodaysInnerBox>
        <TodayMeet/>
        <TodayMeet/>
        <TodayMeet/>
      </StTodaysInnerBox>
    </StTodaysMeetBox>
    <StMeetings>
      <StMeetingInnerBox>
        <StMeetingLeftBox>
          진행중인 회의
          <StMeetingLeft>
            {onAir?.map((value,index)=><MeetingLeft key={index} prop={value}/>)}
          </StMeetingLeft>
        </StMeetingLeftBox>
        <StMeetingRightBox>
          예정된 회의
          <StMeetingRight>
            <MeetingRight/>
            <MeetingRight/>
            <MeetingRight/>
          </StMeetingRight>
        </StMeetingRightBox>
      </StMeetingInnerBox>
    </StMeetings>
    <StLastMeetBox>
      이전 회의
      <StLastInnerBox>
        <LastMeeting/>
        <LastMeeting/>
        <LastMeeting/>
      </StLastInnerBox>
    </StLastMeetBox>
  </StRight>
  )
}


const StLastInnerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width : 820px;
  height : 278px;
  margin : 0.75rem 0 0 0;
  padding : 1rem 1rem 1rem 1rem;
  background-color: #D9D9D9;
  border-radius: 1rem;
`;


const StMeetingRightBox = styled.div`
  width : 390px;
  height : 330px;
  margin : 1rem 0 0 0; 
`;

const StMeetingLeftBox = styled.div`
  width : 390px;
  height : 330px;
  margin : 1rem 0 0 0; 
`;

const StMeetingInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 820px;
`;

const StMeetingRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 390px;
  height : 311.2px;
  margin : 1rem 0 0 0;
  padding : 1rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
  background-color: #D9D9D9;
`;

const StMeetingLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 390px;
  height : 311.2px;
  margin : 1rem 0 0 0;
  padding : 1rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
  background-color: #D9D9D9;
`;

const StMeetings = styled.div`
  display: flex;
  flex-direction: column;
  width : 848px;
  height : 375.2px;
`;

const StTodaysInnerBox = styled.div`
  display: flex;
  justify-content : space-between;
  width : 100%;
  height : 198px;
  margin : 0.7rem 0 0 0;
`;

const StTodaysMeetBox = styled.div`
  width : 848px;
  height : 230px;
  margin : 0 0 1rem 0;
`;

const StLastMeetBox = styled.div`
  width : 848px;
  height : 342px;
  margin : 6rem 0 1rem 0;
`;

const StSaying = styled.div`
  display: flex;
  align-items: center;
  width : 818px;
  height : 100px;
  margin : 0rem 0 1rem 0;
  padding : 2.125rem 0 2.125rem 1.875rem;
  background-color: #EFEFEF;
  font-weight : 500;
  font-size : 24px;
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

export default TeamboardHome