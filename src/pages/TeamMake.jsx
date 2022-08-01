import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apis from "../api/main";
import { useRef } from "react";
import styled from "styled-components";
import InviteTeamMember from "../components/InviteTeamMemeber";
import { useEffect } from "react";
import teamSelectImg from "../img/teamSelect.png"
import { useDispatch } from "react-redux";
import { setTeamID } from "../redux/modules/teamReducer";
import { useSelector } from "react-redux";



const TeamMake = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const teamImageRef = useRef(null);
  const teamNameRef = useRef(null);

  const makeTeam = async (teamInfo) => {
    return apis.postTeam(teamInfo);
  }

  const { mutate } = useMutation(makeTeam, {
    onSuccess: (data) => {
      dispatch(setTeamID(data.data));
      navigate('/invitemember')
    },
    onError: (error) => {
    }
  });

  const teamMakeHandler = () => {
    const data = {
      teamImage: "randomImageURL",
      teamname: teamNameRef.current.value
    }
    mutate(data)
  }

    return (
        <>
        <StBox>
            <StContainer>
            <StTitle>새롭게 만들 팀명을 입력해주세요</StTitle>
            <StInputWrapper>
            <StEmailBox>
                <StPwInput type='text' placeholder='팀명 입력' ref={teamNameRef} maxLength="10"/>
                <StEmailWarnning>
                10자 이내
                </StEmailWarnning>
            </StEmailBox>
            </StInputWrapper>
            <StBtBox>
                <StCancel onClick={()=>navigate('/teamselect')}>
                    취소
                </StCancel>
                <StAgree onClick={teamMakeHandler}>
                    다음
                </StAgree>
            </StBtBox>
            </StContainer>
        </StBox>
        </>
    )
}
const StBox = styled.div`
    width : 100%;
    height : 100vh;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding : 0;
    justify-content: center;
    align-items: center;
    order: 1;
    background-image: url(${teamSelectImg});
    background-repeat: no-repeat;
    background-size: cover;
    `

const StContainer = styled.div`
    /* Frame 270 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 654px;
    height: 311px;
    `
const StTitle = styled.div`
    /* 새로운 팀 정보를 입력해주세요 */
    width: 610px;
    height: 58px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 58px;
    /* identical to box height */
    text-align: center;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    `
const StInputWrapper = styled.div`
    /* Frame 268 */
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 540px;
    margin-top: 60px;
    
    flex: none;
    order: 0;
    flex-grow: 0;
`
const StEmailWarnning = styled.div`
  height : 19px;
  font-weight: 500;
  font-size: 16px;
  color: #5C5c5c;
`;

const StPwInput = styled.input`
  width : 541px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #5C5c5c;
  padding-left: 10px;
  background: transparent;
`;

const StEmailInputBox = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* width : 541px;
  height : 49px; */
`;

const StEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 541px;
  height: 80px;
  margin : 0 0 0 0;
`;
const StAgree = styled.button`
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

const StCancel = styled.button`
  width : 200px;
  height : 54px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0.375rem;
  cursor: pointer;
  color: #888888;
  background: transparent;
  border: 1px solid #5C5C5C;
`;

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 418px;
  height: 54px;
  margin : 3.75rem 0 0 0;
`;

export default TeamMake;