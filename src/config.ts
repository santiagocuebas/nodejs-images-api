import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || '4200';

export const ORIGIN = process.env.ORIGIN;

export const MONGO_URI = process.env.MONGO_URI as string;
