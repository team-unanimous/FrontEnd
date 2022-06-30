import React from 'react'
import styled from 'styled-components'

const MeetingLeft = () => {
  return (
    <StBox>
        <StImg/>
        <StInfo>
            <StName>
                저녁에 뭐먹을지 정하기
            </StName>
            <StCount>
                <StUserImg/>
                <StUserImg/>
                <StUserImg/>
                 +2
            </StCount>
        </StInfo>
        <StButton>참여하기</StButton>
    </StBox>
  )
}

const StUserImg = styled.img`
    width : 22.4px;
    height: 22.4px;
   
    border-radius: 22.4px;
    background-color: #E5E7EB;
`;

const StButton = styled.button`
    width: 72px;
    height: 25px;
    margin : 0 0 0 auto ;
    border-radius: 5px;
    color : white;
    background-color: black;
`;

const StCount = styled.div`
    display: flex;
    align-items: center;
    margin : 0.5rem 0 0 0;
    width: 90px;
    height: 22.4px;
`;

const StName = styled.div`
    width: 175px;
    height: 20px;
    font-weight: 500;
    font-size: 16px;
`;

const StInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 175px;
    height: 50.4px;

`;

const StImg = styled.img`
    width : 48px;
    height : 48px;
    margin : 0 1rem 0 0;
    border-radius: 48px;
    background-color: #D9D9D9;
`;

const StBox = styled.div`
    display: flex;
    align-items: center;
    padding: 24px;
    width : 342px;
    height : 50.4px;
    background-color: white;
    border-radius : 6px;
`;

export default MeetingLeft