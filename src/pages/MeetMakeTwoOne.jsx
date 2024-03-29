import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components';
import apis from '../api/main'
import {useNavigate} from "react-router"
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { teamID } from '../redux/modules/meetReducer';
import { StSumnailBox,StSumTitle,StSumnail,StModal,StInnerBox,StButton,StBarBox,StBarG,StBarC,StOutBox,StInfo, } from '../style/styled';
import sum1 from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/thumbnail1.svg'
import sum2 from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/thumbnail2.svg'
import sum3 from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/thumbnail3.svg'
import sum4 from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/thumbnail4.svg'
import sum5 from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/thumbnail5.svg'
import theme1 from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/theme1.svg'
import theme2 from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/theme2.svg'
import nextbt from '../img/4.CreateMeeting/1-1.nowstart/basicinfo/btn_next.svg'
import casual from "../img/back/casual.png";
import office from "../img/back/office.png";
import { themem } from '../redux/modules/meetReducer';

const MeetMakeTwoOne = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const meetTitle = useRef("");
  const [sumImg,setSumImg] = useState(1);
  const [theme,setTheme] = useState(1);
  const [boardId,setBoardId] = useState();

  const teamId = useParams().teamid;

  const today = new Date();

  const date = today.getFullYear()+"/" + today.getMonth()+"/" + today.getDate();
  const time = today.getHours()+":"+today.getMinutes();
  
  const meetMake = async(data)=>{
    const datas = await apis.postStartMeet(data);
    dispatch(teamID({
      meetid : datas.data,
    }))
    return datas;
  }

  const { mutate } = useMutation(meetMake,{
    onSuccess: () => {
      navigate(`/teamboard/${teamId}/${theme}/meetmakethreeone`);
    },
    onError: (error) => {
      alert("미팅룸 이름을 설정해주세요")
    }
  });

  const makeFunction = () =>{
    mutate({
      meetingTitle : meetTitle.current.value,
      meetingDate : date,
      meetingSum : sumImg,
      meetingTheme : theme,
      meetingTime : time,
      teamId :teamId,
    })
  }

  
  return (
    <StBox state={theme}>
      <StModal>
        <StOutBox>
          <StBarBox>
            <StBarC/>
            <StBarG/>
            <StBarG/>
          </StBarBox>
          <StInnerBox>
            <StTitle>
              새로운 미팅룸을 만들어보세요
            </StTitle>
            <StInfo>
              <StLeft>
                <StMeetNameBox>
                  <StMeetName>
                    미팅룸 이름 
                  </StMeetName>
                  <StMeetInput type="text" maxLength='19' required ref={meetTitle} placeholder='미팅룸 이름을 입력해주세요.'/>
                </StMeetNameBox>
                <StSumnailBox>
                  <StSumTitle>
                    썸네일 이미지 선택
                  </StSumTitle>
                  <StSumnail>
                    <StSumnailImg1 src={sum1} clicked={sumImg} onClick={()=>{setSumImg(1)}}/>
                    <StSumnailImg2 src={sum2} clicked={sumImg} onClick={()=>{setSumImg(2)}}/>
                    <StSumnailImg3 src={sum3} clicked={sumImg} onClick={()=>{setSumImg(3)}}/>
                    <StSumnailImg4 src={sum4} clicked={sumImg} onClick={()=>{setSumImg(4)}}/>
                    <StSumnailImg5 src={sum5} clicked={sumImg} onClick={()=>{setSumImg(5)}}/>
                  </StSumnail>
                </StSumnailBox>
              </StLeft>
              <StTheme>
                <StThemeTitle>
                  테마 선택
                </StThemeTitle>
                <StThemeSmallBox>
                  <StThemeInnerBox1 src={theme1} clicked={theme} onClick={()=>{setTheme(1)}}/>
                  <StThemeInnerBox2 src={theme2} clicked={theme} onClick={()=>{setTheme(2)}}/>
                </StThemeSmallBox>
              </StTheme>
            </StInfo>
          </StInnerBox>
          <StBtBox>
            <StCancelBt onClick={()=>{navigate(`/teamboard/${teamId}`)}}>취소</StCancelBt>
            <StBt onClick={makeFunction}>다음</StBt>
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
  margin : 80px auto 0 auto;
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

const StSumnailImg1 = styled.img`
  border : ${props=>(props.clicked == 1 ? "2px solid #2396F0" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg2 = styled.img`
  border: ${props=>(props.clicked == 2 ? "2px solid #2396F0" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg3 = styled.img`
  border: ${props=>(props.clicked == 3 ? "2px solid #2396F0" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg4 = styled.img`
  border: ${props=>(props.clicked == 4 ? "2px solid #2396F0" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg5 = styled.img`
  border: ${props=>(props.clicked == 5 ? "2px solid #2396F0" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StLeft = styled.div`
  display: flex;
  flex-direction: column;
  width : 380px;
  height : 228px;
  justify-content: space-between;
`;

const StThemeInnerBox2 = styled.img`
  width : 170px;
  height : 167px;
  border-radius: 8px;
  border: ${props=>(props.clicked == 2 ? "2px solid #2396F0" :"none")};
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StThemeInnerBox1 = styled.img`
  width : 170px;
  height : 167px;
  border-radius: 8px;
  border: ${props=>(props.clicked == 1 ? "2px solid #2396F0" :"none")};
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StThemeSmallBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width : 350px;
  height : 167px;
  margin: auto 0 0 0;
  border-radius: 6px;
  padding : 15px;
  border: 1px solid #5C5C5C;
`;

const StThemeTitle = styled.div`
  width : 73px;
  height : 19px;
  font-weight: 700;
  font-size: 16px;
`;

const StTheme = styled.div`
  display: flex;
  flex-direction: column;
  width : 380px;
  height : 228px;
`;


const StMeetInput = styled.input`
  width : 344px;
  height : 15px;
  margin : 12px 0 0 0;
  padding : 15px;
  border: 1px solid #5C5C5C;
  border-radius: 6px;
  background-color:  #FFFFFF;;
`;

const StMeetName = styled.div`
  width : 86px;
  height : 19px;
  font-weight: 700;
  font-size: 16px;
`;

const StMeetNameBox = styled.div`
  width : 380px;
  height : 80px;
`;

const StTitle = styled.div`
  width : 495px;
  height : 44px;
  font-weight: 600;
  font-size: 36px;
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

export default MeetMakeTwoOne