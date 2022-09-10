import jwt from "jsonwebtoken";
import { tokenconfig } from "../Configurations/token";

export default function Authenticate(req, res, next) {
  // looking at request headers for authorization/Authorization
  const authHeader = req.headers.authorization || req.headers.Authorization;
  //   verifying token existence
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized, Log In to your account" });
  }

  //   getting token from header
  const token = authHeader.split(" ")[1];

  //   Verifying for token valididty
  jwt.verify(token, tokenconfig.access, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden , Authentication failed" });
    req.id = decoded.UserInfo.id;
    req.email = decoded.UserInfo.email;
    next(); 
  });
}
