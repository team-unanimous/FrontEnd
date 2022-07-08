import React, { useState } from 'react';
import styled from 'styled-components';
import home from '../img/home.png';
import homeselect from '../img/homeselect.png';
import meeting from '../img/meeting.png';
import meetingselect from '../img/meetingselect.png';
import setting from '../img/setting.png';
import settingselect from '../img/settingselect.png';


const TeamboardLeft = () => {

    const [page,setPage] = useState(1);

  return (
        <StLeft>
            <StBox>
                <StTeamInfoBox>
                    <StTeamImg/>
                    <StInfoBox>
                        <StTeamName>팀이름</StTeamName>
                        <StTeamClass>member</StTeamClass>
                    </StInfoBox>
                </StTeamInfoBox>
                <StBtBox>
                    <StButton1 page={page} onClick={()=>{setPage(1)}}><StIcon src='home'/> 홈 </StButton1>
                    <StButton2 page={page} onClick={()=>{setPage(2)}}> 미팅 관리 </StButton2>
                    <StButton3 page={page} onClick={()=>{setPage(3)}}> 환경설정 </StButton3>
                </StBtBox>
            </StBox>
        </StLeft>
  )
}

const StButton3 = styled.div`
    display: flex;
    align-items: center;
    width : 286px;
    height : 44px;
    border-radius: 8px;
    background-color: ${props=>(props.page == 3 ? "#E2E2E2;" :"none")};
`;

const StButton2 = styled.div`
    display: flex;
    align-items: center;
    width : 286px;
    height : 44px;
    border-radius: 8px;
    background-color: ${props=>(props.page == 2 ? "#E2E2E2;" :"none")};
`;

const StButton1 = styled.div`
    display: flex;
    align-items: center;
    width : 286px;
    height : 44px;
    border-radius: 8px;
    background-color: ${props=>(props.page == 1 ? "#E2E2E2;" :"none")};
`;

const StIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const StBtBox = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width : 286px;
    height : 156px;
    margin : auto 0 0 0;
`;

const StTeamClass = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 88px;
    height : 25px;
    margin : auto 0 0 0 ;
    border-radius: 100px;
    background: #636363;
`;

const StTeamName = styled.div`
    width : 134px;
    height : 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
`;

const StInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 134px;
    height: 61px;
    margin : 0 0 0 24px;
`;

const StTeamImg = styled.img`
    width : 60px;
    height : 60px;
    border-radius: 60px;
    background: #8C8C8C;
`;

const StTeamInfoBox = styled.div`
    display: flex;
    align-items: center;
    width :286px;
    height : 93px;
`;

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width : 286px;
    height : 297px;
    margin : 42px 25px 0 25px;
`;

const StLeft = styled.div`
  width : 336px;
  height : 91.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EFEFEF;
`;

export default TeamboardLeft