import React from 'react'
import styled from 'styled-components'
import { useParams,useNavigate } from 'react-router';
import { useGetMeetSpecific } from '../Hooks/useGetMeetSpecific';
import { StButton,StBarBox,StBarG,StBarC } from '../style/styled';
import { useQueryClient } from 'react-query';
import casual from "../img/back/casual.png";
import office from "../img/back/office.png";

const MeetDetailTwo = () => {
  
  const navigate = useNavigate()

  const teamId = useParams().teamid;
  const meetingId = useParams().meetid;
  const {data:meeting} = useGetMeetSpecific({meetingId});
  const theme = useParams().theme;
  const queryClient = useQueryClient();

  return (
    <StBox state={theme}>
      <StModal>
        <Box>
        <StUp>
          <StBarBox>
            <StBarG/>
            <StBarG/>
            <StBarC/>
          </StBarBox>
          <StTitle>
            미팅룸 상세정보를 확인해주세요
          </StTitle>
          <StInfo>
            <StMeetTitleBox>
              <StInfoLeft>
                미팅 이름
              </StInfoLeft>
              <StInfoRight>
                {meeting?.meetingTitle}
              </StInfoRight>
            </StMeetTitleBox>
            <StLeaderBox>
              <StInfoLeft>
                주최자
              </StInfoLeft> 
              <StInfoRight>
                {meeting?.meetingCreator}
              </StInfoRight>
            </StLeaderBox>
            <StDateBox>
              <StInfoLeft>
                날짜
              </StInfoLeft> 
              <StInfoRight>
                {meeting?.meetingDate}  {meeting?.meetingTime}~
              </StInfoRight>
            </StDateBox>
            <StIssueBox>
              <StInfoLeft>
                안건
              </StInfoLeft> 
              <StIssueRight>
                {meeting?.issues?.map((value,index)=>{ 
                  return <StIssue>{index+1}. {value.issueContent} </StIssue>})}
              </StIssueRight>
            </StIssueBox>
            <StUrlBox>
              <StInfoLeft>
                미팅 URL
              </StInfoLeft> 
              <StInfoRight>
              </StInfoRight>
            </StUrlBox>
          </StInfo>
        </StUp>
        <StButton onClick={()=>{navigate(`/teamboard/${teamId}`)}}>완료</StButton>
        </Box>
      </StModal>
    </StBox>
  )
}

const StUrlBox = styled.div`
  display: flex;
  width : 784px;
  height : 50px;
`;

const StIssueBox = styled.div`
  display: flex;  
  width : 784px;
  height : 100px;
`;

const StDateBox = styled.div`
  display: flex;
  width : 784px;
`;

const StLeaderBox = styled.div`
  display: flex;
  width : 784px;
`;

const StMeetTitleBox = styled.div`
  display: flex;
  width : 784px;
`;

const StIssue = styled.div`
  display: flex;
  align-items: center;
  width : 640px;
  height : 25px;
  margin : 0 0 16px 0;
  font-weight: 500;
  font-size: 16px;
`;

const StIssueRight = styled.div`
  display: flex;
  flex-direction: column;
  width : 654px;
  height : 125px;
  margin : 0 0 0 40px;
  border : 1px solid ;
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


const StInfoRight = styled.div`
  width : 654px;
  height : 25px;
  margin : 0 0 0 40px;
  font-weight: 500;
  font-size: 16px;
`;

const StInfoLeft = styled.div`
  width : 130px;
  height: 25px;
  font-weight: 700;
  font-size: 16px;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 811px;
  height : 330px;
`;

const StTitle = styled.div`
  width :784px;
  height : 44px;
  margin : 44px 0 60px 0;
  font-weight: 600;
  font-size: 36px;
`;

const StUp = styled.div`
  width : 811px;
  height : 478px;
  margin : 0 0 80px 0;
`;

const Box = styled.div`
  width : 784px;
  height : 612px;
`;

const StModal = styled.div`
  width : 784px;
  height : 612px;
  padding : 150px 80px 80px 80px;
  background-color: white;
  border-radius: 32px;
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


export default MeetDetailTwo