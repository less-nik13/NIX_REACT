import axios from 'axios';

import { API_BASE_URL } from "./api-client";

export const instance = axios.create({
    baseURL: API_BASE_URL,
    params: {
        api_key: process.env.API_KEY,
    }
});
