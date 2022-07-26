import React from 'react'
import styled from 'styled-components';

const MeetingRight = (prop) => {
    
    const date = prop.prop.meetingDate;
    let k;
    let a;
    k = date.split("-")
    a= k.slice(1)
    a=a.join('.');
    
  return (
    <StBox>
        <StInfo>
            <>
            <StTime>
                <Stdate>{a}</Stdate>
                <StLong>{prop.prop.meetingTime} - {prop.prop.meetingOverTime}</StLong>
            </StTime>
            </>
            <StLine/>
            <StContent>
                <StTitle>{prop.prop.meetingTitle}</StTitle>
                <StOwner>주최자 : {prop.prop.meetingCreator}</StOwner>
            </StContent>
        </StInfo>
    </StBox>
  )
}

const StOwner = styled.div`
    width: 180px;
    height: 20px;
    margin : 0.5rem 0 0 0;
    font-weight: 500;
    font-size: 12px;
    color : #818181;
`;

const StTitle = styled.div`
    width: 180px;
    height: 20px;
    font-weight: 500;
    font-size: 14px;
`;


const StContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    height:44px;
    margin : 0 0 0 1.5rem;
`;

const StLine = styled.div`
    height : 54px;
    width: 3px;
    background-color: #063250;
`;

const StLong = styled.div`
    width : 80px;
    height : 20px;
    font-weight: 500;
    font-size: 12px;
`;

const Stdate = styled.div`
    width : 80px;
    height : 54px;
    font-weight: 700;
    font-size: 24px;
`;

const StTime = styled.div`
    display: flex;
    flex-direction: column;
    width :103px;
    height: 54px 
`;


const StInfo = styled.div`
    display: flex;
    align-items: center;
    width : 300px;
    height:54px;
    
`;

const StBox = styled.div`
    display: flex;
    align-items: center;
    padding: 24px;
    width : 468px;
    height : 52px;
    background-color: white;
    border-top: 1px solid #D7D7D7;
    border-bottom: 1px solid #D7D7D7;
`;
export default MeetingRight