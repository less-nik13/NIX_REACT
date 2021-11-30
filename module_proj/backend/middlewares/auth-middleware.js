import jwt from "jsonwebtoken";

import { config } from "../config.js";
import db from "../db/dbConfig.js";
import ApiError from "../exceptions/api-errors.js";

export default async function(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;

        if(!authorizationHeader || !authorizationHeader.startsWith('Bearer')) return next(ApiError.UnauthorizedError());

        const token = authorizationHeader.split(' ')[1];
        const userData = jwt.verify(token, config.JWT_SECRET);

        if(!userData) return next(ApiError.UnauthorizedError());

        req.user = await db.data.users.find((user) => user.id === userData.id);

        next();
    } catch(e) {
        return next(ApiError.UnauthorizedError());
    }
}