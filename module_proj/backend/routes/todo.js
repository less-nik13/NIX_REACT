import { Router } from "express";
import { nanoid } from "nanoid";

import db from '../db/dbConfig.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import ApiError from "../exceptions/api-errors.js";

const router = Router();

router.get('/colors', (req, res) => {
    const colors = db.data.colors;
    return res.status(200).json({ colors });
});

router.get('/backgrounds', (req, res) => {
    const backgrounds = db.data.backgrounds;
    return res.status(200).json({ backgrounds });
});

router.get("/", authMiddleware, async (req, res) => {
    const user = req.user;
    const userTodos = db.data.todos.filter((todo) => todo.userId === user.id);
    const sortedTodos = [ ...userTodos.filter(todo => !todo.completed), ...userTodos.filter(todo => todo.completed) ];
    res.status(200).json({ todos: sortedTodos });
});

router.post("/", authMiddleware, async (req, res, next) => {
    try {
        const { id } = req.user;
        const { text, color, backgroundColor } = req.body;
        const generatedId = nanoid(20);

        const newTodo = {
            id: generatedId,
            text,
            completed: false,
            color: color ?? "#fff",
            backgroundColor: backgroundColor ?? "#000",
            userId: id
        };

        db.data.todos = [ newTodo, ...db.data.todos, ];

        await db.write();

        res.status(200).json({ message: "Todo is added successfully", todo: newTodo });
    } catch(e) {
        next(e);
    }
});

// router.get("/:id", authMiddleware, async (req, res, next) => {
//     try {
//         const { id: userId } = req.user;
//         const { id } = req.params;
//         const currentTodo = db.data.todos.find(todo => todo.id === id);
//
//         if(userId !== currentTodo.userId) {
//             throw ApiError.BadRequest('This todo don`t belong to you');
//         }
//
//         res.status(200).json({ message: `Todo ${currentTodo.id} selected`, todo: currentTodo });
//     } catch(e) {
//         next(e);
//     }
// });

router.put("/:id", authMiddleware, async (req, res, next) => {
    try {
        const { id: userId } = req.user;
        const { id } = req.params;
        const body = req.body;
        const currentTodo = db.data.todos.find(todo => todo.id === id);
        const index = db.data.todos.findIndex(todo => todo.id === id);


        if(userId !== currentTodo.userId) {
            throw ApiError.BadRequest('This todo don`t belong to you');
        }

        const updatedTodo = {
            ...currentTodo,
            ...body
        };

        if(index > -1) {
            db.data.todos[index] = updatedTodo;
        }

        await db.write();
        res.status(200).json({ message: "Todo updated successfully", updatedTodo });
    } catch(e) {
        next(e);
    }
});

router.delete('/:id', authMiddleware, async (req, res, next) => {
    try {
        const { id: userId } = req.user;
        const { id } = req.params;
        const { todos } = db.data;
        const currentTodo = todos.find(todo => todo.id === id);
        const index = todos.findIndex(todo => todo.id === id);

        console.log(userId, id, currentTodo, index);

        if(userId !== currentTodo.userId) {
            throw ApiError.BadRequest('This todo don`t belong to you');
        }

        if(index > -1) {
            db.data.todos.splice(index, 1);
        }

        await db.write();

        return res.status(200).json({ message: "Todo deleted successfully" });
    } catch(e) {
        next(e);
    }
});


export { router as TodoRoute };