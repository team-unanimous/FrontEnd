import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const TeamBoard = () => {


  return  (
          <StBox>
            <Header/>
            <StDownBox> 
              <StEmpty/>
              <StLeft>
                <StTeamImg/>
                <StTeamName> 
                  팀 이름은 아무개
                </StTeamName>
                <StTeamList>

                </StTeamList>
              </StLeft>
              <StRight>
              </StRight>
              <StEmpty/>
            </StDownBox>
          </StBox>
    );
};

const StEmpty = styled.div`
  width : 18.75%;
`;


const StTeamList = styled.div`
  margin : 13.5rem 0 0 0;
  background-color: blue;
`;

const StTeamName = styled.div`
  margin : 1rem 0 0 0;
  font-weight : 400;
  font-size : 1.25rem;
`;

const StTeamImg = styled.img`
  width : 10rem;
  height : 10rem;
  background-color: #8C8C8C;
  border-radius: 5rem;
  margin : 3.5rem 0 0 0;
`;

const StDownBox = styled.div`
  display: flex;
  height : 100%;
`;

const StRight = styled.div`
  width : 41.9%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;

const StLeft = styled.div`
  width : 20.95%;
  height : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EFEFEF;
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