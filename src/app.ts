import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import { cloudinaryConfig } from './cloudinary.js';
import { ORIGIN } from './config.js';
import routes from './routes/index.js';

// Initializations
const app = express();
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
app.use('*', cloudinaryConfig);

// Uploads Folder
app.use(multer({ storage }).single('image'));

// Routes
app.use('/api', routes);

export default app;
