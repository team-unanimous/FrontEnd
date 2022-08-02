import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import frameimg from "../img/bgimg.svg"


const SignupOne = () => {

  const navigate = useNavigate();


  // 페이지 이동
  const movenext = () => {
    navigate('/signuptwo');
  }

  const movelogin = () => {
    navigate('/login');
  }


  // 이용약관 동의 체크

  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [active, setActive] = useState(false);

  const checkone = () => {
    setCheckOne(!checkOne);
  }

  const checktwo = () => {
    setCheckTwo(!checkTwo);
  }

  useEffect(() => {
    if (checkOne == true && checkTwo == true) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  })

  console.log(checkOne)
  console.log(checkTwo)

  return (
    <StBox style={{ backgroundImage: `url(${frameimg})` }}>
      <StWrap>
        <StTitle>
          Unanimity를 무료로 이용해보세요
        </StTitle>
        <StContentBox>
          <StCheckOneBox>
            <StOneBox onChange={checkone} htmlFor="subscribeNews">
              <StCheckBoxOne type="checkbox" id="subscribeNews" />
              <StCheckOne >
                개인정보 수집 및 이용 약관을 확인하였으며 위 내용에 동의합니다.
              </StCheckOne>
            </StOneBox>
            <StContent onClick={() => window.open('termsofservice', '_blank')}>내용 보기
            </StContent>
          </StCheckOneBox>
          <StCheckTwoBox>
            <StTwoBox onChange={checktwo} htmlFor="subscribeNewstwo">
              <StCheckBoxTwo type="checkbox" id="subscribeNewstwo" />
              <StCheckTwo >
                만 14세 이상입니다.
              </StCheckTwo>
            </StTwoBox>
          </StCheckTwoBox>
          <StConfirm>필수 약관에 동의해주세요</StConfirm>
        </StContentBox>
        <StBtBox>
          <StCancel onClick={movelogin}>
            취소
          </StCancel>
          {active ? <StAgree onClick={movenext}>
            동의
          </StAgree> : <StDisagree>동의</StDisagree>}
        </StBtBox>
      </StWrap>
    </StBox>
  )
}

const StOneBox = styled.label`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
height: 19px;
width: 550px;
`

const StTwoBox = styled.label`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
height: 19px;
width: 200px;
`

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 1155px;
  height: 740px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, #FFFFFF 100%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 418px;
  height: 54px;
  margin : 3.75rem 0 0 0;
`;

const StDisagree = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width : 200px;
  height : 54px;
  background-color: #D7D7D7;
  font-weight: 700;
  font-size: 20px;
  color : white;
  border-radius: 0.375rem;
  border: 1px solid #D7D7D7;
  cursor: pointer;
`;

const StAgree = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width : 200px;
  height : 54px;
  background-color: #063250;
  font-weight: 700;
  font-size: 20px;
  color : white;
  border-radius: 0.375rem;
  border: 1px solid #000000;
  cursor: pointer;
`;

const StCancel = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width : 200px;
  height : 54px;
  font-weight: 700;
  font-size: 20px;
  color: #888888;
  border: solid 1px #5C5C5C;
  background-color: white;
  border-radius: 0.375rem;
  cursor: pointer;
`;

const StConfirm = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin : 1rem 0 0 1rem ;
  color: #EF6A61;
`;

const StContentBox = styled.div`
  width: 693px;
  height: 115px;
  margin : 3.75rem 0 0 0;
  
`;

const StContent = styled.button`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 90px;
  height : 25px;
  border: solid 1px #2396F0;
  padding: 13px 8px 13px 8px;
  border-radius: 5px;
  background-color: white;
  color: #2396F0;
  cursor: pointer;
`;

const StCheckTwo = styled.div`
  width: 138px;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
`;

const StCheckTwoBox = styled.div`
  display: flex;

`;

const StCheckBoxTwo = styled.input`
height: 18px;
width: 18px;
margin : 0 1rem 0 1rem ;
`

const StCheckBoxOne = styled.input`
height: 18px;
width: 18px;
  margin : 0 1rem 0 1rem ;
`;

const StCheckOne = styled.div`
  width: 510px;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
`;

const StCheckOneBox = styled.div`
  display : flex;
  align-items: center;
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