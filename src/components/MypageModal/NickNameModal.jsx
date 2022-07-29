import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from 'react-query'
import apis from '../../api/main'
import cancel from "../../img/cancel.png"
import { useSelector } from "react-redux"
import jwt_decode from "jwt-decode";
import { setCookie, getCookie } from "../../Cookie";

const NickNameModal = ({ open, close }) => {

    // 토큰에서 뽑아오기
    const ontoken = jwt_decode(getCookie('token'));
    const usersid = ontoken.userId
    // console.log(ontoken.userId)

    // 닉네임 
    const [nickname, setNickname] = useState("");
    // 경고메시지 
    const [warning, setWarning] = useState(false);
    // 닉네임중복확인 판별(락)
    const [nkcheck, setNkcheck] = useState(false);


    // 닉네임비활성화 버튼 false일때 활성화
    const DisableFunction = () => {
        if (Boolean(nickname) === false)
            return true;
        else if (nkcheck === false)
            return true;
        else
            return false;
    }


    // 닉네임 중복 확인
    const NickCheck = (data) => {
        return apis.postNickCheck(data)
            .then((response) => {
                // response.data
                console.log(response.data);
                setNkcheck(true)
                setWarning(false)
            })
            .catch(error => {
                setWarning(true)
            })
    }

    const { mutate: NickCk } = useMutation(NickCheck, {
        onSuccess: (data) => {
            alert("사용 가능한 닉네임입니다")
        },
        onError: (error) => {
            alert("사용 불가능한 닉네임입니다")
        }
    })

    const nickCheckFunction = () => {
        NickCk({
            nickname: nickname,
        })
    }



    // 닉네임 저장
    const NickSave = async (data) => {
        const datas = await apis.patchNickSave(data)
        setCookie("token", datas.headers.authorization);
        return datas;
    }

    const { mutate: NickSv } = useMutation(NickSave, {
        onSuccess: () => {
            alert("닉네임 생성에 성공하셨습니다")
            close();
        },
        onError: (error) => {
            alert("닉네임 생성에 실패하셨습니다")
        }
    })

    const nickSaveFunction = () => {
        NickSv({
            nickname: nickname,
            userid: usersid
        })
    }

    return (
        <>
            {open ?
                <Stwrap>
                    <StXbox onClick={close}>
                        <img src={cancel} style={{ width: '20px' }} />
                    </StXbox>
                    <StBox>
                        <StTitle>닉네임 변경</StTitle>
                        <StChangeBox>
                            <StChangeInput placeholder="닉네임 입력" onChange={(e) => setNickname(e.target.value)} />
                            <StChangeBtn onClick={nickCheckFunction}>
                                중복확인
                            </StChangeBtn>
                        </StChangeBox>
                        {warning === true ?
                            <Stmsg>
                                이미 있는 닉네임 입니다. 새로운 닉네임으로 다시 입력해주세요.
                            </Stmsg>
                            : <></>}
                        <StBtn onClick={nickSaveFunction}
                            disabled={DisableFunction()}>
                            <StChangeTitle>
                                변경
                            </StChangeTitle>
                        </StBtn>
                    </StBox>
                </Stwrap> : <></>}
        </>
    );
}

const StXbox = styled.div`
position: absolute;
top: 20px;
right: 20px;
width: 20px;
height: 20px;
color: black;
cursor: pointer;
`

const StChangeTitle = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: white;
`

const StBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 132px;
height: 54px;
background: #063250;
border-radius: 6px;
padding: 15px;
margin-top: 60px;
&:disabled{
    background-color: gray;
  }
`

const Stmsg = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 540px;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #EF6A61;
`

const StChangeBtn = styled.button`
                width : 132px;
                height : 54px;
                margin : 0 0 0 9px;
                background-color: #063250;
                color : white;
                border: solid 1px #063250;
                border-radius: 6px;
                
                `

const StChangeInput = styled.input`
width: 400px;
height: 49px;
border: 1px solid #000000;
border-radius: 6px;
// placeholder 앞간격
padding-left: 10px;
`

const StChangeBox = styled.div`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                width: 541px;
                height: 89.75px;
                margin-top: 40px;
                `

const StTitle = styled.div`
font-weight: 600;
font-size: 36px;
line-height: 44px;
text-align: center;
color: #000000;
`

const StBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 541px;
height: 277px;
`

const Stwrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
width: 701px;
height: 457px;
background: #FFFFFF;
border-radius: 8px;
border: 1px solid #000000;
`

export default NickNameModal