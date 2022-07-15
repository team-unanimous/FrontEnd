import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetOnAir = ({teamId}) => {
    const fetcher = async () => {
        const { data } = await apis.getOnAir({teamId});
        return data;
    }
    return useQuery("meetOnAir", fetcher);
}
