import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apis from "../api/main";
import { useRef } from "react";

const TeamMake = () => {
    const navigate = useNavigate();
    const teamImageRef = useRef(null);
    const teamNameRef = useRef(null);

    const makeTeam = (teamInfo)=> {
        return apis.postTeam(teamInfo);
    }

    const { mutate } = useMutation(makeTeam);
    const data = {
        teamImage : teamImageRef.current.value,
        teamname : teamNameRef.current.value
    }

    mutate(data)

    return (
        <>  
            // 이미지 업로드 기능 추가
            <img src="" ref={teamImageRef}></img>
            <input type={"text"} placeholder={"팀이름"} ref={teamNameRef}></input>
            <button onClick={()=>navigate('/')}> 초대 받은 팀에 들어가기 </button>
            <button onClick={()=>navigate('/')}> 팀 만들기 </button>
            <a href=""> skip하고 빠르게 둘러보기 </a>
        </>
    )
}

export default TeamMake;