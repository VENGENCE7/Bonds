import rateLimit from "express-rate-limit";
import { authconfig } from "../Configurations/auth";

const authLimiter = rateLimit({
  windowMs: authconfig.time * 60 * 1000, // 1 minute
  max: authconfig.limit, // Limit each IP to 5 auth requests per `window` per 1 minute
  message:
    "Too many authentication requests from this IP, please try again after 1 minute",
  handler: function (req, res, next) {
    return res.status(429).json({
      error:
        "You sent too many requests. Please wait a while then try again after 1 minute",
    });
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: true, // Disable the `X-RateLimit-*` headers
});

export default authLimiter;
