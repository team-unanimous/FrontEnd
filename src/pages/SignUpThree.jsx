import React, { useRef } from 'react'
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query'
import apis from '../api/main'
import { useNavigate } from 'react-router-dom';


const SignUpThree = () => {
  const navigate = useNavigate();

  const nickname = useRef("");

  // 닉네임,프로필 저장
  const NickNameCreate = async (data) => {
    const datas = await apis.postNickNameCreate(data);
    return datas;
  }

  // 닉네임 중복 확인
  const NickCheck = async (data) => {
    const datas = await apis.postNickCheck(data);
    return datas;
  }

  const { mutate } = useMutation(NickNameCreate, {
    onSuccess: () => {
      navigate('/');
      alert("닉네임이 생성되었습니다")
    },
    onError: (error) => {
      alert("닉네임이 생성에 실패하셨습니다")
    }
  })

  const nickNameFunction = () => {
    mutate({
      nickname: nickname.current.value,
    })
  }

  const movelogin = () => {
    navigate('/login');
  }

  return (
    <StBox>
      <StContentBox>
        <StTitle>
          상세정보를 추가해주세요
        </StTitle>
        <StProBox>
          <StImgBox>
            <StProfile>
              프로필 이미지
            </StProfile>
            <StProImg />
            <StProInput type="file" />
          </StImgBox>
        </StProBox>
        <StEmailBox>
          <StEmailTitle>닉네임</StEmailTitle>
          <StEmailInputBox>
            <StEmailInput placeholder='닉네임 입력' ref={nickname} />
            <StEmailButton>
              중복 확인
            </StEmailButton>
          </StEmailInputBox>
          <StEmailWarnning>
            이미 있는 닉네임 입니다. 새로운 닉네임으로 다시 입력해주세요.
          </StEmailWarnning>
        </StEmailBox>
        <StBtBox>
          <StCancel onClick={movelogin}>
            취소
          </StCancel>
          <StAgree onClick={nickNameFunction}>
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
`;

const StCancel = styled.button`
  width : 200px;
  height : 54px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0.375rem;
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

const StProInput = styled.input`
  width : 115px;
  height : 25px;
  margin : 1rem 0 0 0;
  border-radius: 5px;
  border: 1px solid #000000;
`;

const StProImg = styled.div`
  width : 117px;
  height : 117px;
  border-radius: 100px;
  background-color: #E5E7EB;
`;

const StProfile = styled.div`
  width: 93px;
  height: 19px;
  font-weight: 700;
  font-size: 14px;
`;

const StProBox = styled.div`
  width : 100%;
  height : 185px;
  margin : 3.75rem 0 2.1875rem 0;
`;

const StImgBox = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width : 117px;
  height : 185px;
  margin : 0 0 0 0;
`;

const StTitle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 46px;
`;

const StContentBox = styled.div`
  width : 541px;
  height : 563px;
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


export default SignUpThree