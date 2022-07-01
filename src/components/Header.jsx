import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StWhole>
        <StLogo>
            Unanimous
        </StLogo>
        <StSelect name='team'>
            <option value="" defaultValue={""}>팀이름</option>
            <option value="boong">붕어빵</option>
            <option value="tako">타코야키</option>
            <option value="ddang">땅콩과자</option>
            <option value="other">그 외 간식</option>
        </StSelect>
        <StMyPage/>

    </StWhole>
  )
}

const StMyPage = styled.div`
    width : 3rem;
    height : 3rem;
    background-color: skyblue;
    margin : 0 2.5rem 0 0;
    border-radius: 10rem;
`;

const StWhole = styled.div`
    width : 100%;
    height : 5rem;
    display: flex;
    align-items: center;
    background-color: #D9D9D9;
`;

const StSelect = styled.select`
    width : 7.375rem;
    height : 2.5rem;
    margin : 0 1.25rem 0 auto;
    border-radius : 8px;
    padding : 8px 15px;
    gap : 10px;
`;

const StLogo = styled.div`
    width: 3.25rem;
    height: 1.25rem;
    margin : 0 0 0 3.75rem;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 20px;
`;

const StBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Header