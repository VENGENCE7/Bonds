// loadEnv.js
import dotenv from "dotenv";

dotenv.config();

export const secret = {
  access: process.env.ACCESS_TOKEN_SECRET,
  refresh: process.env.REFRESH_TOKEN_SECRET,
};
