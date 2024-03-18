import { useQuery } from "react-query";
import { getPrizes } from "../services/actions";

export const useGetPrizes = (id: string | number) => {
    const queryGetPrizes = useQuery({
        queryKey: ["getPrizes"],
        queryFn: () => getPrizes(+id),
    });

    return { queryGetPrizes };
};
