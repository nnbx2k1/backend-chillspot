import express from 'express';
import cors from 'cors';

import { emailsRoutes } from './routes/emails.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

emailsRoutes(app);

export { app };