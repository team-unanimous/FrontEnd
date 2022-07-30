import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import apis from "../api/main";
import xbutton from "../img/Xbutton.png"
import teamSelectImg from "../img/teamSelect.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const InviteTeamMember = ()=> {
    const navigate = useNavigate();
    const teamData = useSelector(state=>state.teamReducer);
    const [memberEmail, setMemberEmail] = useState("");
    const emailRef = useRef();

    const mailSend = (emailInfo) =>{
        return apis.postTeamMailSend(emailInfo);
    }

    const { mutate : mailSendMutate } = useMutation(mailSend, {
        onSuccess: (resp) => {
            navigate('/teammakesuccess')
        }
    })

    const SendMemberListHandler = () => {
        const data = {
            emailRequestDtoList: memberEmail,
            teamId: teamData, // teammake 페이지에서 상태 값으로 받아 와서 전달해야됨 
        }
        mailSendMutate(data);
    } 


    return(
        <>
        <StBox>
            <StContainer>
                <StTitle>새로운 팀원을 추가해주세요</StTitle>
                <StInputWrapper>
                <StEmailBox>
                    <StEmailInputBox>
                    <StPwInput type='text' placeholder='이메일 입력' ref={emailRef}/>
                    <StEmailButton 
                    onClick={()=>{
                        if (emailRef.current.value == "" ) return
                        setMemberEmail([
                            ...memberEmail,
                            emailRef?.current?.value])
                        emailRef.current.value = ""
                        }}
                    >
                    추가
                    </StEmailButton>
                    </StEmailInputBox>
                    <StEmailWarningBox>
                    {
                        !memberEmail
                        ? <></>
                        : <>{memberEmail.map((email, i)=>(
                                    <StLiItem key={i}>{`${email}`}
                                    <input style={{width:"1rem"}} type={"image"} src={xbutton} onClick={
                                        ()=>{
                                            setMemberEmail(memberEmail.filter(( _, index) => index !== i))
                                    }}/>
                                    </StLiItem>
                        ))}</>
                    }
                    </StEmailWarningBox>
                    <StEmailWarnning>
                    </StEmailWarnning>
                </StEmailBox>
            </StInputWrapper>
            <StBtBox>
                <StCancel onClick={()=>navigate(-1)}>
                    취소
                </StCancel>
                <StAgree onClick={SendMemberListHandler}>
                    완료
                </StAgree>
            </StBtBox>
            </StContainer>
        </StBox>
        </>
    )
}

const StLiItem = styled.div`
    font-size: 16px;
    align-self: flex-start;
    /* Frame 266 */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    gap: 24px;
    box-sizing: border-box;

    width: fit-content;
    height: 31px;

    /* Grey/background */

    background: #F1F1F1;
    border-radius: 100px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    /* unaniomus2022@gmail.com */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #5C5C5C;
`
// const StUl = styled.ul`
//     line-height: 100%;
//     list-style: none;
// `
// const StLi = styled.li`
//     /* margin-top: -20px; */
// `

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
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    /* gap: 60px; */
    
    /* position: absolute; */
    width: 610px;
    height: 537px;
    `
const StTitle = styled.div`
    /* 새로운 팀 정보를 입력해주세요 */
    width: 610px;
    height: 58px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
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
    padding: 0px;
    gap: 25px;
    
    width: 540px;
    height: 302px;
    margin-top: 60px;
    
    /* Inside auto layout */
    
    flex: none;
    order: 0;
    flex-grow: 0;
`
const StEmailWarnning = styled.div`
  height : 19px;
  font-weight: 500;
  font-size: 16px;
`;

const StBtBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 418px;
  height: 54px;
  margin : 3.75rem 0 0 0;
`;
const StEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 540px;
  height: 251px;
  margin : 0 0 0 0;
`;
const StEmailWarningBox = styled.div`
    /* Frame 266 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 100%;
    height: 187px;

    flex: none;
    order: 1;
    flex-grow: 0;
    overflow-y: auto;
`

const StEmailInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 541px;
  height : 49px;
`;
const StPwInput = styled.input`
  width : 541px;
  height : 44px;
  border-radius: 6px;
  border: 1px solid #000000;
`;
const StEmailButton = styled.button`
  width : 132px;
  height : 49px;
  margin : 0 0 0 9px;
  background-color: #063250;
  color : white;
  border-radius: 6px;
`;
const StCancel = styled.button`
  width : 200px;
  height : 54px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0.375rem;
  cursor: pointer;
  color: #888888;
  background-color: #fff;
  border: 1px solid #5C5C5C;
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

export default InviteTeamMember;