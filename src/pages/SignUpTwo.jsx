import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import { useDispatch } from 'react-redux'
import { tossUserId } from '../redux/modules/user'
import axis from '../api/sub'
import frameimg from "../img/bgimg.svg"



const SignUpTwo = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [codein, setCodein] = useState(false);
  const [warningmsg, setWarningmsg] = useState(false);
  const [success, setSuccess] = useState(false);



  // 이메일 정규식
  //  상우님const reg_email = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/;
  const reg_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,8}$/i;
  const rockemail = (id) => {
    return reg_email.test(id)
  }

  // 페이지 이동 비활성화 함수
  const disableFunction = () => {
    if (rockemail(email) === false)
      return true;
    else if (codein === false)
      return true;
    else
      return false;
  }

  // 이메일 전송
  const emailPost = (data) => {
    return axis.postEmailCheck(data) // api > error
  }

  const { mutate: emailgo } = useMutation(emailPost, {
    onSuccess: (data) => {
      setCodein(true)
      setWarningmsg(false)
      setSuccess(true)
    },
    onError: (error) => {
      navigate('/signuptwo')
      setWarningmsg(error.response.data.message)
      alert(error.response.data.message)
      setSuccess(false)
    },
  })

  const EmailFunction = () => {
    emailgo({
      username: email,
    })
  }


  // 코드 전송
  const codePost = (data) => {
    return axis.postAuth(data);
  }

  const { mutate: codego } = useMutation(codePost, {
    onSuccess: () => {
      dispatch(tossUserId({ email }))
      navigate('/signupthree');
    },
    onError: (error) => {
      alert(error.response.data)
      navigate('/signuptwo');
    },
  })

  const CodeFunction = () => {
    codego
      ({
        code: code
      })
  }

  // 로그인으로 
  const Caencelbtn = () => {
    navigate('/login')
  }

  return (
    <StBox style={{ backgroundImage: `url(${frameimg})` }}>
      <StContentBox>
        <StTitle>이메일을 입력해주세요</StTitle>
        <StInfo>
          <StEmailBox>
            <StEmailTitle>이메일</StEmailTitle>
            <StEmailInputBox>
              <StEmailInput onChange={(e) => setEmail(e.target.value)} placeholder='이메일 입력' />
              <StEmailButton onClick={EmailFunction}>
                <StSendTitle>코드 전송</StSendTitle>
              </StEmailButton>
            </StEmailInputBox>
            {success === true ? <StSuccessTitle>
              입력하신 메일로 회원 코드를 전송하였습니다. 메일을 확인해주세요.
            </StSuccessTitle>
              : <StWarningTitle>{warningmsg}</StWarningTitle>}
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>회원가입 코드</StEmailTitle>
            <StEmailInputBox>
              <StlongEmailInput onChange={(e) => setCode(e.target.value)} placeholder='코드입력' />
            </StEmailInputBox>
            <StEmailWarnning>
            </StEmailWarnning>
          </StEmailBox>
        </StInfo>
        <StBtBox>
          <StNotAgree onClick={Caencelbtn}>
            취소
          </StNotAgree>
          <StAgree onClick={CodeFunction}
            disabled={disableFunction()}>
            다음
          </StAgree>
        </StBtBox>
      </StContentBox>
    </StBox>
  )
}

const StSuccessTitle = styled.div`
  width : 470px;
  height : 19px;
  font-weight: 400;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 24px;
  color: black;
`

const StSendTitle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70px;
height: 21px;
font-family: "test1";
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
text-align: center;
color: #FFFFFF;
`

const StlongEmailInput = styled.input`
  width : 540px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #5C5C5C;
  // placeholder 앞간격
  padding-left: 10px;
  font-size: 16px;
  ::placeholder {
  font-size: 16px;
}
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
  color: white;
  border: solid 1px #D7D7D7;
}
`;

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 418px;
  height: 54px;
  margin : 3.75rem 0 0 0;
`;

const StEmailWarnning = styled.div`
  height : 19px;
  font-weight: 500;
  font-size: 16px;
`;

const StEmailButton = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width : 132px;
  height : 49px;
  margin : 0 0 0 9px;
  background-color: #063250;
  color : white;
  border: solid 1px #063250;
  border-radius: 6px;
  cursor: pointer;
`;

const StEmailInput = styled.input`
  width : 390px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #5C5C5C;
  // placeholder 앞간격
  padding-left: 10px;
  font-size: 16px;
::placeholder {
  font-size: 16px;
}
`;

const StEmailInputBox = styled.div`
  display: flex;
  justify-content: column;
  align-items: center;
  width : 541px;
  height : 49px;
`;

const StEmailTitle = styled.div`
  width : 200px;
  height : 19px;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 12px;
`;

const StWarningTitle = styled.div`
font-weight: 400;
line-height: 21px;
font-size: 16px;
width : 400px;
height : 19px;
margin-top: 10px;
margin-bottom: 24px;
color: #EF6A61;
`

const StEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width : 541px;
  height: 150px;
  margin : 0 0 0 0;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width : 541px;
  height : 210px;
  margin : 3.75rem 0 0 0;
`;

const StTitle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 46px;
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

const StBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`;

export default SignUpTwo