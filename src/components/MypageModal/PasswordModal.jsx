import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import apis from "../../api/main";
import cancel from "../../img/cancel.png"


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
        else if (password !== passwordCheck)
            return true;
        else
            return false;
    }


    // 비밀번호 쏘기
    const patchPw = async (data) => {
        return await apis.patchPasswordChange(data);
    }



    const { mutate } = useMutation(patchPw, {
        onSuccess: () => {
            alert("비밀번호 변경에 성공했습니다")
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
                <Stwrap>
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
                        <p>영문자 및 숫자 조합, 8~12자</p>
                        <StSubTitle>
                            비밀번호 확인
                        </StSubTitle>
                        <StInput type='password'
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            placeholder="비밀번호 재입력" />
                    </StBox>
                    <StBtn onClick={passwordFunction}
                        disabled={DisableFunction()}>
                        <StChangeTitle >
                            변경
                        </StChangeTitle>
                    </StBtn>
                </Stwrap> : <></>}
        </>
    );
}

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
background: #000000;
border-radius: 6px;
padding: 15px;
margin-top: 60px;
cursor: pointer;
&:disabled{
    background-color: gray;
  }
`

const StInput = styled.input`
display: flex;
flex-direction: row;
align-items: center;
width: 540px;
height: 49px;
border: 1px solid #000000;
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
height: 214px;
`

const Stwrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 80px 80px;
position: absolute;
width: 700px;
height: 592px;
background: #FFFFFF;
border-radius: 8px;
border: 1px solid #000000;
`

export default PasswordModal