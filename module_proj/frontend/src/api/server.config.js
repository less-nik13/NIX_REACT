import axios from 'axios';

import { SERVER_BASE_URL } from "./api-client";

export const serverInstance = axios.create({
    baseURL: SERVER_BASE_URL,
});
