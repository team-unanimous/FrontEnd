import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import apis from "../api/main";
import { useRef } from "react";

const TeamInvited = () => {
    return (
        <>
            <input type={text} placeholder={"UUID"}></input>
            <button>팀 찾아보기</button>
        </>
    )
}

export default TeamInvited;