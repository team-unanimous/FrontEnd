import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query'
import apis from '../api/main'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import axis from '../api/sub';
import frameimg from "../img/bgimg.svg"

const SignUpFour = () => {

  const navigate = useNavigate();

  const usersData = useSelector((state) => state.postReducer.users.userids)



  // 닉네임 
  const [nickname, setNickname] = useState("");
  // 경고메시지 
  const [warning, setWarning] = useState(false);
  // 닉네임중복확인 판별
  const [nickcheck, setNickcheck] = useState(false);

  // 닉네임비활성화 버튼 false일때 활성화
  const DisableFunction = () => {
    if (Boolean(nickname) === false)
      return true;
    else if (nickcheck === false)
      return true;
    else
      return false;
  }

  // 닉네임 중복 확인
  const NicknameCheck = (data) => {
    return axis.postNickCheck(data)
  }

  const { mutate: NickCk } = useMutation(NicknameCheck, {
    onSuccess: (response) => {
      setNickcheck(true)
      setWarning(false)
      alert("사용 가능한 닉네임입니다")
    },
    onError: (error) => {
      setWarning(error.response.data.message)
      alert(error.response.data.message)
    }
  })

  const nickCheckFunction = () => {
    NickCk({
      nickname: nickname,
    })
  }


  // 닉네임 저장
  const NickSave = (data) => {
    return axis.patchNickSave(data);
  }

  const { mutate: NickSv } = useMutation(NickSave, {
    onSuccess: () => {
      navigate('/login')
      alert("닉네임 생성에 성공하셨습니다")
    },
    onError: (error) => {
      navigate('/signupfour')
      alert("닉네임 생성에 실패하셨습니다")
    }
  })

  const nickSaveFunction = () => {
    NickSv({
      nickname: nickname,
      userid: usersData,
    })
  }

  const Caencelbtn = () => {
    navigate('/login')
  }


  return (
    <StBox style={{ backgroundImage: `url(${frameimg})` }}>
      <StContentBox>
        <StTitle>
          닉네임을 입력해주세요
        </StTitle>
        <StEmailBox>
          <StEmailTitle></StEmailTitle>
          <StEmailInputBox>
            <StEmailInput placeholder='닉네임 입력' onChange={(e) => setNickname(e.target.value)} />
            <StEmailButton onClick={nickCheckFunction}>
              중복 확인
            </StEmailButton>
          </StEmailInputBox>
          {<StEmailWarnning>{warning}</StEmailWarnning>}
        </StEmailBox>
        <StBtBox>
          <StNotAgree onClick={Caencelbtn}>
            취소
          </StNotAgree>
          <StAgree onClick={nickSaveFunction}
            disabled={DisableFunction()}>
            완료
          </StAgree>
        </StBtBox>
      </StContentBox>
    </StBox>
  )
}


const StNotAgree = styled.button`
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
  width : 200px;
  height : 54px;
  background-color: #063250;
  font-weight: 700;
  font-size: 20px;
  color : white;
  border-radius: 0.375rem;
  border: 1px solid #063250;
  &:disabled{
    background-color: #D7D7D7;
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
  font-size: 15px;
  color: #EF6A61;
`;

const StEmailButton = styled.button`
  width : 132px;
  height : 49px;
  margin : 0 0 0 9px;
  background-color: #063250;;
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
padding-left: 10px;
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

const StTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
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


export default SignUpFour