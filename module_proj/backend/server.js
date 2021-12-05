import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { FavoritesRoute } from './routes/favorites.js';
import { AuthRoute } from "./routes/auth.js";
import errorMiddleware from './middlewares/error-middleware.js';

const app = express();

const corsOptions = {
    exposedHeaders: 'Authorization',
};

app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors(corsOptions));

app.use('/api/auth', AuthRoute);
app.use('/api/favorites', FavoritesRoute);
app.use(errorMiddleware);

const PORT = 5000;

async function start() {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start();