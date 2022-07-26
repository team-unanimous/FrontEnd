import React, { useRef } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { StTheme,StThemeTitle,StThemeSmallBox,StThemeInnerBox,StSumnailBox,StSumTitle,StSumnail,StSumnailImg,StBarBox,StBarC,StBarG,StTitle } from '../style/styled'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import apis from '../api/main'
import { teamID } from '../redux/modules/meetReducer'
import { useGetMeetSpecific } from '../Hooks/useGetMeetSpecific'

const MeetingEditTwoOne = () => {

  const teamId = useParams().teamid;
  const meetingId = useParams().meetid
  
  const {data} = useGetMeetSpecific({meetingId})
  console.log(data)
  const title = useRef("");
  const date = useRef("");
  const navigate = useNavigate();
  const [sumImg,setSumImg] = useState(data?.meetingSum);
  const [theme,setTheme] = useState(data?.meetingTheme);

  // 시간 옵션
  const [clicked,setClicked] = useState(false);
  const [time,setTime] = useState(data?.meetingTime);
  
  const times = [0,1,2,3,4,5,6,7,8,9];
  const timess = [10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  // 기간 옵션
  const durations = [1,2,3,4,5];

  const [duClicked, setDuClicked] = useState(false);
  const [duration,setDuration] = useState(data?.meetingDuration)


  // 미팅 수정하기
  const patchMeetProfile = async(data)=>{
    const datas = await apis.patchMeetProfile(data);
    console.log(datas)
    return datas;
  }

  const { mutate } = useMutation(patchMeetProfile,{
    onSuccess:()=>{
      navigate(`/teamboard/${teamId}/${meetingId}/meetingedittwo`)
      alert("미팅 수정 성공")
    },
    onError:(error)=>{
      alert("미팅 수정 실패");
    }
  });

  const makeFunction = () =>{
    mutate({
      meetingTitle : title.current.value,
      meetingDate : date.current.value,
      meetingTime : time,
      meetingSum : sumImg,
      meetingTheme : theme,
      meetingDuration : duration,
      meetId : meetingId
    })
  }


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
                  <StTitleInput maxLength="19" ref={title} defaultValue={data?.meetingTitle} placeholder='미팅룸 이름을 입력해주세요'/>
                </StTitleBox>
                <StSumnailBox>
                    <StSumTitle>
                      썸네일 이미지 선택
                    </StSumTitle>
                    <StSumnail>
                      <StSumnailImg1 clicked={sumImg} onClick={()=>{setSumImg(1)}}/>
                      <StSumnailImg2 clicked={sumImg} onClick={()=>{setSumImg(2)}}/>
                      <StSumnailImg3 clicked={sumImg} onClick={()=>{setSumImg(3)}}/>
                      <StSumnailImg4 clicked={sumImg} onClick={()=>{setSumImg(4)}}/>
                      <StSumnailImg5 clicked={sumImg} onClick={()=>{setSumImg(5)}}/>
                    </StSumnail>
                  </StSumnailBox>
                  <StTheme>
                    <StThemeTitle>
                      테마 선택
                    </StThemeTitle>
                    <StThemeSmallBox>
                      <StThemeInnerBox1 clicked={theme} onClick={()=>{setTheme(1)}}/>
                      <StThemeInnerBox2 clicked={theme} onClick={()=>{setTheme(2)}}/>
                    </StThemeSmallBox>
                  </StTheme>
              </StLeft>
              <StRight>
                <RUpBox>
                  <StDateBox>
                    <StDateText>
                      날짜
                    </StDateText>
                    <StDate ref={date} defaultValue={data?.meetingDate} type='date'/>
                  </StDateBox>
                  <StTimeBox>
                    <StDateText>
                      시간
                    </StDateText>
                    <StDropBox>
                      {time?<StDefault onClick={()=>{setClicked(!clicked)}}>{time}</StDefault>:
                      <StDefault onClick={()=>{setClicked(!clicked)}}>00:00</StDefault>}
                      <StOption clicked = {clicked}>
                        <StHidden>
                          {times.map((value,index)=>{
                            return <StTime key={index} onClick={()=>{setTime(`0${value}:00`);setClicked(!clicked)}}>0{value}:00</StTime>
                          })}
                          {timess.map((value,index)=>{
                            return <StTime key={index} onClick={()=>{setTime(`${value}:00`);setClicked(!clicked)}}>{value}:00</StTime>
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
          <StButton onClick={makeFunction}>다음</StButton>
        </StInBox>
      </StModal>
    </StBox>
  )
}


const StThemeInnerBox2 = styled.img`
  width : 170px;
  height : 167px;
  border-radius: 8px;
  border: ${props=>(props.clicked == 2 ? "1px solid black" :"none")};
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StThemeInnerBox1 = styled.img`
  width : 170px;
  height : 167px;
  border-radius: 8px;
  border: ${props=>(props.clicked == 1 ? "1px solid black" :"none")};
  background-color: #D9D9D9;
  cursor: pointer;
`;


const StSumnailImg1 = styled.img`
  border : ${props=>(props.clicked == 1 ? "1px solid black" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg2 = styled.img`
  border: ${props=>(props.clicked == 2 ? "1px solid black" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg3 = styled.img`
  border: ${props=>(props.clicked == 3 ? "1px solid black" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg4 = styled.img`
  border: ${props=>(props.clicked == 4 ? "1px solid black" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;

const StSumnailImg5 = styled.img`
  border: ${props=>(props.clicked == 5 ? "1px solid black" :"none")};
  width : 62px;
  height : 62px;
  border-radius: 8px;
  background-color: #D9D9D9;
  cursor: pointer;
`;


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
export default MeetingEditTwoOne