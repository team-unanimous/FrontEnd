import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apis from "../api/main";
import { useRef, useState } from "react";

const TeamJoin = () => {
    const uuidRef = useRef();
    const navigate = useNavigate();

    const findUUID = (UUIDInfo)=> {
        return apis.postInviteTeam(UUIDInfo);
    }

    const joinbyUUID = (UUIDInfo)=> {
        return apis.postTeamJoin(UUIDInfo);
    }

    const [teamUid, setTeamUid] = useState(null);

    // const { mutate, data } = useMutation(findUUID)
    const findUUIDMutate = useMutation(findUUID, {
        onSuccess: (data) =>{
            setTeamUid(data.data.uuid)
        }
    })

    const joinMutate = useMutation(joinbyUUID, {
        onSuccess: (data) =>{

        }
    })

    const teamFindHandler = ()=>{
        const uuid = {
            uuid : uuidRef.current.value
        }
        findUUIDMutate.mutate(uuid);
        // console.log(data);
    }

    // const teamJoinHandler = ()=>{
    //     const uuidData = uuid
    //     joinMutate.mutate(uuid);
    // }
    
    return (
        <>
            <input type={"text"} placeholder={"UUID"} ref={uuidRef}></input>
            <button onClick={teamFindHandler}>팀 찾아보기</button>

        </>
    )
}

export default TeamJoin;