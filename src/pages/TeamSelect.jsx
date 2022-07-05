import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetTeamInfo } from "../Hooks/useGetTeamInfo"
import styled from "styled-components"

const TeamSelect = () => {
    const navigate = useNavigate();
    const [selectedTeam, setSelectedTeam] = useState(null);

    const { data } = useGetTeamInfo();

    if (!data){
        return <>Something wrong!</>
    }
    console.log(data);

    return (
        <>
        <StContainer>
        <StTitle>접속할 팀 페이지를 선택해주세요</StTitle>
        <StTeamBox>
            {data.map((team)=>(
                <>
                <StTeamItemBox>
                <StTeamItem
                    key = {team.team_id}
                    className = "team-title"
                    // onClick={()=> setSelectedTeam(team)}
                    >
                        <img src={`${team.teamImage}`}></img>
                </StTeamItem>
                <StTeamName>
                {team.teamname}
                </StTeamName>
                </StTeamItemBox>
                </>
            ))}
        </StTeamBox>
        </StContainer>
        <button onClick={()=>navigate("/teaminvited")}>초대 받은 팀에 들어가기</button>
        <button onClick={()=>navigate("/teammake")}>팀 만들기</button>
        </>
    )
}

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    
    position: absolute;
    width: 1028px;
    height: 378px;
    left: 446px;
    top: 352px;
`
const StTitle = styled.div`
    width: 654px;
    height: 58px;
    margin-bottom: 40px;

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
const StTeamBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around; 
`

const StTeamItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StTeamItem = styled.div`
    width: 180px;
    height: 180px;

    background-color: #D9D9d9;
    border-radius: 87px;
`
const StTeamName = styled.div`
    /* 팀이름 */

    width: 100px;
    height: 24px;

    margin-top: 24px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #000000;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`


export default TeamSelect;