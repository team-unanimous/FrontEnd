import React from 'react'
import styled from 'styled-components';
import modalone from '../../img/tutorial/one.png'


const One = () => {
  return (
    <>
    {open?
    <>
        <StBack onClick={close}/>
        <StBox>
            <img src={modalone}/>
        </StBox>
    </>:<></>}
    </>
  )
}

const StBox = styled.div`
    position : fixed;
    display: flex;
    flex-direction: column;
    padding : 120px 80px 80px 80px;
    border-radius: 8px;
    background-color: white;
    z-index: 20;
`;

const StBack = styled.div`
    position : fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 100%;
    background-color: rgba(0,0,0,0.4);
    z-index : 10;
`;

export default One