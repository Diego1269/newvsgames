import axios from "axios";

const ventaApi = axios.create({
    baseURL: 'https://newvsgamesapi-production.up.railway.app/api/v1/venta'
});

export const getAllVentas = () => ventaApi.get('/');

export const getVenta = (id) => ventaApi.get(`/${id}`);

export const createVenta = (venta) => ventaApi.post('/', venta);

export const deleteVenta = (id) => ventaApi.delete(`/${id}`);

export const updateVenta = (id, venta) => ventaApi.put(`/${id}`, venta);