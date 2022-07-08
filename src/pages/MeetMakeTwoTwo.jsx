import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { StTheme,StThemeTitle,StThemeSmallBox,StThemeInnerBox,StSumnailBox,StSumTitle,StSumnail,StSumnailImg,StBarBox,StBarC,StBarG,StTitle } from '../style/styled'
import { useNavigate } from 'react-router-dom'

const MeetMakeTwoTwo = () => {

  
  const navigate = useNavigate();

  // 시간 옵션
  const [clicked,setClicked] = useState(false);
  const [time,setTime] = useState("");
  
  const times = [1,2,3,4,5,6,7,8,9,10,11,12];

  // 기간 옵션
  const durations = [1,2,3,4,5];

  const [duClicked, setDuClicked] = useState(false);
  const [duration,setDuration] = useState("")


  return (
    <StBox>
      <StModal>
        <StInBox>
          <StBarBox>
              <StBarC/>
              <StBarG/>
              <StBarG/>
          </StBarBox>
          <StInnerBox>
            <StTitle>
              새로운 미팅룸을 만들어보세요
            </StTitle>
            <StInfoBox>
              <StLeft>
                <StTitleBox>
                  <StTitleName>미팅룸 이름</StTitleName>
                  <StTitleInput placeholder='미팅룸 이름을 입력해주세요'/>
                </StTitleBox>
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
              </StLeft>
              <StRight>
                <RUpBox>
                  <StDateBox>
                    <StDateText>
                      날짜
                    </StDateText>
                    <StDate type='date'/>
                  </StDateBox>
                  <StTimeBox>
                    <StDateText>
                      시간
                    </StDateText>
                    <StDropBox>
                      {time?<StDefault onClick={()=>{setClicked(!clicked)}}>{time}</StDefault>:
                      <StDefault onClick={()=>{setClicked(!clicked)}}>오전 0:00</StDefault>}
                      <StOption clicked = {clicked}>
                        <StHidden>
                          {times.map((value,index)=>{
                            return <StTime key={index} onClick={()=>{setTime(`오전 ${value}:00`);setClicked(!clicked)}}>오전 {value}:00</StTime>
                          })}
                          {times.map((value,index)=>{
                            return <StTime key={index} onClick={()=>{setTime(`오후 ${value}:00`);setClicked(!clicked)}}>오후 {value}:00</StTime>
                          })}
                        </StHidden>
                      </StOption>
                    </StDropBox>
                  </StTimeBox>
                </RUpBox>
                <StTimeBox>
                    <StDateText>
                      기간
                    </StDateText>
                    <StDropBox>
                      {duration?<StDefault onClick={()=>{setDuClicked(!duClicked)}}>{duration}</StDefault>:
                      <StDefault onClick={()=>{setDuClicked(!duClicked)}}>0시간</StDefault>}
                      <StDuOption clicked = {duClicked}>
                        <StHidden>
                          {durations.map((value,index)=>{
                            return <StTime key={index} onClick={()=>{setDuration(`${value}시간`);setDuClicked(!duClicked)}}>{value}시간</StTime>
                          })}
                        </StHidden>
                      </StDuOption>
                    </StDropBox>
                  </StTimeBox>
              </StRight>
            </StInfoBox>
          </StInnerBox>
          <StButton onClick={()=>{navigate('/meetmakethree')}}>다음</StButton>
        </StInBox>
      </StModal>
    </StBox>
  )
}

const StButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 236px;
  height : 54px;
  margin : 0 auto 0 auto;
  border-radius: 6px;
  background-color: black;
  color : white;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

const StInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 845px;
  height: 763px;
`;

const StTime = styled.div`
  width : 135px;
  height : 15px;
  padding : 10px 0 10px 0;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  &:hover{
    background-color: #EAEAEA;
  }
  cursor: pointer;
`;

const StDefault = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  bottom : 0;
  width : 143px;
  height : 6px;
  padding : 20px;
  border : 1px solid black;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
`;

const StHidden = styled.div`
  width : 145px;
  height : 180px;
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

const StDuOption = styled.div`
  position: absolute;
  display: ${props=>(props.clicked ? "" :"none")};
  top : 55px;
  left : 0;
  width: 145px;
  height: 180px;
  padding : 20px;
  border-radius: 8px;
  border : 1px solid black;
  background-color: white;
`;

const StOption = styled.div`
  position: absolute;
  display: ${props=>(props.clicked ? "" :"none")};
  top : 55px;
  left : 0;
  width: 145px;
  height: 180px;
  padding : 20px;
  border-radius: 8px;
  border : 1px solid black;
  background-color: white;
`;

const StDropBox = styled.div`
  position: relative;
  width : 155px;
  height : 20px;
  padding : 15px;
`;

const StTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 186px;
  height : 81px;
`;

const StDate = styled.input`
  width : 156px;
  height : 18px;
  padding : 14px;
  border : 1px solid black;
  border-radius: 6px;
`;

const StDateText = styled.div`
  width : 40px;
  height : 19px;
  font-weight: 700;
  font-size: 16px;
`;

const StDateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 186px;
  height : 81px;
`;

const RUpBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 380px;
  height : 81px;
`;

const StTitleInput = styled.input`
  width : 350px;
  height : 19px;
  padding : 13px;
  border-radius: 6px;
`;

const StTitleName = styled.div`
  width : 90px;
  height : 19px;
  font-weight: 700;
  font-size: 16px;
`;

const StTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 380px;
  height : 80px;
`;

const StRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 380px;
  height : 186px;
`;

const StLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 380px;
  height : 481px;
`;

const StInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width : 845px;
  height : 481px;
  margin : auto 0 0 0;
`;

const StInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width : 845px;
  height : 585px;
`;

const StModal = styled.div`
  width : 845px;
  height : 693px;
  margin : 20px 0 0 0;
  padding : 120px 80px 110px 80px;
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

export default MeetMakeTwoTwo