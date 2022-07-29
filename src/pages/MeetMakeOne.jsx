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

                        <img src={bt1} onClick={()=>{navigate(`/teamboard/${teamId}/meetmaketwoone`)}}/>
                        <img src={bt2} onClick={()=>{navigate(`/teamboard/${teamId}/meetmaketwotwo`)}}/>
                    
                </StButtonBox>
            </StInnerBox>
        </StBox>
    </StMeetMake>
  )
}

const StText = styled.div`
    width : 170px;
    height : 29px;
    margin : 0 0 35px 0;
    color : white;
    font-size: 24px;
    font-weight: 700;
`;

const StButton = styled.button`
    width : 320px;
    height : 380px;
    display: flex;
    justify-content: center;
    align-items: end;
    border: none;
    border-radius: 8px;
    background-color: black;
    cursor: pointer;
`;

const StButtonBox = styled.div`
    width : 657px;
    height : 380px;
    display: flex;
    justify-content: center;
    margin : 48px 0 0 0;
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
    height : 506px;
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