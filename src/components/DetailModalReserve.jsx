import React from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import apis from '../api/main';
import doorIcon from '../img/outdoor.png'
import thumbnail1 from '../img/TeamBoard/3.beforemeeting/thumbnail1.svg'
import thumbnail2 from '../img/TeamBoard/3.beforemeeting/thumbnail2.svg'
import thumbnail3 from '../img/TeamBoard/3.beforemeeting/thumbnail3.svg'
import thumbnail4 from '../img/TeamBoard/3.beforemeeting/thumbnail4.svg'
import thumbnail5 from '../img/TeamBoard/3.beforemeeting/thumbnail5.svg'
import closeIcon from '../img/TeamBoard/popup/close.svg'
import participate from '../img/MeetingMangement-20220725T100748Z-001/MeetingMangement/icon_participate.svg'
import jwt_decode from "jwt-decode";
import { getCookie } from '../Cookie';
import copyIcon from '../img/TeamBoard/popup/icon_url.svg'

const DetailModalReserve = ({open, close,meetingTitle,meetingDate,meetingTime,meetingCreator,issues, meetingId,teamId,meetingThumbnail}) => {

    const decoded = jwt_decode(getCookie('token'));
    const nickname = decoded.USER_NICKNAME;

    const navigate = useNavigate();

    // 복사하기 버튼
    const handleCopyClipBoard = async (text) => {
        await navigator.clipboard.writeText(text);
    };       

    //미팅 삭제 부분
    const deleteMeet = async(data)=>{
        const datas = await apis.deleteMeet(data);
        return datas;
    }

    const {mutate:del} = useMutation(deleteMeet,{
        onSuccess:()=>{
            alert("미팅삭제완료");
        },
        onError:()=>{
            alert("미팅삭제실패");
        }
    })

    const delet = () => {
        del({
            meetingId : meetingId
        })
    }


    // 미팅 시작하기
    const startMeet = async(data)=>{
        const datas = await apis.patchNow(data);
        return datas;
    }

    const {mutate:start} = useMutation(startMeet,{
        onSuccess:()=>{
            alert("미팅이 시작됩니다.")
            navigate(`/meetingroom/${teamId}/${meetingId}`);
        },
        onError:()=>{
            alert("미팅이 시작되지 않습니다.")
        }
    })

    const starting = () =>{
        start({
            meetingId : meetingId
        })
    }

  return (
    <>
    {open?
    <>
    <StBack onClick={close}/>
        <StBox>
            <StCloseIcon src={closeIcon} onClick={close}/>
            {meetingThumbnail==1?<StImg src={thumbnail1}/>:<></>}
            {meetingThumbnail==2?<StImg src={thumbnail2}/>:<></>}
            {meetingThumbnail==3?<StImg src={thumbnail3}/>:<></>}
            {meetingThumbnail==4?<StImg src={thumbnail4}/>:<></>}
            {meetingThumbnail==5?<StImg src={thumbnail5}/>:<></>}
            <StTitle>회의명 '{meetingTitle}'</StTitle>
            <StLine/>
            <StInfo>
                <StHostBox>
                    <StHostLeft>주최자</StHostLeft>
                    <StRight>{meetingCreator}</StRight>
                </StHostBox>
                <StDateBox>
                    <StHostLeft>날짜</StHostLeft>
                    <StRight>{meetingDate} {meetingTime}</StRight>
                </StDateBox>
                <StIssueBox>
                    <StHostLeft>안건</StHostLeft>
                    
                    {meetingThumbnail==1?<StIssues color="#FCF3E9">
                        {issues?.map((value,index)=>{
                            return <StIssue key={index}>{index+1}. {value.issueContent}</StIssue>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==2?<StIssues color="#FCF7E7">
                        {issues?.map((value,index)=>{
                            return <StIssue key={index}>{index+1}. {value.issueContent}</StIssue>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==3?<StIssues color="#F3F7F3">
                        {issues?.map((value,index)=>{
                            return <StIssue key={index}>{index+1}. {value.issueContent}</StIssue>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==4?<StIssues color="#EFF7FB">
                        {issues?.map((value,index)=>{
                            return <StIssue key={index}>{index+1}. {value.issueContent}</StIssue>
                        })}
                    </StIssues>:<></>}
                    {meetingThumbnail==5?<StIssues color="#FCF6F9">
                        {issues?.map((value,index)=>{
                            return <StIssue key={index}>{index+1}. {value.issueContent}</StIssue>
                        })}
                    </StIssues>:<></>}
                    
                </StIssueBox>
                <StDateBox>
                    <StHostLeft>미팅 URL</StHostLeft>
                    <StIssue>
                        <StUrl>
                            https://unanimous.co.kr/{teamId}/{meetingId} 
                        </StUrl>
                        <StCopy onClick={() => handleCopyClipBoard(`https://unanimous.co.kr/${teamId}/${meetingId}`)}>
                            <img src={copyIcon}/> url 복사
                        </StCopy>
                    </StIssue>
                </StDateBox>
            </StInfo>
            <StLine/>
            <StDownBox>
                {meetingCreator==nickname?
                <>
                    <StBtBox>
                        <StEdit onClick={()=>{navigate(`/teamboard/${teamId}/${meetingId}/meetingeditone`)}}>수정</StEdit>
                        <div onClick={close}><StDelete onClick={delet}>삭제</StDelete></div>
                    </StBtBox>
                    <StButton onClick={starting}><StIconImg src={participate}/>시작하기</StButton>
                </>:<></>}
            </StDownBox>
        </StBox>
        </>:<></>}
    </>
  )
}

const StCopy = styled.div`
    display: flex;
    align-items: center;
    margin : 20px 0 0 0;
    color : #2396F0;
    cursor: pointer;
`;

const StUrl = styled.div`

`;

const StCloseIcon = styled.img`
    position: absolute;
    top : 20px;
    right : 20px;
    cursor: pointer;
`;

const StDownBox = styled.div`
    display: flex;
    justify-content: space-between;
    width : 100%;
    height : 54px;
`;

const StDelete = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 132px;
    height : 52px;
    border-radius: 6px;
    border: 1px solid #063250;
    font-weight: 700;
    font-size: 20px;
`;

const StEdit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 130px;
    height : 52px;
    border: 1px solid #063250;
    border-radius: 6px;
    font-weight: 700;
    font-size: 20px;
`;

const StBtBox = styled.div`
    display: flex;
    justify-content: space-between;
    width : 280px;
    height : 54px;
`;

const StIconImg = styled.img`
    width : 24px;
    height : 24px;
`;

const StButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 108px;
    height : 24px;
    padding : 15px 64px 15px 64px;
    margin : 0 0 0 auto;
    border: 1px solid black;
    border-radius: 6px;
    background-color: #063250;
    border: none;
    color : white;
    cursor: pointer;
`;

const StLine = styled.div`
    width : 783px;
    height : 1.5px;
    margin : 50px 0 60px 0;
    background-color: #D9D9D9;
`;

const StIssue = styled.div`
    width: 600px;
    height: 20px;
    margin : 0 0 7px 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const StIssues = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 585px;
    height: 60px;
    background-color: ${props=>props.color};
    border-radius: 10px;

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

const StIssueBox = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 92px;
    margin : 0 0 10px 0;
`;

const StDateBox = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 20px;
`;

const StRight = styled.div`
    width : 600px;
    height : 20px;
`;

const StHostLeft = styled.div`
    display: flex;
    width: 80px;
    height: 20px;
    margin : 0 83px 0 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const StHostBox = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
`;

const StInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 811px;
    height: 278px; 
`;

const StTitle = styled.div`
    width: 784px;
    height: 44px;
    margin : 32px 0 0 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
`;

const StImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 80px;
    height : 80px;
    border-radius: 48px;
`;

const StBox = styled.div`
    position:fixed;
    display: flex;
    flex-direction: column;
    width : 784px;
    height : 628px;
    padding : 120px 80px 80px 80px;
    border-radius: 8px;
    background-color: white;
    z-index : 20;
    box-shadow:(0px 4px 20px rgba(0, 0, 0, 0.1));
`;

const StBack = styled.div`
    position : fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 100%;
    background-color: rgba(0,0,0,0.4);
    z-index : 10;
`;

export default DetailModalReserve;