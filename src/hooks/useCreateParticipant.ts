import { useMutation } from "react-query";
import { createParticipant } from "../services/actions";
import { CreateParticipant } from "@/interfaces";

export const useCreateParticipant = () => {
    const mutationCreateParticipant = useMutation({
        mutationFn: (dataLoginUser: CreateParticipant) => createParticipant(dataLoginUser),
    });

    return { mutationCreateParticipant };
};
