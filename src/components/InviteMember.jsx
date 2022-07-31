import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useMutation } from "react-query";
import { useParams } from 'react-router';
import styled from "styled-components";
import apis from "../api/main";
import xbutton from "../img/Xbutton.png"


const InviteMember = ({open,close})=> {

    const reg_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,8}$/i;
    const teamId = useParams().teamid
    const [memberEmail, setMemberEmail] = useState("");
    const emailRef = useRef();
    const mailSend = (emailInfo) =>{
        return apis.postTeamMailSend(emailInfo);
    }

    const { mutate : mailSendMutate } = useMutation(mailSend, {
        onSuccess: (resp) => {
        }
    })

    const SendMemberListHandler = () => {
        const data = {
            emailRequestDtoList: memberEmail,
            teamId: teamId, // teammake 페이지에서 상태 값으로 받아 와서 전달해야됨
        }
        mailSendMutate(data);
    }

    return(
        <>
        {open?
        <>
        <StBack onClick={close}/>
        <StBox>
                <StClose src={xbutton} onClick={close}/>
                <StTitle>사용자 초대</StTitle>
                <StEmailBox>
                    <StEmailInputBox>
                    <StPwInput type='text' placeholder='이메일 입력' ref={emailRef}/>
                    <StEmailButton
                    onClick={()=>{
                        if (emailRef.current.value == "" ) return
                        setMemberEmail([
                            ...memberEmail,
                            emailRef?.current?.value])
                        emailRef.current.value = ''
                        }}>
                    추가
                    </StEmailButton>
                    </StEmailInputBox>
                    <StDiv>
                    {
                        !memberEmail
                        ? <></>
                        : <>{memberEmail.map((email, i)=>(
                                <StUlContainer key={i}>
                                    <StLiItem>{`${email}`}
                                    <StInput src={xbutton} onClick={
                                        ()=>{
                                            setMemberEmail(memberEmail.filter(( _, index) => index !== i))
                                    }}/>
                                    </StLiItem>
                                </StUlContainer>
                        ))}</>
                    }
                    </StDiv>
                  
                </StEmailBox>
                <div onClick={close}>
                    <StAgree onClick={SendMemberListHandler}>
                        보내기
                    </StAgree>
                </div>
        </StBox>
        </>:<></>
        }
        </>
    )
}

const StClose = styled.img`
    position : absolute;
    top : 30px;
    right : 30px;
    width : 16px;
    height : 16px
`;

const StDiv = styled.div`
    width : 541px;
    height : 120px;
    overflow-x: hidden;
    ::-webkit-scrollbar{
    width:10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #EAEAEA;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-track{
        border-radius: 1rem;
    }
`;

const StInput = styled.img`
    width : 10.5px;
    height : 10.5px;
    margin : 0 0 0 24px;
`;

const StBox = styled.div`
    position: fixed;
    top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 540px;
    height : 393px;
    padding: 100px 80px 80px 80px;
    border-radius: 8px;
    order: 1;
    background-color: white;
    z-index : 20;
    `

const StBack = styled.div`
    position : fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100%;
    height : 100%;
    background-color: rgba(0,0,0,0.4);
    z-index : 10;
`;


const StUlContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const StLiItem = styled.div`
    font-size: 16px;
    display: flex;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    padding : 6px 10px 6px 10px;
    background-color: #F1F1F1;
    border-radius: 100px;
    margin : 0 0 8px 0;
`

const StTitle = styled.div`
    /* 새로운 팀 정보를 입력해주세요 */
    width: 610px;
    height: 58px;
    margin : 0 0 48px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 58px;
    /* identical to box height */
    text-align: center;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    `




const StEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width : 541px;
  height: 220px;

`;

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
  padding : 0 0 0 10px;
  border-radius: 6px;
  border: 1px solid #000000;
`;
const StEmailButton = styled.button`
  width : 132px;
  height : 49px;
  margin : 0 0 0 9px;
  background-color: #063250;
  font-size: 16px;
  font-weight : 700;
  border: none;
  color : white;
  border-radius: 6px;
`;


const StAgree = styled.button`
  width : 132px;
  height : 54px;
  background-color: #063250;
  margin : 48px 0 0 0;
  font-weight: 700;
  font-size: 20px;
  color : white;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
`;
export default InviteMember;