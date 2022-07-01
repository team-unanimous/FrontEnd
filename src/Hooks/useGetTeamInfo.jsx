import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetTeamInfo = () => {
    const fetcher = async () => {
        const { data } = await apis.getTeam();
        return data;
    }
    return useQuery("teamInfo", fetcher);
}