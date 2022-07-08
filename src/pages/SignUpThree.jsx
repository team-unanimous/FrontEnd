import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import { useSelector } from "react-redux"

const SignupThree = () => {

  const navigate = useNavigate();

  // const [usernameid, setUsernameid] = useState(null);

  const usersData = useSelector((state) => state.postReducer.users.userids)


  // 비밀번호 정규식
  const pw_check = /^(?=.[a-zA-Z])(?=.\\d)(?=.[!@#$%^+=-]).{6,12}$/;

  // 패스워드 
  // const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");
  const password = useRef("");
  const passwordCheck = useRef("");



  // const passwordPatch = async (data) => {
  //   console.log(data)
  //   const datas = await apis.patchPassword(data);
  //   console.log(datas)
  //   // setUsernameid(datas)
  //   // console.log(usernameid)
  //   return datas;
  // }

  const passwordPatch = (data) => {
    return apis.patchPassword(data);
  }

  const { mutate } = useMutation(passwordPatch, {
    onSuccess: () => {
      navigate('/signupfour');
      alert("비밀번호 생성에 성공했습니다")
    },
    onError: (error) => {
      navigate('/signupthree');
      alert("비밀번호 생성에 실패했습니다")
    }
  })

  const passwordFunction = () => {
    const data = {
      password: password.current.value,
      passwordCheck: passwordCheck.current.value,
      userid: usersData
    }
    mutate(data)
  }

  return (
    <StBox>
      <StContentBox>
        <StTitle>비밀번호를 입력해주세요</StTitle>
        <StInfo>
          <StEmailBox>
            <StEmailTitle>비밀번호</StEmailTitle>
            <StEmailInputBox>
              {/* <StPwInput type='password' onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호 입력' /> */}
              <StPwInput type='password' ref={password} placeholder='비밀번호 입력' />
            </StEmailInputBox>
            <StEmailWarnning>
              영문자,숫자 및 특수문자 조합, 6~12자
            </StEmailWarnning>
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>비밀번호 확인</StEmailTitle>
            <StEmailInputBox>
              {/* <StPwInput type='password' onChange={(e) => setPasswordCheck(e.target.value)} placeholder='비밀번호 재입력' /> */}
              <StPwInput type='password' ref={passwordCheck} placeholder='비밀번호 재입력' />
            </StEmailInputBox>
            <StEmailWarnning>
              영문자,숫자 및 특수문자 조합, 6~12자
              {/* {password === passwordCheck && password.length != 0 ? <p style={{ color: 'green' }}>형식에 맞는 비밀번호 입니다.</p> : <p style={{ color: 'red' }}> 비밀번호가 일치하지 않거나 공백입니다.</p>} */}
            </StEmailWarnning>
          </StEmailBox>
        </StInfo>
        <StBtBox>
          <StAgree onClick={passwordFunction}>
            다음
          </StAgree>
        </StBtBox>
      </StContentBox>
    </StBox>
  )
}

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
  font-size: 15px;
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
`;

const StEmailWarnning = styled.div`
  height : 19px;
  font-weight: 500;
  font-size: 16px;
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
  justify-content: center;
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


export default SignupThree;