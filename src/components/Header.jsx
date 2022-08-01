import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components'
import jwt_decode from "jwt-decode";
import { getCookie, removeCookie } from '../Cookie';
import logo from '../img/favicon.svg'

const Header = ({ teamname }) => {

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const decoded = jwt_decode(getCookie('token'));
  const nickname = decoded.USER_NICKNAME;
  const img = decoded.USER_IMAGE;
  const teamId = useParams().teamid;

  return (
    <StWhole>   
       <StLogo onClick={()=>{navigate(`/teamselect`)}} src={logo}/>
        <StRightBox>

            <StMeet onClick={()=>{navigate(`/teamboard/${teamId}/meetmakeone`)}}>
              <StPlus>+</StPlus>
              미팅룸 만들기
            </StMeet>

          {/* <StDropBox>
            <StDefault onClick={() => { setClicked(!clicked) }}>{teamname}</StDefault>
          </StDropBox> */}
          <StMyPaged  >
            <StDy onClick={() => { setClicked(!clicked); }}>
              <StMyPage src={img} />
              <StNick>{nickname}</StNick>
            </StDy>
            <StDropBox click={clicked}>
              <StDropContent onClick={()=>{navigate(`/mypage`); setClicked(!clicked)}}>마이페이지</StDropContent>
              <StLine/>
              <StDropContent onClick={()=>{setClicked(!clicked); navigate(`/login`); removeCookie("token");}}>로그아웃</StDropContent>
            </StDropBox>
          </StMyPaged>
        </StRightBox>
    </StWhole>
  )
}

const StDy = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StLine = styled.div`
  height : 1px;
  width: 160px;
  background-color: #EAEAEA;
`;

const StDropContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 48px;
  margin : 0 0 0px 0 ;
  cursor: pointer;
`;

const StDropBox = styled.div`
  position: absolute;
  top : 50px;
  left : 0px;
  display: ${props=>props.click?"flex":"none"};
  flex-direction: column;
  width: 160px;
  height: 97px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const StPlus = styled.div`
  display: flex;
  justify-content: center;
  margin : 0 0 0 0;
  font-size: 25px;
  font-weight: 400;
`;

const StMyPaged = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding : 0 15px 0 15px;
`;

const StMeet = styled.div`
  display: flex;
  justify-content: space-between;
  padding : 3px 19px 3px 19px;
  align-items: center;
  width : 125px;
  height : 40px;
  margin : 0 0px 0 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  background: rgba(241, 211, 148, 0.3);
  border-radius: 8px;
  color : #EFB061;
  &:hover{
    background: #EFB061;
    color : white;
  }
  cursor: pointer;
`;

const StNick = styled.div`
    display: flex;
    justify-content: start;
    height : 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;

const StRightBox = styled.div`
    display: flex;
    align-items: center;
    margin : auto 50px auto auto;
    max-width : 450px;
    height : 48px;
`;

const StMyPage = styled.img`
    width : 40px;
    height : 40px;
    background-color: skyblue;
    margin : 0 16px 0 0px;
    border-radius: 10rem;
`;

const StWhole = styled.div`
    position : relative;
    display: flex;
    align-items: center;
    width : 100%;
    height : 5rem;
`;

const StLogo = styled.img`
    width: 32px;
    height: 32px;
    margin : 0 0 0 42px;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 20px;
    cursor: pointer;
`;

export default Header