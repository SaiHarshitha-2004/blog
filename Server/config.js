
import dotenv from 'dotenv';

dotenv.config();

export const USERNAME = process.env.VITE_MONGODB_USERNAME;
export const PASSWORD = process.env.VITE_MONGODB_PASSWORD;
export const GOOGLE_ID = process.env.VITE_GOOGLE_ENGINE_ID ;
export const ENVPORT = process.env.VITE_PORT;
export const GOOGLE_API_KEY = process.env.VITE_GOOGLE_API_KEY ;