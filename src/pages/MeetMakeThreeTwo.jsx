import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components';
import apis from '../api/main'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { StBarBox,StBarG,StBarC } from '../style/styled';
import IssueBox from '../components/IssueBoxTwo';
import useGetIssueList from '../Hooks/useGetIssueList';
import casual from "../img/back/casual.png";
import office from "../img/back/office.png";

const MeetMakeThreeTwo = () => {

  const navigate = useNavigate();

  const teamID = useParams().teamid;
  const theme = useParams().theme;
  const meetID = useSelector(state=>state.meetReducer.meetID).meetid
  const issue = useRef("");


  const { data } = useGetIssueList({meetID});
  


  //안건 등록
  const makeIssue = async(data)=>{
    const datas = apis.postMeetReserveIssue(data)
    return datas;
  }

  const {mutate} = useMutation(makeIssue,{
    onSuccess:()=>{
    },
    onError:(error)=>{
        alert("안건등록 실패")
    }
  });

  const makeFunction =()=>{
    mutate({
        issueContent : issue.current.value,
        meetingId : meetID
    })
  }

  return (
    <StBox state={theme}>
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
              <StInput maxLength={40} ref={issue} placeholder='추가할 안건 내용을 입력해주세요'/>
              <div onClick={()=>{issue.current.value=''}}><StInputBt onClick={makeFunction}> 추가 </StInputBt></div>
            </StInputBox>
            <StInfoBox>
              <StInfoInner>
                {data?.map((value,index)=>{
                  return <IssueBox key={index} issueId={value.issueId} meetId={meetID} prop={value.issueContent}/>
                })}
              </StInfoInner>
            </StInfoBox>
          </StInnerBox>
          <StBtBox>
            <StCancelBt onClick={()=>{navigate(`/teamboard/${teamID}`)}}>취소</StCancelBt>
            <StBt onClick={()=>{navigate(`/teamboard/${teamID}/${meetID}/${theme}/meetdetailtwo`)}}>다음</StBt>
          </StBtBox>
        </StOutBox>
      </StModal>
    </StBox>
  )
}

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 500px;
  margin : 0px auto 0 auto;
`;

const StCancelBt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: 54px;
  border: 1px solid #5C5C5C;
  border-radius: 6px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #888888;;
  cursor: pointer;
`;

const StBt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: 54px;
  background-color: #063250;
  border-radius: 6px;
  color : white;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;

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

const StIssueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 835px;
  height : 83px;
  margin : 10px 0 10px 0;
  border-radius: 8px;
  background-color: #EFEFEF;
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
  background-color: #063250;
  border: none;
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
  border-radius: 32px;
  background-color: #FFFFFF;
`;

const StBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
  background-image:  ${props => (props.state == 1 ? `url(${office})` : `url(${casual})`)};
  background-size:cover;
`;

export default MeetMakeThreeTwo