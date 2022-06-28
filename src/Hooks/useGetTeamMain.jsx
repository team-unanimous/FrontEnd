import {useQuery} from 'react-query'
import apis from '../api/main'

export const useGetTeamMain=()=>{
    const fetcher = async ()=>{
        const {data} = await apis.getTeamMain();
        return data;
    }
    return useQuery("teamMain",fetcher);
}