import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components';
import apis from '../api/main'


const MeetMakeOne = () => {


  return (
    <StBox>
      <StModal>
        <StTitle>
          새로운 미팅룸을 만들어보세요
        </StTitle>
        <StMeetNameBox>
          <StMeetName>
            미팅룸 이름 
          </StMeetName>
          <StMeetInput placeholder='미팅룸 이름을 입력해주세요.'/>
        </StMeetNameBox>
        <StSumnailBox>
          <StSumTitle>
            썸네일 이미지 선택
          </StSumTitle>
          <StSumnail>
            <StSumnailImg/>
            <StSumnailImg/>
            <StSumnailImg/>
            <StSumnailImg/>
            <StSumnailImg/>
          </StSumnail>
        </StSumnailBox>
        <StTheme>
          <StThemeTitle>
            테마 선택
          </StThemeTitle>
          <StThemeSmallBox>
            <StThemeInnerBox/>
            <StThemeInnerBox/>
          </StThemeSmallBox>
        </StTheme>
      </StModal>
    </StBox>
  )
}

const StThemeInnerBox = styled.img`
  width : 148px;
  height : 186.74px;
  border-radius: 8px;
  border: none;
  background-color: #D9D9D9;
`;

const StThemeSmallBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 306px;
  height : 186.74px;
  border-radius: 6px;
  margin : 12px 0 0 0;
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
  width : 336px;
  height : 247.74px;
  margin : 51px 0 0 73px;
`;

const StSumnailImg = styled.img`
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
`;

const StSumnail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width : 350px;
  height : 62px;
  padding : 15px;
  margin : 12px 0 0 0;
  border-radius: 6px;
  border: 1px solid black;
`;

const StSumTitle = styled.div`
  width : 140px;
  height : 19px;
  font-weight: 700;
  font-size: 16px;
`;

const StSumnailBox = styled.div`
  width : 380px;
  height : 123px;
  margin : 51px 0 0 73px;
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
  margin : 52px 0 0 73px;
`;

const StTitle = styled.div`
  width : 495px;
  height : 44px;
  margin : 103px 0 0 73px;
  font-weight: 600;
  font-size: 36px;
`;

const StModal = styled.div`
  width : 996px;
  height : 867px;
  border-radius: 32px;
  background-color: #EAEAEA;
`;

const StBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
  background-color: #818181;
`;

export default MeetMakeOne