import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import thumbnail1 from '../img/TeamBoard/3.beforemeeting/thumbnail1.svg'
import thumbnail2 from '../img/TeamBoard/3.beforemeeting/thumbnail2.svg'
import thumbnail3 from '../img/TeamBoard/3.beforemeeting/thumbnail3.svg'
import thumbnail4 from '../img/TeamBoard/3.beforemeeting/thumbnail4.svg'
import thumbnail5 from '../img/TeamBoard/3.beforemeeting/thumbnail5.svg'


const MeetingDown = (prop) => {
    
  return (
    <>
        {prop?.prop.meetingSum==1?<StBox back="rgba(251, 236, 221, 0.3);">
            <StImg src={thumbnail1}/>
                <StName>
                    {prop.prop.meetingTitle}
                </StName>
                <StInBox back="rgba(251, 236, 221, 0.5);">

                    {prop.prop.issues.map((value,index)=>(
                        <div key={index}>
                        <StIssueBox>
                            <StRoundB/><StIssue>{value.issueContent}</StIssue>
                        </StIssueBox>
                        <StIssueResultBox>
                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                        </StIssueResultBox>
                    </div>
                    ))}
                </StInBox>
        </StBox>:<></>}
        {prop?.prop.meetingSum==2?<StBox back="rgba(251, 243, 219, 0.3);">
            <StImg src={thumbnail2}/>
                <StName>
                    {prop.prop.meetingTitle}
                </StName>
                <StInBox back="rgba(251, 243, 219, 0.5);">
                {prop.prop.issues.map((value,index)=>(
                        <div key={index}>
                        <StIssueBox>
                            <StRoundB/><StIssue>{value.issueContent}</StIssue>
                        </StIssueBox>
                        <StIssueResultBox>
                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                        </StIssueResultBox>
                    </div>
                    ))}
                </StInBox>
        </StBox>:<></>}
        {prop?.prop.meetingSum==3?<StBox back="rgba(237, 243, 236, 0.3);">
            <StImg src={thumbnail3}/>
            <StName>
                    {prop.prop.meetingTitle}
                </StName>
                <StInBox back="rgba(237, 243, 236, 0.5);">
                {prop.prop.issues.map((value,index)=>(
                        <div key={index}>
                        <StIssueBox>
                             <StRoundB/><StIssue>{value.issueContent}</StIssue>
                        </StIssueBox>
                        <StIssueResultBox>
                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                         </StIssueResultBox>
                   </div>
                    ))}
                </StInBox>
        </StBox>:<></>}
        {prop?.prop.meetingSum==4?<StBox back="rgba(231, 243, 248, 0.3);">
            <StImg src={thumbnail4}/>
            <StName>
                    {prop.prop.meetingTitle}
                </StName>
                <StInBox back="rgba(231, 243, 248, 0.5);">
                {prop.prop.issues.map((value,index)=>(
                        <div key={index}>
                        <StIssueBox>
                            <StRoundB/><StIssue>{value.issueContent}</StIssue>
                        </StIssueBox>
                        <StIssueResultBox>
                            {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}    
                        </StIssueResultBox>
                    </div>
                    ))}
                </StInBox>
        </StBox>:<></>}
        {prop?.prop.meetingSum==5?<StBox back="rgba(250, 241, 245, 0.3);">
            <StImg src={thumbnail5}/>
            <StName>
                    {prop.prop.meetingTitle}
                </StName>
                <StInBox back="rgba(250, 241, 245, 0.5);">
                {prop.prop.issues.map((value,index)=>(
                        <div key={index}>
                            <StIssueBox>
                                <StRoundB/><StIssue>{value.issueContent}</StIssue>
                            </StIssueBox>
                            <StIssueResultBox>
                                {value.issueResult?<><StRoundG/><StIssueResult>{value.issueResult}</StIssueResult></>:<></>}
                            </StIssueResultBox>
                        </div>
                    ))}
                </StInBox>
        </StBox>:<></>}
    </>
  )
}

const StIssueResultBox = styled.div`
    display: flex;
    padding : 0 0 0 20px;
    margin : 9px 0 24px 0;
`;

const StIssueBox = styled.div`
    display: flex;
    align-content: center;
    width : 312px;
    height: 20px;
`;

const StRoundB = styled.div`
    width : 5px;
    height : 5px;
    border-radius: 5px;
    background-color: black;
    margin : auto 10px auto 0;
`;

const StRoundG = styled.div`
    width : 5px;
    height : 5px;
    border-radius: 5px;
    border: 1px solid #848484;
    margin : auto 10px auto 0;
`;

const StIssueResult = styled.div`
    display: flex;
    width: 312px;
    height: 17px;
    color: #848484;
    font-size: 12px;
`;

const StIssue = styled.div`
    display: flex;
    width: 302px;
    height: 20px;
    font-style: normal;
    margin : 0 0 9px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;

const StInBox = styled.div`
    width: 296px;
    min-height: 166px;
    padding : 16px;
    border-radius: 8px;
    background-color:${props=>props.back};
`;

const StName = styled.div`
    width: 100%;
    height: 20px;
    font-weight: 500;
    font-size: 20px;
    margin : 0 auto 0 0;
    padding : 14px 0 14px 0;
`;

const StImg = styled.img`
    margin : 0 auto 0 0;
`;

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    width: 314.67px;
    min-height: 303px;
    border-radius: 8px;
    margin : 0 16px 0 0;
    background-color:${props=>props.back};
    border: 1px solid rgba(215, 215, 215, 0.5);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    cursor: pointer;
`;

export default MeetingDown