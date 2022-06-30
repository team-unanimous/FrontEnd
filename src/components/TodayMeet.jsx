import React from 'react'
import styled from 'styled-components'

const TodayMeet = () => {
  return (
    <StBox>
        <StOpenButton> + 회의열기</StOpenButton>
    </StBox>
  )
}

const StOpenButton = styled.button`
    position: absolute;
    bottom : 0.5rem;
    right : 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 89px;
    height : 25px;
    border: 1px solid #000000;
    border-radius: 5px;
`;

const StBox = styled.div`
    position: relative;
    width : 272px;
    height : 198px;
    border-radius: 8px;
    background-color: #D9D9D9;;
`;

export default TodayMeet