import 'dotenv/config';
import express from 'express';
const app = express();
import cors from 'cors';
import session from 'express-session';

app.use(express.json());

import helmet from 'helmet';
app.use(helmet());

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);
import { rateLimit } from 'express-rate-limit';

import loginRouter from './routers/loginRouter.js';
app.use('/api', loginRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}.`);
});
