import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components'
import { useGetTeamInfo } from '../Hooks/useGetTeamInfo'
import jwt_decode from "jwt-decode";
import { getCookie } from '../Cookie';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import logo from '../img/favicon.svg'

const Header = ({ teamname }) => {

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const { data: user } = useGetTeamInfo();
  const decoded = jwt_decode(getCookie('token'));
  const nickname = decoded.USER_NICKNAME;
  const img = decoded.USER_IMAGE;
  const queryClient = useQueryClient();

  return (
    <StWhole>   
       <StLogo onClick={()=>{navigate(`/teamselect`)}} src={logo}/>
      <StTimeBox>
        <StRightBox>
          <StDropBox>
            <StDefault onClick={() => { setClicked(!clicked) }}>{teamname}</StDefault>
            {/* <StOption clicked={clicked}>
              <StHidden>
                {user?.map((value, index) => {
                  return <StTime key={index} onClick={() => { setClicked(!clicked); queryClient.invalidateQueries("meeting"); navigate(`/teamboard/${value.teamId}`) }}>{value.teamname}</StTime>
                })}
              </StHidden>
            </StOption> */}
          </StDropBox>
          <StMyPage onClick={() => { navigate(`/mypage`) }} src={img} />
          <StNick>{nickname}</StNick>
        </StRightBox>
      </StTimeBox>
    </StWhole>
  )
}

const StNick = styled.div`
    display: flex;
    justify-content: start;
    
    height : 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

`;

const StRightBox = styled.div`
    position : absolute;
    top : 15px;
    right : 42px;
    display: flex;
    align-items: center;
    height : 48px;
`;

const StDefault = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  bottom : 0;
  width : 160px;
  height : 6px;
  padding : 20px;
  border: none;
  border-radius: 6px;
  background-color: #F1F1F1;
`;

const StHidden = styled.div`
  width : 145px;
  height : 180px;
  overflow-x: hidden;
  z-index: 3;

`;

const StDropBox = styled.div`
    display : flex;
  position: relative;
  width : 155px;
  height : 20px;
  margin : 0 48px 0 0;
  padding : 15px;
`;

const StTimeBox = styled.div`
    top : 30px;
    right : 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width : 186px;
    height : 81px;
`;

const StOption = styled.div`
  position: absolute;
  display: ${props => (props.clicked ? "" : "none")};
  top : 55px;
  left : 0;
  width: 160px;
  height: 100px;
  padding : 20px;
  border-radius: 8px;
  border : 1px solid black;
  background-color: white;
`;

const StMyPage = styled.img`
    width : 3rem;
    height : 3rem;
    background-color: skyblue;
    margin : 0 16px 0 32px;
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