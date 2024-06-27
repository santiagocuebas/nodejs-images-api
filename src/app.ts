import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { ORIGIN } from './config.js';
import routes from './routes/index.js';

// Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const storage = multer.memoryStorage();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
	origin: ORIGIN,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTION'],
	allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
	credentials: true
}));

// Uploads Folder
app.use(multer({ dest: '../uploads', storage }).single('image'));
app.use('/uploads', express.static(join(__dirname, '../uploads')));

// Routes
app.use('/api', routes);

export default app;
