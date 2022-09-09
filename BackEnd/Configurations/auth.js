// loadEnv.js
import dotenv from "dotenv";

dotenv.config();

export const authconfig = {
  access: process.env.ACCESS_TOKEN_SECRET,
  refresh: process.env.REFRESH_TOKEN_SECRET,
  limit: process.env.AUTH_REQUEST_LIMIT,
  time: process.env.AUTH_REQUEST_TIME,
};
