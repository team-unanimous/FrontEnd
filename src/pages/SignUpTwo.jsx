import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import api from '../api/core'
import { useDispatch } from 'react-redux'
import { postUserid } from '../redux/modules/post'


const SignUpTwo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 이메일 정규식
  const reg_email = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/;

  const [email, setEmail] = useState("");
  // const [usernameid, setUsernameid] = useState(null);



  // 이메일 코드 전송

  const [warnning, setWarnning] = useState(false);

  const formCheck = () => {
    if (reg_email.test(email.current.value)) {
      setWarnning(false);
      alert("코드전송 완료")
      setCheckOne(true);
    }
    else {
      setWarnning(true);
    }
  }


  // 이메일 버튼시 포스트

  const emailPost = async (data) => {
    console.log(data)
    const datas = await apis.postEmailCheck(data);
    const userids = datas.data.userId
    console.log(userids)
    dispatch(postUserid({ userids }))
    return datas;
  }

  const { mutate } = useMutation(emailPost, {
    onSuccess: () => {
      navigate('/signupthree');
      alert("이메일 생성에 성공했습니다")
    },
    onError: (error) => {
      navigate('/signuptwo');
      alert("이메일 생성에 실패했습니다")
    },
    // onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
    //   return copy
  })

  const EmailFunction = () => {
    mutate({
      username: email,
    })
  }



  // // 버튼 비활성
  // useEffect(() => {
  //   if (checkOne == true && checkTwo == true) {
  //     setActive(true);
  //   }
  //   else {
  //     setActive(false);
  //   }
  //   console.log("checkone : " + checkOne);
  //   console.log("checktwo : " + checkTwo);
  // })


  return (
    <StBox>
      <StContentBox>
        <StTitle>이메일을 입력해주세요</StTitle>
        <StInfo>
          <StEmailBox>
            <StEmailTitle>이메일</StEmailTitle>
            <StEmailInputBox>
              <StEmailInput onChange={(e) => setEmail(e.target.value)} placeholder='이메일 입력' />
              <StEmailButton onClick={formCheck}>
                코드 전송
              </StEmailButton>
            </StEmailInputBox>
            {reg_email == true ? <p style={{ color: 'green' }}>사용 가능한 이메일 입니다</p> : <p> 이메일 형식에 맞게 입력해주세요</p>}
            {<p>이미 사용중인 이메일 입니다</p>}
          </StEmailBox>
          <StEmailBox>
            <StEmailTitle>회원가입 코드</StEmailTitle>
            <StEmailInputBox>
              <StEmailInput placeholder='코드입력' />
              <StEmailButton>
                확인
              </StEmailButton>
            </StEmailInputBox>
            <StEmailWarnning>
              확인되었습니다.
            </StEmailWarnning>
          </StEmailBox>
        </StInfo>
        <StBtBox>
          <StAgree onClick={EmailFunction}>
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

const StBtBox = styled.div`
  display: flex;
  justify-content: center;
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
  width : 132px;
  height : 49px;
  margin : 0 0 0 9px;
  background-color: black;
  color : white;
  border-radius: 6px;
`;

const StEmailInput = styled.input`
  width : 390px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #000000;
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
  
`;

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

export default SignUpTwo