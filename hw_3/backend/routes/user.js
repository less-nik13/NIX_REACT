import { Router } from "express";

import UserDto from "../dtos/user-dto.js";
import authMiddleware from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/', authMiddleware, (req, res, next) => {
    const userInfo = req.user;
    const userDto = new UserDto(userInfo);

    return res.status(200).json({ user: userDto });
});

router.get("/logout", authMiddleware, (req, res) => {
    return res.status(200).json({ message: "Logout successfully" });
});

export { router as UserRoute };