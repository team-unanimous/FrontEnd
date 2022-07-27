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
import intro from '../img/introduction.svg'
import recommendone from '../img/TeamBoard/1.recommend/img1.svg'
import recommendtwo from '../img/TeamBoard/1.recommend/img2.svg'
import recommendthree from '../img/TeamBoard/1.recommend/img2.svg'
import DetailModalOnAir from './DetailModalOnAir';
import DetailModalPassed from './DetailModalPassed';
import useGetTeamMain from '../Hooks/useGetTeamMain';


const TeamboardHome = () => {

  const teamId = useParams().teamid;

  const queryClient = useQueryClient();

  useEffect(()=>{
    queryClient.invalidateQueries(["meeting","meetOnAir"]);
  },[])

  const [openOnAir, setOpenOnAir] = useState(false);
  const [openReserve, setOpenReserve] = useState(false);
  const [openPassed, setOpenPassed] = useState(false);
  const {data : passed} = useGetPassed({teamId});
  const {data : onAir} = useGetOnAir({teamId});
  const {data : reserve} = useGetReserve({teamId});
  const {data : team} = useGetTeamMain({teamId});
  console.log(team);



  const [meetingId,setMeetingId] = useState("");
  const [meetingTitle,setMeetingTitle] = useState();
  const [meetingDate,setMeetingDate] = useState();
  const [meetingTime,setMeetingTime] = useState();
  const [meetingCreator,setMeetingCreator] = useState();
  const [issues,setIssues] = useState();

  const closeModalRe = () => {
    setOpenReserve(false);
  }

  const closeModalOn = () => {
    setOpenOnAir(false);
  }

  const closeModalPass = () => {
    setOpenPassed(false);
  }

  return (
    <>
      <DetailModalOnAir
        meetingTitle={meetingTitle}
        meetingDate={meetingDate}
        meetingTime={meetingTime} 
        meetingCreator={meetingCreator}
        issues={issues}
        open={openOnAir} 
        meetingId={meetingId} 
        close={closeModalOn}
        teamId={teamId}/>

      <DetailModalReserve
        meetingTitle={meetingTitle}
        meetingDate={meetingDate}
        meetingTime={meetingTime} 
        meetingCreator={meetingCreator}
        issues={issues}
        open={openReserve} 
        meetingId={meetingId} 
        close={closeModalRe}
        teamId={teamId}/>

      <DetailModalPassed
        meetingTitle={meetingTitle}
        meetingDate={meetingDate}
        meetingTime={meetingTime} 
        meetingCreator={meetingCreator}
        issues={issues}
        open={openReserve} 
        meetingId={meetingId} 
        close={closeModalPass}
        teamId={teamId}/>


      <StRight>
      <img src={intro}/>
      <StTodaysMeetBox>
        오늘의 안건 추천
        <StTodaysInnerBox>
          <StReco>
            <img src={recommendone}/>
            <StDiv>
              <StUp>회식 메뉴 추천</StUp>
              <StDown>남녀노소 좋아하는 치킨? 든든한 삼겹살? 다양한 메뉴가 있는 중식?</StDown>
            </StDiv>
          </StReco>
          <StReco>
            <img src={recommendtwo}/>
            <StDiv>
              <StUp>하반기 워크샵 계획</StUp>
              <StDown>예산 및 역할 분배, 프로그램 기획</StDown>
            </StDiv>
          </StReco>
          <StReco>
            <img src={recommendthree}/>
            <StDiv>
              <StUp>스프린트 달성 목표 설정</StUp>
              <StDown>이전 스프린트 활동 점검 및 피드백, 목표설정 및 계획 브리핑</StDown>
            </StDiv>
          </StReco>
        </StTodaysInnerBox>
      </StTodaysMeetBox>

        <StMeetingInnerBox>
          <StMeetingLeftBox>
            <StOn>진행중인 미팅</StOn>  
            <StMeetingLeft>
              {onAir?
                <div onClick={
                  ()=>{
                    setMeetingId(onAir[0].meetingId);
                    setOpenOnAir(true);
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
                    setOpenOnAir(true);
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
                    setOpenOnAir(true);
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
            <StOn>예정된 미팅</StOn>
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

const StOn = styled.div`
  width : 516px;
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 508px;
  height : 351px;
  margin : 1rem 0 0 0; 
  padding : 32px;
  background-color: white;
  border-radius: 20px;

`;

const StMeetingLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 508px;
  height : 351px;
  margin : 1rem 0 0 0; 
  padding : 32px;
  background-color: white;
  border-radius: 20px;
`;

const StMeetingInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 1164px;
`;

const StMeetingRight = styled.div`
  display: flex;
  flex-direction: column;
  width : 516px;
  height : 313px;
  margin : 1rem 0 0 0;
  padding : 0rem 1rem 0rem 1rem;
  border-radius: 0.5rem;
`;

const StMeetingLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 516px;
  height : 313px;
  margin : 1rem 0 0 0;
  border-radius: 0.5rem;
`;

const StMeetings = styled.div`
  display: flex;
  flex-direction: column;
  width : 1184px;
  height : 415px;
`;

const StReco = styled.div`
  position : relative;
`;

const StDown = styled.div`
  font-size: 10px;
  color : #888888;
`;

const StUp = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
`;

const StDiv = styled.div`
  position: absolute;
  left : 8px;
  bottom : 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 314.66px;
  height : 42px;
  padding : 12px 16px;
  background-color: white;
  border-radius: 8px;
`;

const StTodaysInnerBox = styled.div`
  position: relative;
  display: flex;
  justify-content : space-between;
  width : 100%;
  height : 266px;
  margin : 0.7rem 0 0 0;
  border-radius: 20px;
`;

const StTodaysMeetBox = styled.div`
  width : 1120px;
  height : 304px;
  padding : 24px 32px;
  margin : 0 0 1rem 0;
  background-color: white;
  border-radius: 20px;
`;

const StLastMeetBox = styled.div`
  width : 848px;
  height : 342px;
  margin : 6rem 0 1rem 0;
`;

const StRight = styled.div`
  width : 1184px;
  height : 86.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 38px 36px 38px;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  background-color: #F2F6F9;
  overflow-x: hidden;
  ::-webkit-scrollbar{
    width:10px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: none;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track{
    
    border-radius: 1rem;
  }
`;

export default TeamboardHome