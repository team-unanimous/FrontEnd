import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetMeetSpecific = ({meetingId}) => {
    const fetcher = async () => {
        const { data } = await apis.getMeetSpecific({meetingId});
        return data;
    }
    return useQuery("teamInfo", fetcher);
}