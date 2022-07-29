import React, { useEffect } from 'react'
import styled from 'styled-components';
import apis from '../api/main';
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { useMutation } from 'react-query';
import { setCookie, removeCookie } from '../Cookie';
import GoogleLogin from 'react-google-login';
import frameimg from "../img/bgimg.svg"
import logoimg from "../img/logoLogin.svg"
import googlebtn from "../img/btn_sociallogin_google.svg"


const Login = () => {

  const navigate = useNavigate();


  const email = useRef(null);
  const password = useRef(null);

  const login = async (data) => {
    console.log(data)
    const datas = await apis.postLogin(data);
    const accessToken = datas.headers.authorization;
    setCookie("token", accessToken);
    return datas;
  }

  const { mutate } = useMutation(login, {
    onSuccess: () => {
      navigate('/teamselect');
      alert("로그인 완료")
    },
    onError: (error) => {
      navigate('/login');
      alert("로그인 실패하셨습니다")
    }
  })

  const loginFunction = () => {
    console.log(email.current.value);
    mutate({
      username: email.current.value,
      password: password.current.value,
    })
  }

  const movesign = () => {
    navigate('/signupone');
  }

  const movepwfind = () => {
    navigate('/PasswordFindOne')
  }

  //로그인 성공했을 떄 처리 함수 

  const responseGoogle = (response) => {
    setCookie("user_id", response.googleId);
  }


  return (
    <StSignUp style={{ backgroundImage: `url(${frameimg})` }}>
      <StBox>
        <img src={logoimg} />
        <StEmail ref={email} placeholder='이메일' />
        <StPassword type='password' ref={password} placeholder='비밀번호' />
        <StLoginButton onClick={loginFunction}>
          로그인
        </StLoginButton>
        <StButtonBox>
          <StSignUpButton onClick={movesign}>
            회원가입
          </StSignUpButton>
          <StLine />
          <StPwFind onClick={movepwfind}>
            비밀번호 찾기
          </StPwFind>
        </StButtonBox>
        {/* <GoogleLogin
          clientId='661918598129-vovfo203fkp7oq8avn3ak7sj24f9bu9k.apps.googleusercontent.com'
          buttonText="Google Login"
          response_type="token"
          redirectUri='http://localhost:3000'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
        <Stgooglebtn src={googlebtn} />
      </StBox>
    </StSignUp>
  )
}

const Stgooglebtn = styled.img`
   width: 100;
   height: 100;
   cursor: pointer;
`



const StSignUp = styled.div`
  height : 100vh;
  width : 100vw;
  display: flex;
  align-items: center;
`;

const StLine = styled.div`
  width : 1px;
  height : 17px;
  background-color: black;
`;

const StPwFind = styled.button`
  display: flex;
  justify-content: center;
  width: 49.5%;
  margin : 0 0 0 0;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

const StSignUpButton = styled.button`
  display: flex;
  justify-content: center;
  font-weight: 500;
  width: 49.5%;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

const StButtonBox = styled.div`
  display: flex;
  width : 400px;
  height : 17px;
  margin : 2.1875rem 0 4.0625rem 0;
`;

const StLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 400px;
  height : 49px;
  background-color: #2396F0;
  color : white;
  border: solid 1px #2396F0;
  border-radius: 6px ;
  cursor: pointer;
`;

const StPassword = styled.input`
  width : 365px;
  height : 19px;
  padding : 15px;
  margin : 0 0 4.1875rem 0;
  border-radius: 6px;
`;

const StEmail = styled.input`
  width : 365px;
  height : 19px;
  border-radius: 6px;
  padding : 15px;
  margin : 60px 0 0.75rem 0;
`;

const StLogo = styled.div`
  width : 137px;
  height : 58px;
  font-weight: 600;
  font-size: 48px;
`;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width : 1155px;
  height : 740px;
  margin : auto auto auto auto;
  background-color: white;
  border-radius: 32px;
`;

export default Login