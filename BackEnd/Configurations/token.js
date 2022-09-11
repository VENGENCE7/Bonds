// loadEnv.js
import dotenv from "dotenv";

dotenv.config();

export const tokenconfig = {
  access: process.env.ACCESS_TOKEN_SECRET,
  refresh: process.env.REFRESH_TOKEN_SECRET,
  refreshtokenlife: process.env.REFRESH_TOKEN_LIFE,
  acesstokenlife: process.env.ACCESS_TOKEN_LIFE,
  cookielife: process.env.COOKIE_LIFE,
};
