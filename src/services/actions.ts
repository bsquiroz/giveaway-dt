import { giveawayApi } from "@/api/giveaway.api";
import { LoginData, ResponseLoginData } from "@/interfaces";

export const loginAdm = async (
    dataLoginUser: LoginData
): Promise<ResponseLoginData> => {
    const { data } = await giveawayApi.post("/users/login", {
        email: dataLoginUser.email,
        password: dataLoginUser.password,
    });

    return data;
};
