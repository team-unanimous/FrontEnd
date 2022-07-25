import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import axis from '../api/sub'
import { useDispatch } from 'react-redux'
import { tossUserId } from '../redux/modules/user'


const PasswordFindOne = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [codein, setCodein] = useState(false);
  const [warning, setWarning] = useState(false);

  // 이메일 정규식
  const reg_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,8}$/i;
  const rockemail = (id) => {
    return reg_email.test(id)
  }

  // 비활성화 함수
  const disableFunction = () => {
    if (rockemail(email) === false)
      return true;
    else if (codein === false)
      return true;
    else
      return false;
  }


  // 이메일 코드 전송 버튼
  const emailCodePost = (data) => {
    return axis.postEmailCode(data)
  }

  const { mutate: emailGo } = useMutation(emailCodePost, {
    onSuccess: (response) => {
      console.log(response)
      dispatch(tossUserId({ email }))
      alert("이메일 생성에 성공했습니다")
      setCodein(true)
    },
    onError: (error) => {
      console.log(error)
      setWarning(error.response.data)
      alert(error.response.data)
    }
  })

  const EmailFunction = () => {
    emailGo({
      username: email,
    })
  }



  // 코드 인증 버튼
  const passwordCode = (data) => {
    return axis.postAuth(data);
  }

  const { mutate: passwordGo } = useMutation(passwordCode, {
    onSuccess: () => {
      alert("코드 인증에 성공하셨습니다")
      navigate("/passwordfindtwo")
    },
    onError: (error) => {
      alert("코드 인증에 실패하셨습니다")
      navigate("/passwordfindone")
    }
  })

  const passwordFucntion = () => {
    passwordGo({
      code: code,
    })
  }

  // 취소 버튼
  const Caencelbtn = () => {
    navigate('/login')
  }



  return (
    <StBox>
      <StContentBox>
        <StTitle>비밀번호 찾기</StTitle>
        <StInfo>
          <StEmailBox>
            <StEmailTitle>이메일</StEmailTitle>
            <StEmailInputBox>
              <StEmailInput onChange={(e) => setEmail(e.target.value)} placeholder='이메일 입력' />
              <StEmailButton onClick={EmailFunction}>
                코드 전송
              </StEmailButton>
            </StEmailInputBox>
            {<StWarningTitle>{warning}</StWarningTitle>}
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>인증코드</StEmailTitle>
            <StEmailInputBox>
              <StEmailInputtwo onChange={(e) => setCode(e.target.value)} placeholder='코드입력' />
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
            onClick={passwordFucntion}
            disabled={disableFunction()}
          >
            다음
          </StAgree>
        </StBtBox>
      </StContentBox>
    </StBox>
  );
}



const StEmailInputtwo = styled.input`
  width : 540px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #000000;
  // placeholder 앞간격
  padding-left: 10px;
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

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 418px;
  height: 54px;
  margin : 2.3rem 0 0 0;
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
  cursor: pointer;
`;

const StEmailInput = styled.input`
  width : 390px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #000000;
  // placeholder 앞간격
  padding-left: 10px;
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
  font-size: 16px;
  margin-bottom: 12px;
`;

const StWarningTitle = styled.div`
  width : 400px;
  height : 19px;
  font-weight: 700;
  font-size: 16px;
  margin-top: 10px;
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
  height : 480px;
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

export default PasswordFindOne;