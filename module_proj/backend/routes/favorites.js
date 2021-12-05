import { Router } from "express";

import db from '../db/dbConfig.js';
import authMiddleware from '../middlewares/auth-middleware.js';
// import ApiError from "../exceptions/api-errors.js";

const router = Router();

router.get("/", authMiddleware, async (req, res) => {
    const user = req.user;
    const userFavorites = db.data.favorites.filter((favorite) => user.favorites.includes(favorite.id));
    res.status(200).json({ favorites: userFavorites });
});

router.post("/", authMiddleware, async (req, res, next) => {
    try {
        const currentUser = req.user;
        const { movie } = req.body;

        const currentUserIndex = db.data.users.findIndex(user => user.id === currentUser.id);
        db.data.users[currentUserIndex].favorites.unshift(movie.id);
        if(!db.data.favorites.some(item => item.id === movie.id)) {
            db.data.favorites.push({ ...movie });
        }
        await db.write();

        res.status(200).json({ message: "Added to favorites" });
    } catch(e) {
        next(e);
    }
});

router.delete('/:id', authMiddleware, async (req, res, next) => {
    try {
        const { id: currenUserId } = req.user;
        const { id } = req.params;
        const currentUserIndex = db.data.users.findIndex(user => user.id === currenUserId);

        // 1st WAY
        const updatedFavorites = db.data.users[currentUserIndex].favorites.filter(movie => movie !== +id);
        db.data.users[currentUserIndex].favorites = updatedFavorites;

        // 2nd WAY
        // const movieToRemoveIndex = db.data.users[currentUserIndex].favorites.findIndex(movie => movie === +id);
        // if(movieToRemoveIndex > -1) {
        //     db.data.users[currentUserIndex].favorites.splice(movieToRemoveIndex, 1);
        // }

        await db.write();

        return res.status(200).json({ message: "Removed from favorites" });
    } catch(e) {
        next(e);
    }
});


export { router as FavoritesRoute };