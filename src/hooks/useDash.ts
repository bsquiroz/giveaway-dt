import { useQuery } from "react-query";
import { getUsers } from "@/services/actions";

interface DataDash {
    id?: string | null;
    token?: string | null;
}

export const useDash = (data: DataDash) => {
    const queryGetUsers = useQuery({
        queryKey: ["getGiveaway"],
        queryFn: () => getUsers(data.token!),
    });

    return { queryGetUsers };
};
