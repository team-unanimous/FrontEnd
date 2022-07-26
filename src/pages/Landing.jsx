import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { target } from "../api/websocket";
import LandingHeader from "../components/LandingHeader";
import img_placeholder from "../img/img_placeholder.png"

const Landing = () => {
    const navigate = useNavigate();
    console.log(target)
    return (
        <>
            <LandingHeader></LandingHeader>
            {/* <StHeader style={{position: "sticky", top:"0"}}>
                <StLogo>
                    Unanimous
                </StLogo>
                <StStartButton>접속하기</StStartButton>
            </StHeader> */}
            <StJumbotronContainer>
                <StTitleContainer>
                    <StTitleText>
                        Unanimous.
                        Lorem <br />
                        Lorem ipsum
                    </StTitleText>
                    <StBodyText>
                        Lorem ipsum dolor sit amet, consectetur adipis Arcu, leo consectetur non sagittis, suspendisse
                    </StBodyText>
                    <StBodyButton onClick={() => navigate('/login')}>
                        접속하기
                    </StBodyButton>
                </StTitleContainer>
            </StJumbotronContainer>
            <StUSPContainer>
                <StUSPWrapper>
                    <StUSPHeader>
                        <StUSPHeaderTitle>
                            Suspendisse vitae <br />
                            pharetra netus
                        </StUSPHeaderTitle>
                        <StUSPHeaderText>
                            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
                        </StUSPHeaderText>
                    </StUSPHeader>
                    <StFeatureCardWrapper>
                        <StFeatureCardBox>
                            <StFeatureCardImgDiv>
                                <StFeatureCardImg>
                                    <img src={img_placeholder} />
                                </StFeatureCardImg>
                            </StFeatureCardImgDiv>
                            <StFeatureCardTextDiv>
                                <StFeatureCardTextBox>
                                    <StFeatureCardTextTitle>
                                        Aenean egestas libero amet vulputate.
                                    </StFeatureCardTextTitle>
                                    <StFeatureCardTextBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.
                                    </StFeatureCardTextBody>
                                </StFeatureCardTextBox>
                            </StFeatureCardTextDiv>
                        </StFeatureCardBox>
                        <StFeatureCardBox>
                            <StFeatureCardTextDiv style={{ justifyContent: "flex-start" }}>
                                <StFeatureCardTextBox>
                                    <StFeatureCardTextTitle>
                                        Aenean egestas libero amet vulputate.
                                    </StFeatureCardTextTitle>
                                    <StFeatureCardTextBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.
                                    </StFeatureCardTextBody>
                                </StFeatureCardTextBox>
                            </StFeatureCardTextDiv>
                            <StFeatureCardImgDiv>
                                <StFeatureCardImg>
                                    <img src={img_placeholder} />
                                </StFeatureCardImg>
                            </StFeatureCardImgDiv>
                        </StFeatureCardBox>
                        <StFeatureCardBox>
                            <StFeatureCardImgDiv>
                                <StFeatureCardImg>
                                    <img src={img_placeholder} />
                                </StFeatureCardImg>
                            </StFeatureCardImgDiv>
                            <StFeatureCardTextDiv>
                                <StFeatureCardTextBox>
                                    <StFeatureCardTextTitle>
                                        Aenean egestas libero amet vulputate.
                                    </StFeatureCardTextTitle>
                                    <StFeatureCardTextBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit.
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
                            Lorem Lorem ipsum
                        </StUSPHeaderTitle>
                        <StUSPHeaderText>
                            Lorem ipsum dolor sit amet, consectetur adipis Arcu, leo consectetur non sagittis, suspendisse
                        </StUSPHeaderText>
                    </StUSPHeader>
                </StTeamSectionTitleWrapper>
                <StTeamSectionImageWrapper>
                    <StTeamSectionImageUpper>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem>
                                <img src={img_placeholder} />
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    Lorem Lorem
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem>
                                <img src={img_placeholder} />
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    Lorem Lorem
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem>
                                <img src={img_placeholder} />
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    Lorem Lorem
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem>
                                <img src={img_placeholder} />
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    Lorem Lorem
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                    </StTeamSectionImageUpper>
                    <StTeamSectionImageLower>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem>
                                <img src={img_placeholder} />
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    Lorem Lorem
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem>
                                <img src={img_placeholder} />
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    Lorem Lorem
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                        <StTeamSectionImageItemBox>
                            <StTeamSectionImageItem>
                                <img src={img_placeholder} />
                            </StTeamSectionImageItem>
                            <StTeamSectionImageTextDiv>
                                <StTeamSectionImageTitle>
                                    Lorem Lorem
                                </StTeamSectionImageTitle>
                                <StTeamSectionImageBody>
                                    Developer
                                </StTeamSectionImageBody>
                            </StTeamSectionImageTextDiv>
                        </StTeamSectionImageItemBox>
                    </StTeamSectionImageLower>
                </StTeamSectionImageWrapper>
            </StTeamSectionContainer>
            <StBottomBrandingContainer>
                <StBottomBrandingWrapper>
                    <StBottomBrandingTitle>
                        Unanimous.<br />
                        Lorem Lorem ipsum
                    </StBottomBrandingTitle>
                    <StBottomBrandingBody>
                        Lorem ipsum dolor sit amet, consectetur adipis Arcu, leo consectetur non sagittis, suspendisse
                    </StBottomBrandingBody>
                    <StBodyButton style={{ marginTop: "0px" }} onClick={() => navigate('/login')}>
                        접속하기
                    </StBodyButton>
                </StBottomBrandingWrapper>
            </StBottomBrandingContainer>
            <StFooterContainer>
                <StFooterContentWrapper>
                    <StFooterContentLinks>

                    </StFooterContentLinks>
                </StFooterContentWrapper>
            </StFooterContainer>
        </>
    );
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
    width: 25rem;
    height: 23.688rem;
    margin-left: 20%;
`
const StTitleText = styled.div`
    width: 100%;
    height: 14.4rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 4rem;
    line-height: 4.8rem;
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
`

const StBodyButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 127px;
    height: 50px;

    background: #111827;
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
    height: 13.125rem;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StUSPHeaderTitle = styled.div`
    /* title */
    width: 100pxm;
    height: 134px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;

    text-align: center;

    color: #111827;

    flex: none;
    order: 0;
    align-self: stretch;
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

    color: #000000;

    flex: none;
    order: 2;
    flex-grow: 0;
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