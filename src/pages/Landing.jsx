import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { target } from "../api/websocket";
import LandingHeader from "../components/LandingHeader";
import img_placeholder from "../img/img_placeholder.png";
import BG_LandingPage from "../img/BG_LandingPage.svg";
import text_logo from "../img/text_logo.svg";
import BG_LandingFull from "../img/BG_LandingFull.png";
import mobile_BG from "../img/mobile_BG.png";
import mainCharacter from "../img/mainCharacter.svg";
import img1_main from "../img/img1_main.svg";
import function1 from "../img/function1.svg";
import function2 from "../img/function2.png";
import function3 from "../img/function3.svg";
import ProfileImg1 from "../img/ProfileImg1.svg";
import ProfileImg2 from "../img/ProfileImg2.svg";
import ProfileImg3 from "../img/ProfileImg3.svg";
import ProfileImg4 from "../img/ProfileImg4.svg";
import ProfileImg5 from "../img/ProfileImg5.svg";
import ProfileImg6 from "../img/ProfileImg6.svg";
import ProfileImg7 from "../img/ProfileImg7.svg";
import footer_logo from "../img/footer_logo.svg";



const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
        <StFull>
            <LandingHeader>
            </LandingHeader>
            <StJumbotronContainer>
                <StTitleContainer>
                    <StTextLogo>
                    </StTextLogo>
                    <StTitleText>
                        새로운 팀 회의를 
                        경험해보세요
                    </StTitleText>
                    <StBodyText>
                        안건을 등록하고 다양한 테마 속에서 팀 미팅을 열어보세요<br/>
                        채팅과 이모티콘으로 의사를 표현하고 <br/>
                        안건에 대한 회의록을 작성할 수 있습니다
                    </StBodyText>
                    <StBodyButton onClick={() => navigate('/login')}>
                        접속하기
                    </StBodyButton>
                </StTitleContainer>
                <StMainCharacter>
                </StMainCharacter>
            </StJumbotronContainer>
            <StUSPContainer>
                <StUSPWrapper>
                    <StUSPHeader>
                        <StUSPHeaderTitle>
                            Unanimous는 비대면 화상회의의
                            최적의 환경을 제공합니다
                        </StUSPHeaderTitle>
                        {/* <StUSPHeaderText>
                            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
                        </StUSPHeaderText> */}
                    </StUSPHeader>
                    <StFeatureCardWrapper>
                        <StFeatureCardBox>
                            <StFeatureCardImgDiv imgsrc={function1}>
                                <StFeatureCardImg>
                                    {/* <img src={function1} style={{backgroundColor:"red"}}/> */}
                                </StFeatureCardImg>
                            </StFeatureCardImgDiv>
                            <StFeatureCardTextDiv>
                                <StFeatureCardTextBox>
                                    <StFeatureCardTextTitle>
                                        실시간 의사결정
                                    </StFeatureCardTextTitle>
                                    <StFeatureCardTextBody>
                                        화상 및 음성 채팅을 통해 의견을 내고<br/>
                                         이모티콘으로 감정을 표현해보세요
                                    </StFeatureCardTextBody>
                                </StFeatureCardTextBox>
                            </StFeatureCardTextDiv>
                        </StFeatureCardBox>
                        <StFeatureCardBox>
                            <StFeatureCardTextDiv style={{ justifyContent: "flex-start" }}>
                                <StFeatureCardTextBox>
                                    <StFeatureCardTextTitle>
                                        쉽고 빠른 회의 결과 공유
                                    </StFeatureCardTextTitle>
                                    <StFeatureCardTextBody>
                                        미팅을 진행하는 동안 회의록을 작성하고<br/> 미팅관리 창에서 이전 회의 내용을 확인할 수 있습니다
                                    </StFeatureCardTextBody>
                                </StFeatureCardTextBox>
                            </StFeatureCardTextDiv>
                            <StFeatureCardImgDiv imgsrc={function2}>
                                <StFeatureCardImg>
                                </StFeatureCardImg>
                            </StFeatureCardImgDiv>
                        </StFeatureCardBox>
                        <StFeatureCardBox>
                            <StFeatureCardImgDiv imgsrc={function3}>
                                <StFeatureCardImg>
                                </StFeatureCardImg>
                            </StFeatureCardImgDiv>
                            <StFeatureCardTextDiv>
                                <StFeatureCardTextBox>
                                    <StFeatureCardTextTitle>
                                        뛰어난 User Experience
                                    </StFeatureCardTextTitle>
                                    <StFeatureCardTextBody>
                                        팀 게시판에서 요약된 회의 내용을 확인할 수 있으며<br/> 사이드바를 통해 환경 설정과 미팅 관리에 <br/>쉽게 접속할 수 있습니다
                                    </StFeatureCardTextBody>
                                </StFeatureCardTextBox>
                            </StFeatureCardTextDiv>
                        </StFeatureCardBox>
                    </StFeatureCardWrapper>
                </StUSPWrapper>
            </StUSPContainer>
            <StTeamSectionContainer>
                <StTeamSectionTitleWrapper>
                    <StUSPHeader>
                        <StUSPHeaderTitle>
                            Unanimous팀을 소개합니다
                        </StUSPHeaderTitle>
                        <StUSPHeaderText>
                            여섯명의 개발자와 한명의 디자이너로 구성되어있습니다
                        </StUSPHeaderText>
                    </StUSPHeader>
                </StTeamSectionTitleWrapper>
                <StTeamSectionImageWrapper>
                    <StTeamSectionImageUpper>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem imgsrc={ProfileImg1}>
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    강석우
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    FrontEnd Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem imgsrc={ProfileImg2}>
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    곽동관
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    BackEnd Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem imgsrc={ProfileImg3}>
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    김용우
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    FrontEnd Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem imgsrc={ProfileImg4}>
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    신상우
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    BackEnd Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                    </StTeamSectionImageUpper>
                    <StTeamSectionImageLower>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem imgsrc={ProfileImg5}>
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    양승훈
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    BackEnd Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem imgsrc={ProfileImg6}>
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    임대균
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    FrontEnd Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem imgsrc={ProfileImg7}>
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    조유진
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    UI/UX Designer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                    </StTeamSectionImageLower>
                </StTeamSectionImageWrapper>
            </StTeamSectionContainer>
            <StBottomBrandingContainer>
                <StBottomBrandingWrapper>
                    <StBottomBrandingTitle>
                        Unanimous<br />
                        지금 바로 접속해보세요
                    </StBottomBrandingTitle>
                    <StBottomBrandingBody>
                    </StBottomBrandingBody>
                    <StBodyButton marginTop={"0px"} btnColor={"#063250"} onClick={() => navigate('/login')}>
                        접속하기
                    </StBodyButton>
                </StBottomBrandingWrapper>
            </StBottomBrandingContainer>
            <StFooterContainer>
                <StFooterContentWrapper>
                    <StFooterContentLinks>
                        team-unanimous@naver.com <br/>
                        © 2022 unanimous. All Rights Reserved.
                    </StFooterContentLinks>
                </StFooterContentWrapper>
            </StFooterContainer>
        </StFull>
        </>
    );
}

const StFull = styled.div`
    width: 99.1vw;
    background-image: url(${BG_LandingFull});
    background-repeat: no-repeat;
    background-size: cover;
    /* display:flex;
    flex-direction: column;
    justify-content: center; */
    @media screen and (max-width: 600px) {
        background-image: url(${mobile_BG});
    }
`
const StJumbotronContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    width : 98%;
    height: 67.5rem;
    @media screen and (max-width: 600px) {
        height: 38rem;
        flex-direction: column;
        align-items: flex-start;
    }
`

const StTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 24rem;
    height: 27.688rem;
    gap: 10px;
    margin-left: 20%;
    @media screen and (max-width: 600px) {
        width: 20rem;
        height: 20rem;
        margin-left: 41px;
        margin-top: 43px;
    }
`
const StMainCharacter = styled.div`
    display: flex;
    width: 1065px;
    height: 1065px;
    background-image: url(${mainCharacter});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 10%;
    @media screen and (max-width: 600px) {
     width: 250px;
     height: 250px;
     margin-top: 10px;
     align-self: flex-end;
     background-size: contain;
    }
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
    @media screen and (max-width: 600px) {
    width: 195px;
    align-self: flex-start;
    background-size: contain;
    background-repeat: no-repeat;
    }

`
const StTitleText = styled.div`
    /* 새로운 팀 회의를 경험해보세요 */
    width: 100%;
    height: 9.75rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 3.075rem;
    line-height: 4.8rem;

    line-height: 144.02%;
    color: #00316F;

    flex: none;
    order: 1;
    flex-grow: 0;
    @media screen and (max-width: 600px) {
    width: 60%;
    height: 6rem;
    align-self: flex-start;
    font-size: 30px;
    }
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
    font-size: 14.3px;
    line-height: 200%;

    color: #5C5C5C;
    @media screen and (max-width: 600px) {
    width: 60%;
    align-self: flex-start;
    font-size: 13px;
    margin-top: 0;
    }
`

const StBodyButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 127px;
    height: 50px;

    background: ${props => props.btnColor ||'#2396F0'};
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

    width: 98%;
    height: 100rem;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin-top: 300px;
    @media screen and (max-width: 600px) {
        margin-top: 0px;
        height: 60rem;
    }
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
    @media screen and (max-width: 600px) {
        width: 98%;
        height: 856px;
        flex-wrap: nowrap;
    }
`
const StUSPHeader = styled.div`
    /* Frame 10 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 36.875rem;
    height: 6.125rem;

    flex: none;
    order: 0;
    flex-grow: 0;
    @media screen and (max-width: 600px) {
        width: 346px;
        margin-top: 43px;
    }
`
const StUSPHeaderTitle = styled.div`
    /* title */
    width: 100%;
    height: 3.625rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 39px;
    line-height: 140%;

    text-align: center;
    align-self: stretch;
    color: #1E2222;

    flex: none;
    order: 0;
    flex-grow: 0;
    @media screen and (max-width: 600px) {
        font-size: 19px;
        line-height: 150%;
        width:220px;
        height: 50%;
        align-self: center;
    }
`
const StUSPHeaderText = styled.div`
    /* text */
    width: 590px;
    height: 60px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
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
    @media screen and (max-width: 600px) {
        font-size: 10px;
        width: 100%;
        height: 50%;
    }
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
    /* margin-top: 100px; */
    @media screen and (max-width: 600px) {
        width:90%;
        margin-top: 43px;
    }
`
const StFeatureCardBox = styled.div`
    /* feature card */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 997px;
    height: 430px;

    flex: none;
    order: 0;
    flex-grow: 0;

    margin-top: 50px;
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 225px;
    }
`
const StFeatureCardImgDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-image: ${props => `url(${props.imgsrc})`};
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 600px) {
        width: 185px;
        height: 185px;
        background-size: contain;
    }
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
    justify-content: ${props => props.justifyContent || 'flex-end'};
    
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
    @media screen and (max-width: 600px) {
        width: 90%;
    }
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
    @media screen and (max-width: 600px) {
        font-size: 16px;
    }

`
const StFeatureCardTextBody = styled.div`
    /* text */
    width: 100%;
    height: 3rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.95rem;
    line-height: 150%;
    /* or 24px */
    text-align: center;
    margin-top:1rem;

    color: #6D7280;

    flex: none;
    order: 1;
    ${'' /* align-self: flex-end; */}
    flex-grow: 0;
    @media screen and (max-width: 600px) {
        font-size: 10px;
    }
`

const StTeamSectionContainer = styled.div`
    /* Frame 32 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 80px;

    width: 98%;
    height: 67.5rem;

    flex: none;
    order: 2;
    flex-grow: 0;
    margin-top: 465px;
    @media screen and (max-width: 600px) {
        margin-top: 0px;
        gap: 10px;
        height: 65rem;
    }
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
    @media screen and (max-width: 600px) {
        width: 80%;
        height: 500px;
    }
`
const StTeamSectionImageUpper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    height: 50%;
    @media screen and (max-width: 600px) {
        height: 50%;
        justify-content: space-evenly;
    }
`
const StTeamSectionImageLower = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 98%;
    height: 50%;
    @media screen and (max-width: 600px) {
        height:30%;
    }
`
const StTeamSectionImageItemBox = styled.div`
    /* Frame 10 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 12.2rem;
    height: 18rem;
    @media screen and (max-width: 600px) {
        width: 5rem;
        height: 12rem;
    }

`
const StTeamSectionImageItem = styled.div`
    width: 100%;
    height: 12.75rem;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-image: ${props=>`url(${props.imgsrc})`};
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 600px) {
        width: 80px;
        height: 80px;
    }
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
    @media screen and (max-width: 600px) {
        font-size: 15px;
    }
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
    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`
const StBottomBrandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 98%;
    height: 67.5rem;

    flex: none;
    order: 3;
    flex-grow: 0;
    @media screen and (max-width: 600px) {
        height: 40rem;
    }
`
const StBottomBrandingWrapper = styled.div`
    /* Frame 8 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 25px;

    width: 98%;
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
    font-size: 56px;
    line-height: 77px;
    text-align: center;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    @media screen and (max-width: 600px) {
        width: 90%;
        font-size: 40px;
    }
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

    flex: none;
    order: 4;
    flex-grow: 0;

    background: #FDEFDB;

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
    border-bottom: solid 2px #D2D5DA;
    width: 76rem;
    height: 7rem;

    flex: none;
    order: 0;
    flex-grow: 0;
    @media screen and (max-width: 600px) {
        width: 80%;
        height: 80px;
    }
`
const StFooterContentLinks = styled.div`
    /* links */
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 98%;
    height: 2.75rem;

    flex: none;
    order: 1;
    flex-grow: 0;
`

export default Landing;