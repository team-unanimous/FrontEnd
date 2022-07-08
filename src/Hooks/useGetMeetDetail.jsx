import {useQuery} from 'react-query';
import apis from "../api/main";

const useGetMeetDetail = ({teamId,meetingId})=>{
    const fetcher = async ()=>{
        const {data} = await apis.getMeetDetail({teamId,meetingId});
        return data;
    }
    return useQuery("detail",fetcher);    
}

export default useGetMeetDetail;