import React from 'react'
import styled from 'styled-components'

const MeetingLeft = (prop) => {
    
  return (
    <StBox>
        <StImg/>
        <StInfo>
            <StName>
                {prop.prop.meetingTitle}
            </StName>
            <StCount>
                <StUserImg/>
                <StUserImg/>
                <StUserImg/>
                &nbsp;00명
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
    width: 99px;
    height: 39px;
    margin : 0 0 0 auto ;
    border-radius: 5px;
    color : white;
    background-color: #063250;
    border : none;
    cursor: pointer;
`;

const StCount = styled.div`
    display: flex;
    align-items: center;
    margin : 0.5rem 0 0 0;
    width: 150px;
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
    width : 468px;
    height : 52px;
    border-top: 1px solid #D7D7D7;
    border-bottom: 1px solid #D7D7D7;
`;

export default MeetingLeft