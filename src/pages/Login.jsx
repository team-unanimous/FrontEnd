import React from 'react'
import styled from 'styled-components';
import apis from '../api/main';
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { useMutation } from 'react-query';
import { getCookie, setCookie } from '../Cookie';
import frameimg from "../img/bgimg.svg"
import logoimg from "../img/logoLogin.svg"
import GoogleLogin from 'react-google-login';
import { useEffect } from 'react';


const Login = () => {


  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const login = async (data) => {
    const datas = await apis.postLogin(data);
    const accessToken = datas.headers.authorization;
    setCookie("token", accessToken);
    return datas;
  }

  const { mutate } = useMutation(login, {
    onSuccess: () => {
      navigate('/teamselect');
    },
    onError: (error) => {
      navigate('/login');
      alert("로그인 실패하셨습니다")
    }
  })

  const loginFunction = () => {
    mutate({
      username: email.current.value,
      password: password.current.value,
    })
    navigate(`/teamselect`)
  }

  const movesign = () => {
    navigate('/signupone');
  }

  const movepwfind = () => {
    navigate('/PasswordFindOne')
  }

  useEffect(()=>{
    if(getCookie("token")){
      navigate(`/teamselect`)
    }
  },[])


  //Google 

  const handleLogin=(res)=>{
    console.log(res);
  }

  const handleFailure=(res)=>{
    console.log(res);
  }



  let code = new URL(window.location.href).searchParams.get('code');
  console.log(code);


  return (
    <StSignUp style={{ backgroundImage: `url(${frameimg})` }}>
      <StBox>
        <img src={logoimg} />
        <StForm onSubmit={loginFunction}>
          <StEmail ref={email} placeholder='이메일' />
          <StPassword type='password' ref={password} placeholder='비밀번호' />
          <StLoginButton type='submit'>
            로그인
          </StLoginButton>
        </StForm>
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
        clientId="661918598129-ljnr447gjothokh2h4iktgc2j2792kkp.apps.googleusercontent.com"
        buttonText="Log in with Google" 
        onSuccess={handleLogin} 
        onFailure={handleFailure} 
        cookiePolicy={'single_host_origin'}
        ></GoogleLogin> */}
      </StBox>
    </StSignUp>
  )
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;
`;


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
  border: 1px solid #5C5C5C;
`;

const StEmail = styled.input`
  width : 365px;
  height : 19px;
  border-radius: 6px;
  padding : 15px;
  margin : 60px 0 0.75rem 0;
  border: 1px solid #5C5C5C;
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
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, #FFFFFF 100%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export default Login