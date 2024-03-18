import axios from "axios";

const BASE_URL_BACKEND =
    import.meta.env.VITE_BASE_URL_API ||
    "https://sorteos-app-backend.andrescode.com/api/v1";

const giveawayApi = (token?: string) => {
    if (!token)
        return axios.create({
            baseURL: BASE_URL_BACKEND,
        });

    return axios.create({
        baseURL: BASE_URL_BACKEND,
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};

export { giveawayApi };
