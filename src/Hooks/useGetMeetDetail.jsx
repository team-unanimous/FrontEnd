import {useQuery} from 'react-query';
import apis from "../api/main";

export const useGetMeetDetail = ()=>{
    const fetcher = async ()=>{
        const {data} = await apis.getMeetDetail();
        return data;
    }
    return useQuery("detail",fetcher);
}