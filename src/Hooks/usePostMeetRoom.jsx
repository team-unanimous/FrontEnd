import { useMutation } from "react-query/types/react";
import apis from '../api/main';

export const usePostMeetingRoom=()=>{
    const fetcher = async ()=> {
        const {mutate : addMeet} = apis.postMeetRoom();
        return {mutate : addMeet}
    }
    return useMutation(fetcher,{
        onSuccess:(data)=>{
            console.log(data);
        },
        onError:(error)=>{
            console.error(error);
        },
    });
}