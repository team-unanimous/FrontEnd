import React from 'react'
import styled from 'styled-components'
import thumbnail1 from '../img/TeamBoard/2.nowmeeting/thumbnail1.svg'
import thumbnail2 from '../img/TeamBoard/2.nowmeeting/thumbnail2.svg'
import thumbnail3 from '../img/TeamBoard/2.nowmeeting/thumbnail3.svg'
import thumbnail4 from '../img/TeamBoard/2.nowmeeting/thumbnail4.svg'
import thumbnail5 from '../img/TeamBoard/2.nowmeeting/thumbnail5.svg'
import closeIcon from '../img/TeamBoard/popup/close.svg'
import casual from "../img/back/casual.png";
import office from "../img/back/office.png";


const MeetingLeft = (prop) => {
    console.log(prop.prop.users);
  return (
    <StBox>
        {prop?.prop.meetingSum==1?<StImg src={thumbnail1}/>:<></>}
        {prop?.prop.meetingSum==2?<StImg src={thumbnail2}/>:<></>}
        {prop?.prop.meetingSum==3?<StImg src={thumbnail3}/>:<></>}
        {prop?.prop.meetingSum==4?<StImg src={thumbnail4}/>:<></>}
        {prop?.prop.meetingSum==5?<StImg src={thumbnail5}/>:<></>}
        <StInfo>
            <StName>
                {prop?.prop.meetingTitle}
            </StName>
            <StCount>
                {prop?.prop.users[0]?<StUserImg src={prop?.prop.users[0].profileImage}/>:<></>}
                {prop?.prop.users[1]?<StUserImg src={prop?.prop.users[0].profileImage}/>:<></>}
                {prop?.prop.users[2]?<StUserImg src={prop?.prop.users[0].profileImage}/>:<></>}
                &nbsp;{prop?.prop.userCnt}명
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