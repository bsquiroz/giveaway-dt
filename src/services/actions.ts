import { giveawayApi } from "@/api/giveaway.api";
import {
    Giveaway,
    LoginData,
    ResponseGetGiveaway,
    ResponseLoginData,
} from "@/interfaces";

export const loginAdm = async (
    dataLoginUser: LoginData
): Promise<ResponseLoginData> => {
    const { data } = await giveawayApi().post("/users/login", {
        email: dataLoginUser.email,
        password: dataLoginUser.password,
    });

    return data;
};

export const getGiveaways = async (): Promise<ResponseGetGiveaway> => {
    const { data } = await giveawayApi().get(
        "/giveaways?pendings=true&status=ACTIVE"
    );
    return data;
};

export const getGiveaway = async (id: string): Promise<Giveaway> => {
    const { data } = await giveawayApi().get(`/giveaways/${id}`);
    return data;
};

export const getUsers = async (token: string) => {
    const { data } = await giveawayApi(token).get("/users");
    return data;
};
