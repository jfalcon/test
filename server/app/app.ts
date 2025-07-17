import express from 'express';
import { createRequire } from "module";
import { registerRoutes } from '@/routes';

// cors hasn't been updated to ESM
const require = createRequire(import.meta.url);
const cors = require('cors');

const app = express();

// Use CORS middleware with specified options
// app.use(cors(corsOptions));

// first add extra middleware
app.use(express.json()); // replaces body-parser
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// then register all routes
registerRoutes(app);

export default app;
