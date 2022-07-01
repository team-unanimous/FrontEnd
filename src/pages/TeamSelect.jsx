import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetTeamInfo } from "../Hooks/useGetTeamInfo"

const TeamSelect = () => {
    const navigate = useNavigate();
    const [selectedTeam, setSelectedTeam] = useState(null);

    const { data } = useGetTeamInfo();

    if (!data){
        return <>Something wrong!</>
    }

    return (
        <>
        <ul>
            {data.map((team)=>(
                <li
                    key = {team.team_id}
                    className = "team-title"
                    // onClick={()=> setSelectedTeam(team)}
                    >
                        {team.teamname}
                        <img src={`${team.teamImage}`}></img>
                    </li>
            ))}
        </ul>
        <button onClick={()=>navigate("/")}>초대 받은 팀에 들어가기</button>
        <button onClick={()=>navigate("/")}>팀 만들기</button>
        </>
    )
}

export default TeamSelect;