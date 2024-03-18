import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUsers, postUser, deleteUser } from "@/services/actions";
import { DataFormUser } from "@/pages/Dash/pages/Users/interfaces";

interface DataDash {
    id?: string | null;
    token?: string | null;
}

export const useDash = (data: DataDash) => {
    const queryClient = useQueryClient();
    const queryGetUsers = useQuery({
        queryKey: ["getUsers"],
        queryFn: () => getUsers(data.token!),
    });

    const queryCreateUser = useMutation({
        mutationFn: (dataCreateUser: DataFormUser) => {
            return postUser(data.token!, dataCreateUser);
        },

        onSuccess: () => {
            queryClient.refetchQueries(["getUsers"]);
        },
    });

    const queryDeleteUser = useMutation({
        mutationFn: (id: string | number) => {
            return deleteUser(data.token!, id);
        },

        onSuccess: () => {
            queryClient.refetchQueries(["getUsers"]);
        },
    });

    return { queryGetUsers, queryCreateUser, queryDeleteUser };
};
