import axios from "axios";

const prodApi = axios.create({
    baseURL: 'https://newvsgamesapi-production.up.railway.app/api/v1/productos/'
});

export const getAllProds = () => prodApi.get('/');

export const getProd = (id) => prodApi.get(`/${id}`);

export const createProd = (producto) => prodApi.post('/', producto);

export const deleteProd = (id) => prodApi.delete(`/${id}`);

export const updateProd = (id, producto) => prodApi.put(`/${id}`, producto);