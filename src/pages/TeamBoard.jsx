import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import LastMeeting from '../components/LastMeeting';
import MeetingLeft from '../components/MeetingLeft';
import MeetingRight from '../components/MeetingRight';
import RecentMeet from '../components/RecentMeet';
import TeamUser from '../components/TeamUser';
import TodayMeet from '../components/TodayMeet';

const TeamBoard = () => {



  return  (
          <StBox>
            <Header/>
            <StDownBox> 
              <StLeft>
                <StTeamImg/>
                <StTeamName> 
                  팀 이름은 아무개
                </StTeamName>
                <StEdit>
                  편집하기
                </StEdit>
                <StTeamList>
                  <TeamUser/>
                  <TeamUser/>
                  <TeamUser/>
                  <TeamUser/>
                </StTeamList>
                <StAddMemberBt>
                  + 팀원 추가하기
                </StAddMemberBt>
              </StLeft>
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
                <StRecentMeet>
                  최근 회의 안건
                  <StRecentInnerBox>
                    <RecentMeet/>
                    <RecentMeet/>
                    <RecentMeet/>
                  </StRecentInnerBox>
                </StRecentMeet>
                <StLastMeetBox>
                  이전 회의
                  <StLastInnerBox>
                    <StLeftButton>
                      &#171;
                    </StLeftButton>
                    <StRightButton>
                      &#187;
                    </StRightButton>

                    <LastMeeting/>
                    <LastMeeting/>
                    <LastMeeting/>
                    <LastMeeting/>
                  </StLastInnerBox>
                </StLastMeetBox>
                <StMeetings>
                  <StMeetingInnerBox>

                    <StMeetingLeftBox>
                      진행중인 회의
                      <StMeetingLeft>
                        <MeetingLeft/>
                        <MeetingLeft/>
                        <MeetingLeft/>
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
              </StRight>
            </StDownBox>
          </StBox>
    );
};

const StLeftButton = styled.div`
  width : 52px;
  height : 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 52px;
  border:1px solid #D9D9D9;
  position: absolute;
  top : 120px;
  left : 10px;
  font-size : 3rem;
  cursor: pointer;
`;

const StRightButton = styled.button`
  width : 52px;
  height : 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 52px;
  border:1px solid #D9D9D9;
  position: absolute;
  top : 120px;
  right : 10px;
  font-size : 3rem;
  cursor: pointer;
`;

const StLastInnerBox = styled.div`
  position: relative;
  display: flex;
  width : 820px;
  height : 278px;
  margin : 0.75rem 0 0 0;
  padding : 1rem 1rem 1rem 1rem;
  background-color: #D9D9D9;
  border-radius: 1rem;
  overflow: hidden;
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

const StRecentInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 848px;
  height : 73px;
  margin : 0.7rem 0 0 0;
`;

const StRecentMeet = styled.div`
  width : 848px;
  height : 105px;
  margin : 0 0 1rem 0;
  font-weight : 500;
  font-size : 16px;
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
  margin : 0 0 1rem 0;
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

const StEdit = styled.button`
  display: flex;
  align-items: center;
  width : 4.5rem;
  height : 1.2rem;
  margin : 1.75rem 0 0 0 ;
  text-align: center;
  font-size : 0.875rem;
  font-weight: 400;
  cursor: pointer;
`;

const StAddMemberBt = styled.button`
  width: 7.06rem;
  height : 1rem;
  margin : auto 0 2rem auto;
  font-size : 0.75rem;
  font-weight : 400;
  border:none;
  cursor: pointer;
`;

const StTeamList = styled.div`
  display: flex;
  flex-direction: column;
  margin : 4rem 2rem 0 2rem;
  
  width : 79.3%;
  height : 50%;
`;

const StTeamName = styled.div`
  margin : 1rem 0 0 0;
  font-weight : 400;
  font-size : 1.25rem;
`;

const StTeamImg = styled.img`
  width : 60%;
  padding-top: 60%;
  background-color: #8C8C8C;
  border-radius: 10rem;
  margin : 3.5rem 0 0 0;
`;

const StDownBox = styled.div`
  display: flex;
  justify-content: center;
  height : 100%;
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

const StLeft = styled.div`
  width : 270px;
  height : 91.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EFEFEF;
`;

const StBox = styled.div`
  width : 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding : 0;
`;

export default TeamBoard;