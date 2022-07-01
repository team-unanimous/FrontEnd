import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apis from "../api/main";
import { useRef } from "react";

const TeamJoin = () => {
    const uuidRef = useRef()

    const findUUID = (UUIDInfo)=> {
        return apis.postInviteTeam(UUIDInfo);
    }

    const { mutate } = useMutation(findUUID)
    const data = {
        uuid : uuidRef.current?.value
    }

    mutate(data);

    return (
        <>
            <input type={"text"} placeholder={"UUID"} ref={uuidRef}></input>
            <button>팀 찾아보기</button>

        </>
    )
}

export default TeamJoin;