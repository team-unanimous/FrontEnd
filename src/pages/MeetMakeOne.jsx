import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'

import bt1 from '../img/4.CreateMeeting/0.main/btn1.svg'
import bt2 from '../img/4.CreateMeeting/0.main/btn2.svg'


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
                        지금 회의를 열고 싶다면 '회의 시작하기'를<br/>
                        다른 시간대에 회의를 열고 싶다면 '회의 예약하기'를 선택해주세요
                    </StSubTitle>
                </StTitle>
                <StButtonBox>
                        <StImg src={bt1} onClick={()=>{navigate(`/teamboard/${teamId}/meetmaketwoone`)}}/>
                        <StImg src={bt2} onClick={()=>{navigate(`/teamboard/${teamId}/meetmaketwotwo`)}}/>
                </StButtonBox>
                <StCancelBt onClick={()=>{navigate(`/teamboard/${teamId}`)}}>취소</StCancelBt>
            </StInnerBox>
        </StBox>
    </StMeetMake>
  )
}

const StImg = styled.img`
    width: 320px;
    height: 350px;
    object-fit: cover;
`;

const StCancelBt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: 54px;
  margin : 10px auto 0 auto;
  border: 1px solid #5C5C5C;
  border-radius: 6px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #888888;;
  cursor: pointer;
`;

const StButtonBox = styled.div`
    width: 656px;
    height: 350px;  
    display: flex;
    justify-content: center;
    margin : 20px 0 0 0;
`;

const StSubTitle = styled.div`
    width :657px;
    height : 44px;
    display: flex;
    justify-content: center;
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
    height : 516px;
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