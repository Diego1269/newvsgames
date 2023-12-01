import axios from "axios";

const detApi = axios.create({
    baseURL: 'https://newvsgamesapi-production.up.railway.app/api/v1/detalle_venta/'
});

export const getAllDets = () => detApi.get('/');

export const getDetalle = (id) => detApi.get(`/${id}`);

export const createDetalle = (detalle) => detApi.post('/', detalle);

export const deleteDetalle = (id) => detApi.delete(`/${id}`);

export const updateDetalle = (id, detalle) => detApi.put(`/${id}`, detalle);