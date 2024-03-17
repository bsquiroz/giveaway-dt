import { useMutation } from "react-query";
import { loginAdm } from "../services/actions";
import { LoginData } from "@/interfaces";

export const useLoginAdm = () => {
    const mutationLoginAdm = useMutation({
        mutationFn: (dataLoginUser: LoginData) => loginAdm(dataLoginUser),
    });

    return { mutationLoginAdm };
};
