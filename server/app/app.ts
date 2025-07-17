import express from 'express';
import { registerRoutes } from '@/routes';

const app = express();

// first add extra middleware
app.use(express.json()); // replaces body-parser
app.use(express.urlencoded({ extended: true }));

// then register all routes
registerRoutes(app);

export default app;
