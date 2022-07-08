import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetReserve = ({teamId}) => {
    const fetcher = async () => {
        const { data } = await apis.getReserve({teamId});
        return data;
    }
    return useQuery("meetReserve", fetcher);
}