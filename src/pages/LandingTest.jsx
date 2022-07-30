import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { target } from "../api/websocket";
import LandingHeader from "../components/LandingHeader";
import img_placeholder from "../img/img_placeholder.png";
import BG_LandingPage from "../img/BG_LandingPage.svg";
import text_logo from "../img/text_logo.svg";
import BG_LandingPage_1 from "../img/BG_LandingPage_1.svg";
import BG_LandingPage_2 from "../img/BG_LandingPage_2.svg";
import BG_LandingPage_3 from "../img/BG_LandingPage_3.svg";
import BG_LandingPage_4 from "../img/BG_LandingPage_4.svg";

const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
        <StFull>
        </StFull>
        {/* <StBg2>
        </StBg2>
        <StBg3>
        </StBg3>
        <StBg4>
        </StBg4> */}
        </>
    );
}

const StFull = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BG_LandingPage_1});
    background-repeat: no-repeat;
    background-size: contain;
`
const StBg2 = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BG_LandingPage_2});
    background-repeat: no-repeat;
    background-size: contain;
`
const StBg3 = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BG_LandingPage_3});
    background-repeat: no-repeat;
    background-size: contain;
`
const StBg4 = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BG_LandingPage_4});
    background-repeat: no-repeat;
    background-size: contain;
`

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
    /* Button */
    display: flex;
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
`
const StJumbotronContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    width : 100%;
    height: 67.5rem;
`
const StTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 24rem;
    height: 27.688rem;
    margin-left: 20%;
    /* background-color: red; */
    gap: 40px;
`
const StTextLogo = styled.div`
    display: flex;
    /* LP/main/logo */
    width: 23.438rem; //375px;
    height: 3.313rem; //53px;

    flex: none;
    order: 0;
    flex-grow: 0;
    background-image: url(${text_logo});
`
const StTitleText = styled.div`
    /* 새로운 팀 회의를 경험해보세요 */
    width: 100%;
    height: 9.75rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 3.375rem;
    line-height: 4.8rem;

    line-height: 144.02%;
    color: #00316F;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StBodyText = styled.div`
    width: 20rem;
    height: 3rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #000000;

    order: 1;
    margin-top: 1.5rem;
    /* 안건을 등록하고 다양한 테마 속에서 팀 미팅을 열어보세요 채팅과 이모티콘으로 의사를 표현하고 안건에 대한 회의록을 작성할 수 있습니다 */


    width: 383px;
    height: 96px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 200%;
    /* or 32px */


    /* Grey/body */

    color: #5C5C5C;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

const StBodyButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 127px;
    height: 50px;

    background: #2396F0;
;
    border-radius: 6px;

    flex: none;
    order: 2;
    flex-grow: 0;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;

    color: #FFFFFF;

    margin-top: ${props => props.marginTop || '1.5rem'};
    cursor: pointer;
`

const StUSPContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100rem;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StUSPWrapper = styled.div`
    flex-wrap: wrap;
    /* Frame 15 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 76rem;
    height: 90rem;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StUSPHeader = styled.div`
    /* Frame 10 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 36.875rem;
    height: 6.125rem;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StUSPHeaderTitle = styled.div`
    /* title */
    width: 100%;
    height: 3.625rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;

    text-align: center;
    align-self: stretch;
    color: #1E2222;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StUSPHeaderText = styled.div`
    /* text */
    width: 590px;
    height: 60px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    /* or 30px */

    text-align: center;
    letter-spacing: 0.2px;

    /* Gray/500 */
    color: #6D7280;
    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`
const StFeatureCardWrapper = styled.div`
    /* feature cards */
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 62.3rem;
    height: 72.1rem;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StFeatureCardBox = styled.div`
    /* feature card */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    ${'' /* gap: 125px; */}

    width: 997px;
    height: 331.23px;

    flex: none;
    order: 0;
    flex-grow: 0;

    margin-top: 80px;
`
const StFeatureCardImgDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: solid black 2px;
    border-radius: 4px;
`
const StFeatureCardImg = styled.div`
    width: 10%;
    height: 10%;
`
const StFeatureCardTextDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.justifyContent || 'flex-end'}
    
    ${'' /* border: solid black 2px; */}
    ${'' /* border-radius: 4px; */}
`

const StFeatureCardTextBox = styled.div`
    /* title + text */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* padding: 0px; */}
    ${'' /* gap: 16px; */}

    width: 24rem;
    height: 8.5rem;

    flex: none;
    order: 1;
    ${'' /* align-self: stretch; */}
    flex-grow: 0;
`
const StFeatureCardTextTitle = styled.div`
    /* text */
    width: 100%;
    height: 50%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #111827;

    flex: none;
    order: 0;
    flex-grow: 0;

`
const StFeatureCardTextBody = styled.div`
    /* text */
    width: 100%;
    height: 3rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    /* or 24px */
    text-align: center;
    margin-top:1rem;

    color: #6D7280;

    flex: none;
    order: 1;
    ${'' /* align-self: flex-end; */}
    flex-grow: 0;
`

const StTeamSectionContainer = styled.div`
    /* Frame 32 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 80px;

    width: 100%;
    height: 67.5rem;

    flex: none;
    order: 2;
    flex-grow: 0;
`

const StTeamSectionTitleWrapper = styled.div`
    /* Frame 13 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;

    width: 28.5rem;
    height: 7.625rem;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StTeamSectionImageWrapper = styled.div`
    /* Frame 31 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 60px;
    margin-top: 80px;

    width: 1005px;
    height: 638px;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StTeamSectionImageUpper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50%;
`
const StTeamSectionImageLower = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color:white;
    width: 100%;
    height: 50%;
`
const StTeamSectionImageItemBox = styled.div`
    /* Frame 10 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 12.2rem;
    height: 18rem;
`
const StTeamSectionImageItem = styled.div`
    width: 100%;
    height: 12.75rem;
    border: solid black 2px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    display: flex;
`
const StTeamSectionImageTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
`
const StTeamSectionImageTitle = styled.div`
    /* Lorem Lorem */
    width: 9.5rem;
    height: 1.8rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    text-align: center;
    color: #000000;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StTeamSectionImageBody = styled.div`
    /* Developer */
    width: 6.125rem;
    height: 1.5rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-top: 1rem;

    flex: none;
    order: 2;
    flex-grow: 0;
    /* Developer */

    color: #5C5C5C;
`
const StBottomBrandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 100%;
    height: 67.5rem;

    flex: none;
    order: 3;
    flex-grow: 0;
`
const StBottomBrandingWrapper = styled.div`
    /* Frame 8 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 25px;

    width: 38rem;
    height: 18.875rem;

    flex: none;
    order: 0;
    flex-grow: 0;
`

const StBottomBrandingTitle = styled.div`
    /* Unanimity. Lorem Lorem ipsum */
    width: 38rem;
    height: 9.625rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    text-align: center;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StBottomBrandingBody = styled.div`
    /* Lorem ipsum dolor sit amet, consectetur adipis Arcu, leo consectetur non sagittis, suspendisse */
    width: 22.7rem;
    height: 3rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    ${'' /* margin-top: 1.5rem; */}

    text-align: center;
    color: #000000;

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StFooterContainer = styled.div`
    /* footer */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 16.8rem;

    background: #EFEFEF;

    flex: none;
    order: 4;
    flex-grow: 0;
`

const StFooterContentWrapper = styled.div`
    /* content */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: solid 2px #D2D5DA;
    width: 76rem;
    height: 7rem;

    flex: none;
    order: 0;
    flex-grow: 0;  
`
const StFooterContentLinks = styled.div`
    background: red;
    /* links */
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 2.75rem;

    flex: none;
    order: 1;
    flex-grow: 0;
`

export default Landing;