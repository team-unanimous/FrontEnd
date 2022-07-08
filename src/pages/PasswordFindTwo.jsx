import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'


const PasswordFindTwo = () => {

  const navigate = useNavigate();



  // 패스워드 
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");


  // 패스워드 변경 전송 버튼
  const patchPw = (data) => {
    return apis.patchPasswordChange(data);
  }

  const { mutate } = useMutation(patchPw, {
    onSuccess: () => {
      alert("비밀번호 변경에 성공했습니다")
      navigate('/');
    },
    onError: (error) => {
      alert("비밀번호 변경에 실패했습니다")
      navigate('/passwordfindtwo');
    }
  })

  const passwordFunction = () => {
    const data = {
      password: password,
      passwordCheck: passwordCheck,
    }
    mutate(data)
  }

  // 취소 버튼
  const Caencelbtn = () => {
    navigate('/login')
  }

  // 비밀번호 정규식
  // 상우님 const passwordlock = /^(?=.[a-zA-Z])(?=.\\d)(?=.[!@#$%^+=-]).{6,12}$/;
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

  return (
    <StBox>
      <StContentBox>
        <StTitle>비밀번호 재설정</StTitle>
        <StInfo>
          <StEmailBox>
            <StEmailTitle>비밀번호</StEmailTitle>
            <StEmailInputBox>
              <StPwInput type='password' onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호 입력' />
            </StEmailInputBox>
            <StEmailWarnning>
              <StWarningTitle>영문자,숫자 및 특수문자 조합, 6~12자</StWarningTitle>
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
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 25px;
`;

const StNotAgree = styled.button`
  width : 200px;
  height : 54px;
  background-color: white;
  font-weight: 700;
  font-size: 20px;
  color : black;
  border-radius: 0.375rem;
  border: 1px solid #000000;
  cursor: pointer;
`;

const StAgree = styled.button`
  width : 200px;
  height : 54px;
  background-color: black;
  font-weight: 700;
  font-size: 20px;
  color : white;
  border-radius: 0.375rem;
  border: 1px solid #000000;
  cursor: pointer;
  &:disabled{
  background-color: gray;
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
`;

const StEmailWarnning = styled.div`
  height : 19px;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 23px;
`;

const StContentBox = styled.div`
  width : 541px;
  height : 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
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