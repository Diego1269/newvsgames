import axios from "axios";

const catApi = axios.create({
    baseURL: 'https://newvsgamesapi-production.up.railway.app/api/v1/categoria'
});

export const getAllCats = () => catApi.get('/');

export const getCatProds = (id) => catApi.get(`/${id}/productos`);

export const getCats = (id) => catApi.get(`/${id}`);

export const createCat = (categoria) => catApi.post('/', categoria);

export const deleteCat = (id) => catApi.delete(`/${id}`);

export const updateCat = (id, categoria) => catApi.put(`/${id}`, categoria);
