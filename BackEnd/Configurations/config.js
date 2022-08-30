// loadEnv.js
import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  connection_url: process.env.MONGODB_CONNECTION_URL,
};
