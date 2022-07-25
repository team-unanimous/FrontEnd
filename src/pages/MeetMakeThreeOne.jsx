import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import apis from '../api/main'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router';
import { StBox,StButton,StBarBox,StBarG,StBarC } from '../style/styled';
import IssueBox from '../components/IssueBoxOne';
import useGetIssueList from '../Hooks/useGetIssueList';

const MeetMakeThreeOne = () => {

  const navigate = useNavigate();

  const teamID = useParams().teamid;
  const meetID = useSelector(state=>state.meetReducer.meetID).meetid
  const issue = useRef("");
  console.log(meetID)
  const { data } = useGetIssueList({meetID});
  console.log(data);


  if(meetID==null){
    navigate(`/teamboard/${teamID}/meetmaketwoone`)
  }
  
  const makeIssue = async(data)=>{
    const datas = await apis.postMeetStartIssue(data);
    return datas;
  }

  const {mutate} = useMutation(makeIssue,{
      onSuccess : ()=>{
        alert("안건 등록");
      },
      onError : ()=>{
        alert("안건 등록 실패")
      }      
  })

  const makeFunction = () =>{
    mutate({
      issueContent : issue.current.value,
      meetingId : meetID
    })
  }

  return (
    <StBox>
      <StModal>
        <StOutBox>
          <StBarBox>
            <StBarG/>
            <StBarC/>
            <StBarG/>
          </StBarBox>
          <StTitle>
            미팅룸에서 진행할 안건을 입력해주세요
          </StTitle>
          <StInnerBox>
            <StInputBox>
              <StInput ref={issue} placeholder='추가할 안건 내용을 입력해주세요'/>
              <StInputBt onClick={makeFunction}> 추가 </StInputBt>
            </StInputBox>
            <StInfoBox>
              <StInfoInner>
                {data?.map((value,index)=>{
                  return <IssueBox key={index} issueId={value.issueId} meetId={meetID} prop={value.issueContent}/>
                })}
              </StInfoInner>
            </StInfoBox>
          </StInnerBox>
          <StButton onClick={()=>{navigate(`/teamboard/${teamID}/${meetID}/meetdetailone`)}}>다음</StButton>
        </StOutBox>
      </StModal>
    </StBox>
  )
}

const StInfoInner = styled.div`
  width : 850px;
  height : 290px;
  overflow-x: hidden;
  ::-webkit-scrollbar{
    width:10px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #818181;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track{ 
    border-radius: 1rem;
  }
`;

const StInfoBox = styled.div`
  width : 835px;
  height : 336px;
  margin : 15px 0 0 0;
`;

const StTitle = styled.div`
  width : 100%;
  height : 44px;
  margin : 44px 0 0 0;
  font-weight: 600;
  font-size: 36px;
`;

const StInputBt = styled.button`
  width : 132px;
  height : 49px;
  border-radius: 6px;
  background-color: black;
  color : white;
  font-weight: 700;
  font-size: 16px;
`;

const StInput = styled.input`
  width : 664px;
  height : 18px;
  margin: 0 0 0 0;
  padding : 15px;
  border-radius: 6px;
  border: 1px solid black;
`;

const StInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width : 835px;
  height : 50px;
  margin : 60px 0 0 0;
`;

const StInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width : 835px;
  height : 400px;
  margin: 0 0 30px 0;
`;

const StOutBox = styled.div`
  width : 835px;
  height : 581px;
`;

const StModal = styled.div`
  width : 835px;
  height : 581px;
  padding : 150px 80px 80px 80px;
  background-color: #FFFFFF;
`;

export default MeetMakeThreeOne