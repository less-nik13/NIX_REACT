import { Router } from "express";
import { nanoid } from "nanoid";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import db from '../db/dbConfig.js';
import ApiError from "../exceptions/api-errors.js";
import { config } from '../config.js';
import UserDto from "../dtos/user-dto.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = Router();

router.post("/register", async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const generatedId = nanoid(20);
        const Users = db.data.users;
        const existingUser = await Users.find(user => user.email === email);

        if(existingUser) throw ApiError.BadRequest(`Sorry, but User with email ${email} already exists!`);

        // Encrypt password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const creationDate = new Intl.DateTimeFormat().format(new Date());

        // create new user
        const newUser = { id: generatedId, email, name, password: hashedPassword, createdAt: creationDate, favorites: [] };
        Users.push(newUser);

        await db.write();
        return res.status(200).json({ message: "Successfully Registered!" });
    } catch(e) {
        next(e);
    }
});

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const Users = db.data.users;
        const existingUser = await Users.find(user => user.email === email);

        if(!existingUser) {
            throw ApiError.BadRequest(`User with email ${email} not found!`);
        }

        const isPasswordCorrect = await bcryptjs.compare(password, existingUser.password);

        if(!isPasswordCorrect) {
            throw ApiError.BadRequest('Wrong password!');
        }

        const generatedToken = jwt.sign({ id: existingUser.id, email: existingUser.email }, config.JWT_SECRET);
        const userDto = new UserDto(existingUser);

        res.set('Authorization', `Bearer ${generatedToken}`);

        return res.status(200).json({ message: "Logged in successfully!", currentUser: userDto });
    } catch(e) {
        next(e);
    }
});

router.get("/logout", authMiddleware, (req, res) => {
    return res.status(200).json({ message: "Logout successfully!" });
});

export { router as AuthRoute };
