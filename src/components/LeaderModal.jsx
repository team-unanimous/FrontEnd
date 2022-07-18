import React from 'react'
import apis from '../api/main'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import { useRef } from 'react'

const LeaderModal = ({open,close,teamId}) => {

        const nickname = useRef();
    
        // 팀장 권한 위임
        const pass = async (data)=>{
            const datas = await apis.postLeader(data);
            return datas;
        }
    
        const {mutate : leader} = useMutation(pass,{
            onSuccess:()=>{
                alert("위임 성공!")
            },
            onError:()=>{
                alert("위임 실패!")
            }
        })
    
        const leaders = ()=>{
            leader({
                teamId:teamId,
                nickname:nickname.current.value
            })
        }

  return (
    <>
    {open?
    <>
    <StBack onClick={close}/>
        <StBox>
            <StTitle>팀장 권한 위임</StTitle>
            <StInfoBox>
                <StUp>받는 사람</StUp>
                <StInput ref={nickname}/>
                {<StDown>등록되지 않은 사용자입니다. 다시 입력해주세요.</StDown>}
            </StInfoBox>
            <StButton onClick={leaders}>위임하기</StButton>
        </StBox>
    </>:<></>}
    </>
  )
}

const StButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 132px;
    height: 54px;
    margin : 0 auto 0 auto;
    border-radius: 6px;
    background-color: black;
    color:white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
`;

const StDown = styled.div`
    width : 321px;
    height: 19px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
`;

const StInput = styled.input`
    width : 510px;
    height : 19px;
    padding : 15px;
    border-radius: 6px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

const StUp = styled.div`
    display: flex;
    width : 63px;
    height: 19px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
`;

const StInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width : 540px;
    height: 110px;
`;

const StTitle = styled.div`
    display: flex;
    justify-content: center;
    width : 484px;
    height: 44px;
    margin : 0 auto 0 auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
`;

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width :520px;
    height : 324px;
    padding : 100px 80px 80px 80px;
    position : fixed;
    background-color: white;
    z-index: 20;
`;

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


export default LeaderModal