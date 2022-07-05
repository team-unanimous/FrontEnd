import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetMeetList = () => {
    const fetcher = async () => {
        const { data } = await apis.getMeetSpecific();
        return data;
    }
    return useQuery("teamInfo", fetcher);
}