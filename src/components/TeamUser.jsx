import React from 'react'
import styled from 'styled-components'

const TeamUser = () => {
  return (
    <StUser>
      <StUserImg/>
      <StUserInfo>
        조유진<br/>
        pppinsuni@gmail.com
      </StUserInfo>
    </StUser>
  )
}

const StUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width : 150px;
  height : 30px;
  font-weight: 400;
  font-size: 12px;
  margin : 0 0 0 1rem;
`;

const StUserImg = styled.img`
  width : 36px;
  height : 36px;
  border-radius: 36px;
  background-color:#E5E7EB;
`;

const StUser = styled.div`
  display: flex;
  width : 214px;
  height : 36px;
  margin : 0.75rem 0 0.75rem 0;
`;

export default TeamUser