import axios from 'axios';

import { API_BASE_URL } from "./api-client";

export const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
    }
});
