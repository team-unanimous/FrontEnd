import React from 'react'
import styled from 'styled-components'

const SignupOne = () => {
  return (
    <StBox>
      <StTitle>
        Unanimity를 무료로 이용해보세요
      </StTitle>
      <StContentBox>
        <StCheckOneBox>
          <StCheckBoxOne type="checkbox"/>
          <StCheckOne>
            개인정보 수집 및 이용 약관을 확인하였으며 위 내용에 동의합니다.
          </StCheckOne>
          <StContent>
            내용 보기
          </StContent>
        </StCheckOneBox>
        <StCheckTwoBox>
          <StCheckBoxOne type="checkbox"/>
          <StCheckTwo>만 14세 이상입니다.</StCheckTwo>
        </StCheckTwoBox>
        <StConfirm>필수 약관에 동의해주세요</StConfirm>
      </StContentBox>
      <StBtBox>
        <StCancel>
          취소
        </StCancel>
        <StAgree>
          동의
        </StAgree>
      </StBtBox>
    </StBox>
  )
}

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 418px;
  height: 54px;
  margin : 3.75rem 0 0 0;
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
`;

const StCancel = styled.button`
  width : 200px;
  height : 54px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0.375rem;
`;

const StConfirm = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin : 1rem 0 0 1rem ;
`;

const StContentBox = styled.div`
  width: 693px;
  height: 115px;
  margin : 3.75rem 0 0 0;
  
`;

const StContent = styled.button`
  width : 90px;
  height : 25px;
  border-radius: 5px;
  background-color: white;
`;

const StCheckTwo = styled.div`
  width: 438px;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
`;

const StCheckTwoBox = styled.div`
  display: flex;

`;

const StCheckBoxOne = styled.input`
  margin : 0 1rem 0 1rem ;
`;

const StCheckOne = styled.div`
  width: 650px;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
`;

const StCheckOneBox = styled.div`
  display : flex;
  width : 100%;
  margin : 0 0 1.25rem 0;
 
`;

const StTitle = styled.div`
  width: 750px;
  height: 58px;
  font-weight: 600;
  font-size: 48px;
`;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
  
`;

export default SignupOne