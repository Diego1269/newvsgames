import axios from "axios";

const privApi = axios.create({
    baseURL: "https://newvsgamesapi-production.up.railway.app/api/v1/privilegios/"
});

export const getPrivs = () => privApi.get('/');