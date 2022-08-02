import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import axis from '../api/sub'
import { useSelector } from "react-redux"
import frameimg from "../img/bgimg.svg"


const PasswordFindTwo = () => {

  const navigate = useNavigate();

  const userEmail = useSelector((state) => state.userReducer.usersid.email)

  // 패스워드 
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // 비밀번호 정규식
  const passwordlock = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{3,16}$/;
  const pwcheck = (pw) => {
    return passwordlock.test(pw)
  }

  // 비활성화 버튼
  const DisableFunction = () => {
    if (pwcheck(password) === false)
      return true;
    else if (password !== passwordCheck)
      return true;
    else return false;
  }


  // 패스워드 변경 전송 버튼
  const patchPw = (data) => {
    return axis.patchPasswordChan(data);
  }

  const { mutate } = useMutation(patchPw, {
    onSuccess: () => {
      alert("비밀번호 변경에 성공했습니다")
      navigate('/');
    },
    onError: (error) => {
      alert("이전과 동일한 비밀번호입니다")
      navigate('/passwordfindtwo');
    }
  })

  const passwordFunction = () => {
    const data = {
      username: userEmail,
      password: password,
      passwordCheck: passwordCheck,
    }
    mutate(data)
  }

  // 취소 버튼
  const Caencelbtn = () => {
    navigate('/login')
  }



  return (
    <StBox style={{ backgroundImage: `url(${frameimg})` }}>
      <StContentBox>
        <StTitle>비밀번호 재설정</StTitle>
        <StInfo>
          <StEmailBox>
            <StEmailTitle>비밀번호</StEmailTitle>
            <StEmailInputBox>
              <StPwInput type='password' onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호 입력' />
            </StEmailInputBox>
            <StEmailWarnning>
              <StWarningTitle>문자, 숫자, 특수문자 조합, 6~12자</StWarningTitle>
            </StEmailWarnning>
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>비밀번호 확인</StEmailTitle>
            <StEmailInputBox>
              <StPwInput type='password' onChange={(e) => setPasswordCheck(e.target.value)} placeholder='비밀번호 재입력' />
            </StEmailInputBox>
            <StEmailWarnning>
            </StEmailWarnning>
          </StEmailBox>
        </StInfo>
        <StBtBox>
          <StNotAgree onClick={Caencelbtn}>
            취소
          </StNotAgree>
          <StAgree
            onClick={passwordFunction}
            disabled={DisableFunction()}>
            다음
          </StAgree>
        </StBtBox>
      </StContentBox>
    </StBox>
  )
}


const StWarningTitle = styled.div`
  width : 400px;
  height : 19px;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 25px;
`;

const StNotAgree = styled.button`
font-family: "test1";
  width : 200px;
  height : 54px;
  background-color: white;
  font-weight: 700;
  font-size: 20px;
  color : #888888;
  border-radius: 0.375rem;
  border: 1px solid #888888;
  cursor: pointer;
`;

const StAgree = styled.button`
font-family: "test1";
  width : 200px;
  height : 54px;
  background-color: #063250;
  font-weight: 700;
  font-size: 20px;
  color : white;
  border-radius: 0.375rem;
  border: 1px solid #063250;
  cursor: pointer;
  &:disabled{
  background-color: #D7D7D7;
  border: solid 1px #D7D7D7;
}
`;

const StEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width : 541px;
  height: 150px;
  margin : 0 0 0 0;
`;

const StEmailTitle = styled.div`
  width : 200px;
  height : 19px;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 25px;
`;

const StEmailInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 541px;
  height : 49px;
`;


const StPwInput = styled.input`
  width : 541px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #000000;
  padding-left: 10px;
  margin-bottom: 20px;
  font-size: 16px;
::placeholder {
  font-size: 16px;
}

`;

const StEmailWarnning = styled.div`
  height : 19px;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 23px;
`;

const StContentBox = styled.div`
  width : 1155px;
  height : 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 32px;
`;

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 418px;
  height: 54px;
  margin : 3.75rem 0 0 0;
`;

const StTitle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 46px;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width : 541px;
  height : 210px;
  margin : 3.75rem 0 0 0;
`;

const StBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`;


export default PasswordFindTwo;