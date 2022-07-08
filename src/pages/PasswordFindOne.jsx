import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import apis from '../api/main'
import api from '../api/core'
import { useDispatch } from 'react-redux'
import { postUserId, tossUserId } from '../redux/modules/post'


const PasswordFindOne = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 이메일 정규식
    // 해석 
    // const reg_email = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/;
    const reg_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,8}$/i;
    const [email, setEmail] = useState("");
    // const [usernameid, setUsernameid] = useState(null);



    // 이메일 코드 전송

    const [warnning, setWarnning] = useState(false);

    const formCheck = () => {
        if (reg_email.test(email)) {
            setWarnning(false);
            alert("코드전송 완료")
            setCheckOne(true);
        }
        else {
            setWarnning(false);
        }
    }

    const EmailFunction = () => {
        if (reg_email.test(email)) {
            dispatch(tossUserId({ email }))
            alert("이메일 생성에 성공했습니다")
            navigate('/passwordfindtwo');
        }
        else {
            navigate('/passwordfindone');
            alert("이메일 생성에 실패했습니다")
        }
    }

    // 이메일 코드전송
    const passwordPatch = (data) => {
        return apis.postPassword(data);
    }

    const { mutate } = useMutation(passwordPatch, {
        onSuccess: () => {
            alert("인증메시지가 전송에 성공하셨습니다")
            navigate('/passwordfindtwo');

        },
        onError: (error) => {
            alert("인증메시지가 전송에 실패하셨습니다")
            navigate('/passwordfindone');

        }
    })

    const passwordFunction = () => {
        const data = {
            username: userId,
            password: password,
            passwordCheck: passwordCheck,
            userid: usersData
        }
            (data)
    }


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
                            <StEmailButton onClick={formCheck} >
                                코드 전송
                            </StEmailButton>
                        </StEmailInputBox>
                        {reg_email.test(email) === false
                            ? <StWarningTitle style={{ color: 'red' }}> 이메일 형식에 맞게 입력해주세요</StWarningTitle>
                            : warnning === true
                                ? <StWarningTitle style={{ color: 'red' }}> 이미 사용중인 이메일 입니다</StWarningTitle>
                                : <p></p>
                        }
                    </StEmailBox>
                    <StEmailBox>
                        <StEmailTitle>인증코드</StEmailTitle>
                        <StEmailInputBox>
                            <StEmailInputtwo placeholder='코드입력' />
                        </StEmailInputBox>
                        <StEmailWarnning>
                        </StEmailWarnning>
                    </StEmailBox>
                </StInfo>
                <StBtBox>
                    <StNotAgree onClick={Caencelbtn}>
                        취소
                    </StNotAgree>
                    <StAgree onClick={EmailFunction}>
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