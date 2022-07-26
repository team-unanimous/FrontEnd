import React from 'react'
import apis from '../api/main'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import { useRef } from 'react'

const BanModal = ({open,close,teamId,userId}) => {
    
        // 강퇴하기
        const ban = async (data)=>{
            const datas = await apis.deleteTeamMember(data);
            return datas
        }
    
        const { mutate : bann } = useMutation(ban,{
            onSuccess : () => {
                alert("내보내기 완료");
            },
            onError : () => {
                alert("내보내기 실패");
            }
        })
    
        const banning=()=>{
            {close}
            bann({
                teamId : teamId,
                userId : userId
            })
        }

  return (
    <>
    {open?
    <>
    <StBack onClick={close}/>
        <StBox>
            <StTitle>정말 내보내시겠습니까?</StTitle>
                <StUp>내보내기를 완료하면 취소할 수 없습니다.</StUp>
                
                    <StButton onClick={banning}>
                        <div onClick={close}>
                            내보내기
                        </div>
                    </StButton>
               
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
    background-color: #063250;
    border : none;
    color:white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
`;

const StUp = styled.div`
    display: flex;
    justify-content: center;
    width: 302px;
    height: 19px;
    margin : 0 auto 0 auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
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
    line-height: 44px;
`;

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width :464px;
    height : 201px;
    padding : 100px 80px 80px 80px;
    position : fixed;
    top : 250px;
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
export default BanModal