import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://avijit:z9JWKszMVbDCOxpg@cluster0.urxlpae.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 4000;

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
