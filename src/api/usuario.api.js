import axios from "axios";

const userApi = axios.create({
    baseURL: 'https://newvsgamesapi-production.up.railway.app/api/v1/usuarios/'
});

export const getAllUsers = () => userApi.get('/');

export const getUser = (id) =>  userApi.get(`/${id}`);

export const getUserByEmail = (email) => userApi.get(`/find_by_email?email=${email}`);

export const getIdByEmail = (email) => userApi.get(`/find_id_by_email?email=${email}`);

export const getPrivByEmail = (email) => userApi.get(`/find_priv_by_email?email=${email}`);

export const createUser = (usuario) => userApi.post('/', usuario);

export const deleteUser = (id) => userApi.delete(`/${id}`);

export const updateUser = (id, usuario) => userApi.put(`/${id}`, usuario);