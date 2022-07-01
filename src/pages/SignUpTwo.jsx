import React, { useState } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import { useMutation,useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import api from '../api/core'


const SignUpTwo = () => {
  const navigate = useNavigate();

  const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  const email = useRef(null);
  const [password,setPassword] = useState(null);
  const passwordCheck = useRef(null);

  const [active,setActive] = useState(false);

  const [checkOne,setCheckOne] = useState(false);
  const [checkTwo,setCheckTwo] = useState(false);


  

  // 이메일 코드 전송

  const [warnning,setWarnning] = useState(false);

  const formCheck = () =>{
    if(reg_email.test(email.current.value)){
      setWarnning(false);
      alert("코드전송 완료")
      setCheckOne(true);
    }
    else{
      setWarnning(true);
    }
  }


  //비밀번호 받기

  const passwording = (event) =>{
    
  }

  

  // 회원가입 버튼시 포스트

  const signUp = async (data) => {
    const datas = await apis.postSignUp(data);
    return datas;
  }

  const { mutate } = useMutation(signUp,{
    onSuccess : () => {
        navigate('/login'); 
        alert("가입 완료")
    },
    onError : (error) => {
        alert("가입 불가")
    }
  })

  const signUpFunction = () =>{
    mutate({
      username : email.current.value,
      password : password.current.value,
      passwordCheck : passwordCheck.current.value
    })
  }

  return (
    <StBox>
      <StContentBox>
        <StTitle>개인정보를 입력해주세요</StTitle>
        <StInfo>
          <StEmailBox>
            <StEmailTitle>이메일</StEmailTitle>
            <StEmailInputBox>
              <StEmailInput ref={email} placeholder='이메일 입력'/>
              <StEmailButton onClick={formCheck}>
                코드 전송
              </StEmailButton>
            </StEmailInputBox>
            {warnning?<StEmailWarnning>
              이메일 형식에 맞게 입력해주세요
            </StEmailWarnning>:<StNotWarnning></StNotWarnning>}
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>회원가입 코드</StEmailTitle>
            <StEmailInputBox>
              <StEmailInput placeholder='코드입력'/>
              <StEmailButton>
                확인
              </StEmailButton>
            </StEmailInputBox>
            <StEmailWarnning>
                확인되었습니다.
            </StEmailWarnning>
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>비밀번호</StEmailTitle>
            <StEmailInputBox>
              <StPwInput onChange={passwording} placeholder='비밀번호 입력'/>
            </StEmailInputBox>
            <StEmailWarnning>
              영문자 및 숫자 조합, 8~12자
            </StEmailWarnning>
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>비밀번호 확인</StEmailTitle>
            <StEmailInputBox>
              <StPwInput ref={passwordCheck} placeholder='비밀번호 재입력'/>
            </StEmailInputBox>
            <StEmailWarnning>
              영문자 및 숫자 조합, 8~12자
            </StEmailWarnning>
          </StEmailBox>
        </StInfo>
        <StBtBox>
          <StCancel>
            취소
          </StCancel>
          <StAgree onClick={signUpFunction}>
            동의
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

const StCancel = styled.button`
  width : 200px;
  height : 54px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0.375rem;
  cursor: pointer;
`;

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 418px;
  height: 54px;
  margin : 3.75rem 0 0 0;
`;

const StNotWarnning = styled.div`
  height : 19px;
`;

const StEmailWarnning = styled.div`
  height : 19px;
  font-weight: 500;
  font-size: 16px;
`;

const StEmailButton = styled.button`
  width : 132px;
  height : 49px;
  margin : 0 0 0 9px;
  background-color: black;
  color : white;
  border-radius: 6px;
`;

const StPwInput = styled.input`
  width : 541px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #000000;
  
`;

const StEmailInput = styled.input`
  width : 390px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #000000;
`;

const StEmailInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 541px;
  height : 49px;
`;

const StEmailTitle = styled.div`
  width : 200px;
  height : 19px;
  font-weight: 700;
  font-size: 15px;
  
`;

const StEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 541px;
  height: 100px;
  margin : 0 0 0 0;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 541px;
  height : 519px;
  margin : 3.75rem 0 0 0;
`;

const StTitle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 46px;
`;

const StContentBox = styled.div`
  width : 541px;
  height : 751px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`;

export default SignUpTwo