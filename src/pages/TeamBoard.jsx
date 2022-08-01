import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import TeamboardHome from '../components/TeamboardHome';
import MeetingManage from '../components/MeetingManage';
import TeamSetting from '../components/TeamSetting';
import useGetTeamMain from '../Hooks/useGetTeamMain';
import home from '../img/home.png';
import homeselect from '../img/TeamBoard/sidebar/home_active.svg';
import meeting from '../img/TeamBoard/sidebar/meeting_disabled.svg';
import meetingselect from '../img/TeamBoard/sidebar/meeting_active.svg';
import setting from '../img/setting.png';
import settingselect from '../img/TeamBoard/sidebar/settings_active.svg';
import jwt_decode from "jwt-decode";
import { getCookie } from '../Cookie';
import { useQueryClient } from 'react-query';
import apis from '../api/main';
import yujin from '../img/Easter/yujin.jpg'
import tuto1 from '../img/tuto1.png';
import tuto2 from '../img/tuto2.png';
import tutoBt from '../img/tutoBt1.png';

const TeamBoard = () => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  queryClient.invalidateQueries('meeting');
  const [page, setPage] = useState(1);
  const teamId = useParams().teamid;

  const { data: main } = useGetTeamMain({ teamId });
  const decoded = jwt_decode(getCookie('token'));
  const nickname = decoded.USER_NICKNAME;
  const [imgfile, setImgfile] = useState("");

  const [count, setCount] = useState(0);

  const token = getCookie("token");

  // if(!token){
  //   navigate(`/login`)
  // }

  useEffect(() => {
    const imageFy = async () => {
      const data = await apis.getTeam();
      setImgfile(data.data[0].teamImage)
    }
    imageFy();
  }, [])

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true,audio:true })
  }else{
    alert("카메라가 인식되지 않았습니다. 카메라를 확인해주세요.")
  }
    //   .then(function (stream) {
    //     videoRef.current.srcObject = stream;
    //   })
    //   .catch(function (error) {
    //     alert("카메라가 인식되지않습니다. 카메라를 확인해주세요.");
    //     console.log(error);
    // return navigate('/');
    //   });
    // }
  const easter = ()=>{
    setCount(count+1);
  }
  console.log(count);

  const [openone, setOpenone] = useState(false);
  const [opentwo, setOpentwo] = useState(false);


  return (
    <>
      {openone?<StTutorial onClick={()=>{setOpenone(false);setOpentwo(true)}} src={tuto1}/>:<></>}
      {opentwo?<StTutorial onClick={()=>{setOpentwo(false)}} src={tuto2}/>:<></>}
      <StBox>
        
        <Header teamname={main?.teamname} />
        <StDownBox>
          <StLeft>
            <StSmallBox>
              <StTeamInfoBox>
                {count==10?<StTeamImg src={yujin} onClick={()=>{easter}}></StTeamImg>:<>{imgfile ? <StTeamImg onClick={()=>{setPage(1);easter();}} src={main?.teamImage} /> : <></>}</>}
                <StInfoBox>
                  <StTeamName>{main?.teamname}</StTeamName>
                  {main?.teamManager == nickname ? <StTeamClass>Leader</StTeamClass> : <StTeamClass>member</StTeamClass>}
                </StInfoBox>
              </StTeamInfoBox>
              <StBtBox>
                <StButton1 page={page} onClick={() => { setPage(1) }}> {page == 1 ? <StImg src={homeselect} /> : <StImg src={home} />}홈 </StButton1>
                <StButton2 page={page} onClick={() => { setPage(2) }}> {page == 2 ? <StImg src={meetingselect} /> : <StImg src={meeting} />}미팅 관리 </StButton2>
                <StLine/>
                <StButton3 page={page} onClick={() => { setPage(3) }}> {page == 3 ? <StImg src={settingselect} /> : <StImg src={setting} />}환경설정 </StButton3>
              </StBtBox>
            </StSmallBox>
          {/* <StLImg src={left}/> */}
          <StTutorialBt src={tutoBt} onClick={()=>{setOpenone(true)}}/>
          </StLeft>
          <>
            {page == 1 ? <TeamboardHome /> : <></>}
            {page == 2 ? <MeetingManage /> : <></>}
            {page == 3 ? <TeamSetting teamLeader={main?.teamManager} prop={main?.user} /> : <></>}
          </>
        </StDownBox>
        {/* {page == 1 ? <StMeetMake onClick={() => { navigate(`/teamboard/${teamId}/meetmakeone`) }}><img src={plusIcon} /></StMeetMake> : <></>} */}

      </StBox>
    </>
  );
};

const StTutorial = styled.img`
  position : fixed;
  width: 100vw;
  height : 100vh;
  z-index: 10;
`;

const StTutorialBt = styled.img`
  position : absolute;
  bottom : 40px;
  left : 190px;
  width : 60px;
  height: 60px;
  cursor: pointer;
`;

const StLine = styled.div`
  width : 285px;
  height : 0.1px;
  background-color: #D9D9D9;
`;

const StImg = styled.img`
  width : 24px;
  height : 24px;
  margin : 0 16px 0 16px;
`;

const StButton3 = styled.div`
    display: flex;
    align-items: center;
    width : 286px;
    height : 44px;
    border-radius: 8px;
    background-color: ${props => (props.page == 3 ? "#EBF7FF;" : "none")};
    color:  ${props => (props.page == 3 ? "#2396F0;" : "#888888")};
    cursor: pointer;
`;

const StButton2 = styled.div`
    display: flex;
    align-items: center;
    width : 286px;
    height : 44px;
    border-radius: 8px;
    background-color: ${props => (props.page == 2 ? "#EBF7FF;" : "none")};
    color:  ${props => (props.page == 2 ? "#2396F0;" : "#888888")};
    cursor: pointer;
`;

const StButton1 = styled.div`
    display: flex;
    align-items: center;
    width : 286px;
    height : 44px;
    border-radius: 8px;
    background-color: ${props => (props.page == 1 ? "#EBF7FF;" : "none")};
    color:  ${props => (props.page == 1 ? "#2396F0;" : "#888888")};
    cursor: pointer;
`;

const StBtBox = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width : 286px;
    height : 166px;
    margin : 48px 0 0 0;
`;

const StTeamClass = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 88px;
    height : 25px;
    margin : 10px 0 0 0 ;
    padding : 2px 10px;
    font-size: 14px;
    border-radius: 100px;
    color:white;
    background: #2396F0;
`;

const StTeamName = styled.div`
    display: flex;
    justify-content: center;
    width : 154px;
    min-height : 24px;
    font-style: normal;
  
    font-size: 20px;
    line-height: 24px;
    text-align: center;
`;

const StInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 134px;
    min-height: 61px;
    margin : 0px 0 0 0;
`;

const StTeamImg = styled.img`
    width : 100px;
    height : 100px;
    margin : 0 0 0 0;
    border-radius: 100px;
    background: #D7D7D7;
    object-fit: cover;
    border: 5px solid #FCFCFC;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
`;

const StTeamInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width :214px;
    height : 189px;
    padding : 36px 16px 36px 24px;

`;

const StSmallBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width : 286px;
    height : 659px;

    margin : 42px 0 0 0;
`;

const StLeft = styled.div`
  width : 336px;
  height : 91.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding : 0 0 0 0px;
  /* background-color: #F2F6F9; */
  `;

const StMeetMake = styled.div`
  position: fixed;
  bottom :50px;
  right : 168px;
  display:  flex;
  justify-content: center;
  align-items: center;
  width :56px;
  height : 56px;
  border-radius: 56px;
  background-color: #EFB061;
  color : white;
  font-size: 50px;
  animation: fadein 0.4s;
  cursor: pointer;
`;

const StDownBox = styled.div`
  display: flex;
  justify-content: center;
  height : 100%;
  
`;

const StBox = styled.div`
  width : 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding : 0;
`;

export default TeamBoard;