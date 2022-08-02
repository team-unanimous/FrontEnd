import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import apis from "../../api/main";
import cancel from "../../img/cancel.png"
import axis from "../../api/sub";


const PasswordModal = ({ open, close }) => {

    // 비밀번호 정규식
    const passwordlock = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{3,16}$/;
    const pwlock = (pw) => {
        return passwordlock.test(pw)
    }

    // 패스워드 
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    // signuptwo에서 이메일 받아오는거 
    const userEmail = useSelector((state) => state.userReducer.usersid.email)
    // console.log(userEmail)



    // 비밀번호 비활성화 버튼 false일때 활성화
    const DisableFunction = () => {
        if (pwlock(password) === false)
            return true;
        else if (password != passwordCheck)
            return true;
        else
            return false;
    }


    // 비밀번호 쏘기
    const patchPw = async (data) => {
        return await axis.patchPasswordChange(data);
    }



    const { mutate } = useMutation(patchPw, {
        onSuccess: () => {
            close();
        },
        onError: (error) => {
            alert("비밀번호 변경에 실패했습니다")
        }
    })

    const passwordFunction = () => {
        const data = {
            password: password,
            passwordCheck: passwordCheck,
        }
        mutate(data)
    }

    return (
        <>
            {open ?
                <>
                    <StBack onClick={close} />
                    <Stwrap >
                        <StXbox onClick={close}>
                            <img src={cancel} style={{ width: '20px' }} />
                        </StXbox>
                        <StTitle>
                            비밀번호 변경
                        </StTitle>
                        <StBox>
                            <StSubTitle>
                                비밀번호
                            </StSubTitle>
                            <StInput type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호 입력" />
                            <StWarning>문자, 숫자, 특수문자 조합, 6~12자</StWarning>
                            <StSubTitle>
                                비밀번호 확인
                            </StSubTitle>
                            <StInput type='password'
                                onChange={(e) => setPasswordCheck(e.target.value)}
                                placeholder="비밀번호 재입력" />
                        </StBox>
                        <StBtn onClick={passwordFunction}
                            disabled={DisableFunction()}>
                            변경
                        </StBtn>
                    </Stwrap> </> : <></>}
        </>
    );
}

const StWarning = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #EF6A61;
margin-top: 11px;
margin-bottom: 25px;
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

const StChangeTitle = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: white;
`

const StBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 132px;
height: 54px;
background: #063250;
border: solid 1px #063250;
border-radius: 6px;
padding: 15px;
margin-top: 60px;
font-family: "test1";
font-weight: 700;
font-size: 20px;
line-height: 27px;
color:white;
cursor: pointer;
&:disabled{
    background-color: gray;
    border: solid 1px gray;
  }
`

const StInput = styled.input`
display: flex;
flex-direction: row;
align-items: center;
width: 540px;
height: 49px;
border: 1px solid #5C5C5C;
border-radius: 6px;
// placeholder 앞간격
padding-left: 10px;
`

const StSubTitle = styled.div`
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #000000;
margin-bottom: 12px;
`

const StTitle = styled.div`
font-weight: 600;
font-size: 36px;
line-height: 44px;
text-align: center;
color: #000000;
margin-bottom: 40px;
`

const StBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 540px;
height: 225px;
`

const Stwrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
width: 700px;
height: 592px;
background: #FFFFFF;
border-radius: 8px;
border: 1px solid #000000;
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

export default PasswordModal