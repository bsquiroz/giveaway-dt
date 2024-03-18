import { giveawayApi } from "@/api/giveaway.api"
import {
    CreateParticipant,
    CreateParticipantRes,
    DashUsers,
    Giveaway,
    LoginData,
    Prize,
    ResponseGetGiveaway,
    ResponseLoginData,
} from "@/interfaces";
import { DataFormUser } from "@/pages/Dash/pages/Users/interfaces";

export const loginAdm = async (
    dataLoginUser: LoginData
): Promise<ResponseLoginData> => {
    const { data } = await giveawayApi().post("/users/login", {
        email: dataLoginUser.email,
        password: dataLoginUser.password,
    })

    return data
}

export const getGiveaways = async (): Promise<ResponseGetGiveaway> => {
    const { data } = await giveawayApi().get(
        "/giveaways?pendings=true&status=ACTIVE"
    )
    return data
}

export const getGiveawaysAdmin = async (): Promise<ResponseGetGiveaway> => {
    const { data } = await giveawayApi().get(
        "/giveaways"
    )
    return data
}

export const getGiveaway = async (id: string): Promise<Giveaway> => {
    const { data } = await giveawayApi().get(`/giveaways/${id}`)
    return data
}

export const getUsers = async (token: string): Promise<DashUsers[]> => {
    const { data } = await giveawayApi(token).get("/users");
    return data;
};

export const createParticipant = async (
    participantData: CreateParticipant
): Promise<CreateParticipantRes> => {
    const { data } = await giveawayApi().post<CreateParticipantRes>(
        "/participants",
        participantData
    );
    return data;
};

export const postUser = async (token: string, dataPostUser: DataFormUser) => {
    const newUser = {
        fullname: dataPostUser.fullname,
        email: dataPostUser.email,
        password: dataPostUser.password,
        avatar: dataPostUser.avatar || "",
    };

    const { data } = await giveawayApi(token).post("/users", newUser);
    return data;
}

export const getPrizes = async (
    giveawayId: number
): Promise<Prize[]> => {
    const { data } = await giveawayApi().get<Prize[]>('/prizes?giveawayId='+giveawayId)
    return data;
}

export const deleteUser = async (token: string, id: string | number) => {
    const { data } = await giveawayApi(token).delete(`/users/${id}`);
    return data;
};
