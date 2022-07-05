import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components';
import apis from '../api/main'
import {useNavigate} from "react-router"
import { StBox,StSumnailBox,StSumTitle,StSumnail,StSumnailImg,StModal,StInnerBox,StButton,StBarBox,StBarG,StBarC,StOutBox,StInfo, } from '../style/styled';

const MeetMakeTwoOne = () => {

  const navigate = useNavigate();

  const meetTitle = useRef("");
  const [sumImg,setSumImg] = useState(1);
  const [theme,setTheme] = useState(1);

  const today = new Date();

  const meetMake = async(data)=>{
    const datas = await apis.postMeetStartIssue(data);
    return datas;
  }

  const { mutate } = useMutation(meetMake,{
    onSuccess: () => {
      navigate('/meetmakethree');
    },
    onError: (error) => {
      alert("로그인 불가")
    }
  });

  const makeFunction = () =>{
    mutate({
      meetingTitle : meetTitle.current.value,
      meetingDate : today.getFullYear,
      meetingSum : sumImg,
      meetingTheme : theme,
    })
  }

  
  return (
    <StBox>
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
                  <StMeetInput ref={meetTitle} placeholder='미팅룸 이름을 입력해주세요.'/>
                </StMeetNameBox>
                <StSumnailBox>
                  <StSumTitle>
                    썸네일 이미지 선택
                  </StSumTitle>
                  <StSumnail>
                    <StSumnailImg onClick={()=>{setSumImg(1)}}/>
                    <StSumnailImg onClick={()=>{setSumImg(2)}}/>
                    <StSumnailImg onClick={()=>{setSumImg(3)}}/>
                    <StSumnailImg onClick={()=>{setSumImg(4)}}/>
                    <StSumnailImg onClick={()=>{setSumImg(5)}}/>
                  </StSumnail>
                </StSumnailBox>
              </StLeft>
              <StTheme>
                <StThemeTitle>
                  테마 선택
                </StThemeTitle>
                <StThemeSmallBox>
                  <StThemeInnerBox onClick={()=>{setTheme(1)}}/>
                  <StThemeInnerBox onClick={()=>{setTheme(2)}}/>
                </StThemeSmallBox>
              </StTheme>
            </StInfo>
          </StInnerBox>
          <StButton onClick={makeFunction}>다음</StButton>
        </StOutBox>
      </StModal>
    </StBox>
  )
}



const StLeft = styled.div`
  display: flex;
  flex-direction: column;
  width : 380px;
  height : 228px;
  justify-content: space-between;
`;


const StThemeInnerBox = styled.img`
  width : 170px;
  height : 167px;
  border-radius: 8px;
  border: none;
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
  border: 1px solid black;
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
  border: 1px solid black;
  border-radius: 6px;
  background-color: #EAEAEA;
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

export default MeetMakeTwoOne