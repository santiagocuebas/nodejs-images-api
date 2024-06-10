import * as dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT || '4200';
export const ORIGIN = process.env.ORIGIN;
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;
export const MONGO_URI = process.env.MONGO_URI;
