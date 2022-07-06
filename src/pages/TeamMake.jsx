import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apis from "../api/main";
import { useRef } from "react";
import styled from "styled-components";

const TeamMake = () => {
    const navigate = useNavigate();
    const teamImageRef = useRef(null);
    const teamNameRef = useRef(null);

    const makeTeam = (teamInfo)=> {
        return apis.postTeam(teamInfo);
    }

    const { mutate } = useMutation(makeTeam);
    
    const teamMakeHandler = ()=>{
        const data = {
            teamImage : "randomImageURL",
            teamname : teamNameRef.current.value
        }
        console.log(data);
        mutate(data)
    }

    return (
        <>
            <StContainer>
            {/* // 이미지 업로드 기능 추가 */}
            <StTitle>새로운 팀 정보를 입력해주세요</StTitle>
            {/* <img src="" ref={teamImageRef}></img> */}
            <input type={"text"} placeholder={"팀명 입력"} ref={teamNameRef}></input>
            <button onClick={()=>navigate('/')}> 초대 받은 팀에 들어가기 </button>
            <button onClick={teamMakeHandler}> 팀 만들기 </button>
            <a href=""> skip하고 빠르게 둘러보기 </a>
            </StContainer>
        </>
    )
}
const StContainer = styled.div`
    /* Frame 270 */
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 60px;

    position: absolute;
    width: 610px;
    height: 537px;
    left: 655px;
    top: 280px;
`
const StTitle = styled.div`
    /* 새로운 팀 정보를 입력해주세요 */
    width: 610px;
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


export default TeamMake;