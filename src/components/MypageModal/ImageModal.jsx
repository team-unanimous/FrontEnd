import React from "react";
import styled from "styled-components";
import cancel from "../../img/cancel.png"

const ImageModal = ({ open, close, select, save }) => {
    return (
        <>
            {open ?
                <>
                    <StBack onClick={close} />
                    <Stwrap >
                        <StXbox onClick={close}>
                            <img src={cancel} style={{ width: '20px' }} />
                        </StXbox>
                        <StBox>
                            <StImageTitle>
                                이미지 변경
                            </StImageTitle>
                            <Stbtns>
                                <StUploadBox htmlFor="ex_file">
                                    <StUploadTitle>
                                        이미지 선택
                                    </StUploadTitle>
                                </StUploadBox>
                                <StInput id="ex_file"
                                    type="file"
                                    accept='img/*'
                                    onChange={select} />
                                <StWhiteBox>
                                    <StBlackTitle onClick={save}>
                                        이미지 저장
                                    </StBlackTitle>
                                </StWhiteBox>
                            </Stbtns>
                        </StBox>
                    </Stwrap> </> : <></>
            }
        </>
    );
}


// right: 30, bottom: 30, height: 30, width:30

const StInput = styled.input`
    display:none;
`

const StXbox = styled.div`
position: absolute;
top: 20px;
right: 20px;
width: 20px;
height: 20px;
color: black;
cursor: pointer;
`

const Stbtns = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 370px;
height: 54px;
`

const StBlackTitle = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: black;
`

const StUploadTitle = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: white;
cursor: pointer;
`

const StWhiteBox = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 177px;
height: 54px;
background: white;
border-radius: 6px;
margin-top: 40px;
`

const StUploadBox = styled.label`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 177px;
height: 54px;
background: black;
border-radius: 6px;
margin-top: 40px;
border: 1px solid #063250;
background-color: #063250;
`

const StImageTitle = styled.div`
font-weight: 700;
font-size: 36px;
line-height: 44px;
color: #000000;
margin-bottom: 30px;
cursor: pointer;
`

const StBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 402px;
height: 138px;
`

const Stwrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
width: 594px;
height: 318px;
background: #FFFFFF;
border-radius: 8px;
`

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
`;

export default ImageModal