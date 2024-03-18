import axios from "axios";

// const BASE_URL_BACKEND = import.meta.env.VITE_BASE_URL_API;
const BASE_URL_BACKEND = "sorteos-app-backend.andrescode.com/api/v1";

const giveawayApi = axios.create({
    baseURL: BASE_URL_BACKEND,
});

export { giveawayApi };
