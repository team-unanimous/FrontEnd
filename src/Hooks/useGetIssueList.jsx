import { useQuery } from "react-query";
import apis from "../api/main";

const useGetIssueList = ({ meetID }) => {
    const fetcher = async () => {
        const { data } = await apis.getIssueList({ meetID });
        return data;
    }
    return useQuery("list", fetcher);
}

export default useGetIssueList;