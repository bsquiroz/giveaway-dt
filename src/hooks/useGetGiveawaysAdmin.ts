import { useQuery } from "react-query"
import { getGiveawaysAdmin } from "../services/actions"

export const useGetGiveawaysAdmin = () => {
    const queryGetGiveaways = useQuery({
        queryKey: ["getGiveaways"],
        queryFn: () => getGiveawaysAdmin(),
    })

    return { queryGetGiveaways }
}
