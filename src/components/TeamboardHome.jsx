import React,{useState} from 'react'
import styled from 'styled-components';
import TodayMeet from '../components/TodayMeet';
import LastMeeting from '../components/LastMeeting';
import MeetingLeft from '../components/MeetingLeft';
import MeetingRight from '../components/MeetingRight';
import { useGetPassed } from '../Hooks/useGetPassed';
import { useGetReserve } from '../Hooks/useGetReserve';
import { useGetOnAir } from '../Hooks/useGetOnAir';
import { useParams } from 'react-router-dom';
import DetailModalReserve from './DetailModalReserve';
import { useQueryClient } from 'react-query';
import { useEffect } from 'react';

const TeamboardHome = () => {

  const teamId = useParams().teamid;

  const queryClient = useQueryClient();

  useEffect(()=>{
    queryClient.invalidateQueries(["meeting","meetOnAir"]);
  },[])

  const [openReserve, setOpenReserve] = useState(false);
  const {data : passed} = useGetPassed({teamId});
  const {data : onAir} = useGetOnAir({teamId});
  const {data : reserve} = useGetReserve({teamId});

  const [meetingId,setMeetingId] = useState("");
  const [meetingTitle,setMeetingTitle] = useState();
  const [meetingDate,setMeetingDate] = useState();
  const [meetingTime,setMeetingTime] = useState();
  const [meetingCreator,setMeetingCreator] = useState();
  const [issues,setIssues] = useState();

  const closeModal = () => {
    setOpenReserve(false);
  }

  return (
    <>
      <DetailModalReserve
        meetingTitle={meetingTitle}
        meetingDate={meetingDate}
        meetingTime={meetingTime} 
        meetingCreator={meetingCreator}
        issues={issues}
        open={openReserve} 
        meetingId={meetingId} 
        close={closeModal}
        teamId={teamId}/>
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
              {onAir?
                <div onClick={
                  ()=>{
                    setMeetingId(onAir[0].meetingId);
                    setOpenReserve(true);
                    setMeetingTitle(onAir[0].meetingTitle);
                    setMeetingDate(onAir[0].meetingDate);
                    setMeetingTime(onAir[0].meetingTime);
                    setMeetingCreator(onAir[0].meetingCreator);
                    setIssues(onAir[0].issues);
                }}>{onAir[0]?
                <MeetingLeft prop={onAir[0]}/>:<></>}</div>:<></>}
              {onAir?
                <div onClick={
                  ()=>{
                    setMeetingId(onAir[1].meetingId);
                    setOpenReserve(true);
                    setMeetingTitle(onAir[1].meetingTitle);
                    setMeetingDate(onAir[1].meetingDate);
                    setMeetingTime(onAir[1].meetingTime);
                    setMeetingCreator(onAir[1].meetingCreator);
                    setIssues(onAir[1].issues);
                }}>{onAir[1]?
                <MeetingLeft prop={onAir[1]}/>:<></>}</div>:<></>}
              {onAir?
                <div onClick={
                  ()=>{
                    console.log("hey");
                    setMeetingId(onAir[2].meetingId);
                    setOpenReserve(true);
                    setMeetingTitle(onAir[2].meetingTitle);
                    setMeetingDate(onAir[2].meetingDate);
                    setMeetingTime(onAir[2].meetingTime);
                    setMeetingCreator(onAir[2].meetingCreator);
                    setIssues(onAir[2].issues);
                }}>{onAir[2]?
                <MeetingLeft prop={onAir[2]}/>:<></>}</div>:<></>}
            </StMeetingLeft>
          </StMeetingLeftBox>
          <StMeetingRightBox>
            예정된 회의
            <StMeetingRight>
              {reserve?
                <div onClick={
                  ()=>{
                    setMeetingId(reserve[0].meetingId);
                    setOpenReserve(true);
                    setMeetingTitle(reserve[0].meetingTitle);
                    setMeetingDate(reserve[0].meetingDate);
                    setMeetingTime(reserve[0].meetingTime);
                    setMeetingCreator(reserve[0].meetingCreator);
                    setIssues(reserve[0].issues);
                }} >{reserve[0]?
                  <MeetingRight prop={reserve[0]}/>:<></>}</div>:<></>}
              {reserve?
                <div onClick={
                  ()=>{
                    setMeetingId(reserve[1].meetingId);
                    setOpenReserve(true);
                    setMeetingTitle(reserve[1].meetingTitle);
                    setMeetingDate(reserve[1].meetingDate);
                    setMeetingTime(reserve[1].meetingTime);
                    setMeetingCreator(reserve[1].meetingCreator);
                    setIssues(reserve[1].issues);
                }} >{reserve[1]?
                  <MeetingRight prop={reserve[1]}/>:<></>}</div>:<></>}
                  {reserve?
                <div onClick={
                  ()=>{
                    setMeetingId(reserve[2].meetingId);
                    setOpenReserve(true);
                    setMeetingTitle(reserve[2].meetingTitle);
                    setMeetingDate(reserve[2].meetingDate);
                    setMeetingTime(reserve[2].meetingTime);
                    setMeetingCreator(reserve[2].meetingCreator);
                    setIssues(reserve[2].issues);
                }} >{reserve[2]?
                  <MeetingRight prop={reserve[2]}/>:<></>}</div>:<></>}
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
  </>
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
  height : 343px;
  margin : 1rem 0 0 0; 
`;

const StMeetingLeftBox = styled.div`
  width : 390px;
  height : 343px;
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
  width : 390px;
  height : 343px;
  margin : 1rem 0 0 0;
  padding : 0rem 1rem 0rem 1rem;
  border-radius: 0.5rem;
  background-color: #D9D9D9;
`;

const StMeetingLeft = styled.div`
  display: flex;
  flex-direction: column;
  width : 390px;
  height : 343px;
  margin : 1rem 0 0 0;
  padding : 0 1rem 0 1rem;
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