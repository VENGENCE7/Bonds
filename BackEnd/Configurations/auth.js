// loadEnv.js
import dotenv from "dotenv";

dotenv.config();

export const authconfig = {
  limit: process.env.AUTH_REQUEST_LIMIT,
  time: process.env.AUTH_REQUEST_TIME,
};
