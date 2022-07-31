import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../img/logo.svg";

const LandingHeader = () => {
    const navigate = useNavigate();

    return (
        <StHeader>
            <StLogo>
            </StLogo>
            <StStartButton visibility="visible" onClick={() => navigate('/login')}>접속하기</StStartButton>
        </StHeader>
    )
}

const StHeader = styled.div`
    width : 98%;
    height : 5rem;
    display : flex;
    align-items : center;
    position: sticky;
    top: 0;
    @media screen and (max-width: 600px) {
        position: static;
    }

`
const StLogo = styled.div`
    width: 32px;
    height: 32px;
    margin : 0 0 0 3.75rem;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 20px;
    background-image: url(${HeaderLogo});
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 600px) {
        margin-left: 2.4rem;
    }
`

const StStartButton = styled.div`
    transition: visibility 3s ease-in-out;
    /* Button */
    display: flex;
    visibility: ${props => props.visibility};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${'' /* padding: 10px 20px; */}
    width: 101px;
    height: 40px;
    /* Gray/900 */
    background: #063250;
    border-radius: 6px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0; 
    color: white;
    font-size : 14px;
    margin : 0 40px 0 auto;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export default LandingHeader;