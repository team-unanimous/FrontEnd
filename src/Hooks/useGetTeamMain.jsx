import {useQuery} from 'react-query'
import apis from '../api/main'

const useGetTeamMain=({teamId})=>{
    const fetcher = async ()=>{
        const {data} = await apis.getTeamMain({teamId});
        return data;
    }
    return useQuery("teamMain",fetcher);
}

export default useGetTeamMain;