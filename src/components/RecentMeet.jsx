import React from 'react'
import styled from 'styled-components'

const RecentMeet = () => {
  return (
    <StRecentBox>
        저녁에 뭐 먹을지 정하기
    </StRecentBox>
  )
}

const StRecentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 272px;
    height : 73px;
    border-radius: 0.5rem;
    border: 1px solid #949494;
    font-weight: 500;
    font-size: 16px;
`;

export default RecentMeet