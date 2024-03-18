import { useQuery } from "react-query";
import { getGiveaway } from "../services/actions";

export const useGetGiveaway = (id: string) => {
    const queryGetGiveaway = useQuery({
        queryKey: ["getGiveaway"],
        queryFn: () => getGiveaway(id),
    });

    return { queryGetGiveaway };
};
