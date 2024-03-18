import { useQuery } from "react-query";
import { getGiveaways } from "../services/actions";

export const useGetGiveaways = () => {
    const queryGetGiveaways = useQuery({
        queryKey: ["getGiveaways"],
        queryFn: () => getGiveaways(),
    });

    return { queryGetGiveaways };
};
