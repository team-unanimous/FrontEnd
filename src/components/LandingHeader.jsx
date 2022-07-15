import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LandingHeader = () => {
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    
    return (
        <StHeader style={{position: "sticky", top:"0"}}>
            <StLogo>
                Unanimous
            </StLogo>
            {scrollPosition < 700 
            ? <><StStartButton visibility="hidden">접속하기</StStartButton></> 
            : <><StStartButton visibility="visible" onClick={()=>navigate('/login')}>접속하기</StStartButton></>}
        </StHeader>
    )
}

const StHeader = styled.div`
    width : 100%;
    height : 5rem;
    display : flex;
    align-items : center;
    background-color : #D9D9D9
`
const StLogo = styled.div`
    width: 3.25rem;
    height: 1.25rem;
    margin : 0 0 0 3.75rem;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 20px;
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
    width: 6.688rem;
    height: 2.5rem;
    /* Gray/900 */
    background: #111827;
    border-radius: 6px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0; 
    color: white;
    font-size : 18px;
    margin : 0 40px 0 auto;
    cursor: pointer;
`

export default LandingHeader;