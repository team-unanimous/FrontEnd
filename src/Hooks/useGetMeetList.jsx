import { useQuery } from "react-query";
import apis from "../api/main";

const useGetMeetList = ({teamId}) => {
    const fetcher = async () => {
        const { data } = await apis.getMeetList({teamId});
        return data;
    }
    return useQuery("teamInfo", fetcher);
}

export default useGetMeetList;