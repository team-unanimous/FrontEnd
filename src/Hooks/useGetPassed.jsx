import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetPassed = ({teamId}) => {
    const fetcher = async () => {
        const { data } = await apis.getPassed({teamId});
        return data;
    }
    return useQuery("meetPassed", fetcher);
}