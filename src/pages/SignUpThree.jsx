import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { postUserId } from '../redux/modules/post'
import axis from '../api/sub'
import frameimg from "../img/bgimg.svg"
import test1 from "../font.css"

const SignupThree = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.userReducer.usersid.email)



  // 비밀번호 정규식
  // 상우님 const passwordlock = /^(?=.[a-zA-Z])(?=.\\d)(?=.[!@#$%^+=-]).{6,12}$/;
  const passwordlock = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{3,16}$/;
  const pwcheck = (pw) => {
    return passwordlock.test(pw)
  }

  // 비밀번호 비활성화 버튼 false일때 활성화
  const DisableFunction = () => {
    if (pwcheck(password) === false)
      return true;
    else if (password != passwordCheck)
      return true;
    else
      return false;
  }


  // 패스워드 
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // 비밀번호 post
  const postPW = async (data) => {

    const datas = await axis.postPassword(data);
    const userids = datas.data.userId

    dispatch(postUserId({ userids }))
    return datas;
  }

  const { mutate } = useMutation(postPW, {
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
      username: userEmail,
      password: password,
      passwordCheck: passwordCheck,
    }
    mutate(data)
  }

  const Caencelbtn = () => {
    navigate('/login')
  }


  return (
    <StBox style={{ backgroundImage: `url(${frameimg})` }}>
      <StContentBox>
        <StTitle>비밀번호를 입력해주세요</StTitle>
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
          <StAgree onClick={passwordFunction}
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
/* font-family: 'Hallym Gothic' */
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
  border: 1px solid #5C5C5C;
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
  width : 1155px;
  height : 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, #FFFFFF 100%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
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


export default SignupThree;