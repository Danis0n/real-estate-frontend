import axios from "axios";

export const API_URL = 'http://localhost:3000';

export const getContentType = () => ({
    'Content-Type': 'application/json',
});

export const axiosClassic = axios.create({
    baseURL: API_URL,
    headers: getContentType(),
})