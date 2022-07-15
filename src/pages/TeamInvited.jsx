import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apis from "../api/main";
import { useRef } from "react";
import styled from "styled-components";
import { useState } from "react";

const TeamInvited = () => {
    const uuidRef = useRef()
    const [warning, setWarning] = useState(null);
    const [teamData, setTeamData] = useState(null);

    const findUUID = (UUIDInfo)=> {
        return apis.postInviteTeam(UUIDInfo);
    }
        
    const { mutate } = useMutation(findUUID, {
        onSuccess: (resp) => {
            console.log(resp);
            setWarning(false);
            setTeamData(true);
        },
        onError: () => {
            console.log("error")
            setTeam(false);
            setWarning(true);
        }
    })

    const teamFindHandler = ()=>{
        const data = {
            uuid : uuidRef.current.value
        }
        console.log(data);
        mutate(data);
    }
    

    return (
        <>
        <StBox>
            <StContainer>
                <StTitleBox>
                    <StTitle>메일로 전송된 초대 코드를 입력해주세요</StTitle>
                    <StTitleWrapper>
                        <StTitleInputBox>
                            <StTitleInput placeholder="초대 코드 입력" type={"text"} ref={uuidRef}>

                            </StTitleInput>
                            <StTitleButton onClick={teamFindHandler}>
                                코드 확인
                            </StTitleButton>
                        </StTitleInputBox>
                        {warning 
                        ?<StWarning>올바르지 않은 코드가 입력되었습니다. 다시 입력해주세요.</StWarning> 
                        : <></>}
                    </StTitleWrapper>
                </StTitleBox>
                <StTeamBox>
                    <StTeamDataWrapper>
                        <StTeamProfileImg>
                            <img src={resp?.data.teamImage}></img>

                        </StTeamProfileImg>
                    </StTeamDataWrapper>
                </StTeamBox>
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
`
const StContainer = styled.div`
    background-color: red;
    /* Frame 270 */
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;
    /* gap: 60px; */
    
    /* position: absolute; */
    width: 799px;
    height: 671px;
`
const StTitle = styled.div`
    /* 새로운 팀 정보를 입력해주세요 */
    width: 799px;
    height: 58px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    /* identical to box height */
    text-align: center;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`
const StTitleBox = styled.div`
    background-color: yellow;
    width: 799px;
    height: 197px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StTitleWrapper = styled.div`
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 79px;
    margin-top: 60px;
    /* align-self: flex-start; */
    justify-content: flex-start;
`
const StTitleInputBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 49px;
    
`
const StTitleInput = styled.input`
    width : 650px;
    height : 44px;
    border-radius: 6px;
    border: 1px solid #000000;
`
const StTitleButton = styled.button`
    width : 132px;
    height : 48px;
    border-radius : 6px;
    background-color: #000;
    margin-left: 6px;
    color: white;
`
const StWarning = styled.div`
    /* 이메일 형식에 맞게 입력해주세요 */
    width: 384px;
    height: 19px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #EF6A61;

    flex: none;
    order: 2;
    flex-grow: 0;

    align-self: flex-start;
    margin-top: 12px;
`
const StTeamBox = styled.div`
    /* Frame 277 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 50px;


    width: 336px;
    height: 414px;

    background: #F5F5F5;
    border-radius: 8px;

    box-sizing: border-box;
    margin-top: 60px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`
const StTeamDataWrapper = styled.div`
    /* Frame 196 */
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    /* align-self: flex-start; */

    width: 180px;
    height: 228px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StTeamProfileImg = styled.div`
    background-color: #000;
    /* Rectangle 151 */
    width: 180px;
    height: 180px;

    background: #F1F1F1;
    border-radius: 87px;
`

export default TeamInvited;