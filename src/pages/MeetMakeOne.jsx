import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'

import bt1 from '../img/4.CreateMeeting/0.main/btn1.png'
import bt2 from '../img/4.CreateMeeting/0.main/btn2.png'


const MeetMakeOne = () => {
    const navigate = useNavigate();
    const teamId = useParams().teamid;
    
  return (
    <StMeetMake>
        <StBox>
            <StInnerBox>
                <StTitle>
                    <StMainTitle>
                        새로운 미팅룸을 만들어보세요
                    </StMainTitle>
                    <StSubTitle>
                        <StLine>지금 회의를 열고 싶다면 &nbsp;<StStart>'회의 시작하기'</StStart>를</StLine>
                        <StLine>다른 시간대에 회의를 열고 싶다면 &nbsp;<StStart> '회의 예약하기'</StStart>를 선택해주세요</StLine>
                    </StSubTitle>
                </StTitle>
                <StButtonBox>
                        <StImg1  onClick={()=>{navigate(`/teamboard/${teamId}/meetmaketwoone`)}}/>
                        <StImg2  onClick={()=>{navigate(`/teamboard/${teamId}/meetmaketwotwo`)}}/>
                </StButtonBox>
                <StCancelBt onClick={()=>{navigate(`/teamboard/${teamId}`)}}>취소</StCancelBt>
            </StInnerBox>
        </StBox>
    </StMeetMake>
  )
}

const StLine = styled.div`
    display: flex;
`;

const StStart = styled.div`
    color : #2396F0;
`;

const StImg2 = styled.div`
    width: 320px;
    height: 350px;
    background-image: url(${bt2});
`;

const StImg1 = styled.div`
    width: 320px;
    height: 350px;
    background-image: url(${bt1});
`;

const StCancelBt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: 54px;
  margin : 48px auto 0 auto;
  border: 1px solid #5C5C5C;
  border-radius: 6px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #888888;;
  cursor: pointer;
`;

const StButtonBox = styled.div`
    width: 657px;
    height: 350px;  
    display: flex;
    justify-content: space-between;
    margin : 20px auto 0 auto;
`;

const StSubTitle = styled.div`
    width :657px;
    height : 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
`;

const StMainTitle = styled.div`
    width : 657px;
    height : 44px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 36px;
`;

const StTitle = styled.div`
    width : 657px;
    height : 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StInnerBox = styled.div`
    width : 657px;
    height : 536px;
`;

const StBox = styled.div`
    display: flex;
    justify-content: center;
    width: 835px;
    height : 546px;
    padding : 80px;
    border-radius: 32px;
    background-color: white;
`;

const StMeetMake = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100vw;
    height : 100vh;
    background-color: #818181;

`;

export default MeetMakeOne