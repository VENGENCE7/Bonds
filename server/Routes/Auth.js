import express from "express";
import { validate } from "express-validation";

import AuthController from "../Controllers/Auth";
import authLimiter from "../Middleware/AuthLimiter";
import AuthValidations from "../Validations/Auth";

const auth_Router = express.Router();
const auth_Controller = new AuthController();

auth_Router.post(
  "/signup",
  authLimiter,
  validate(AuthValidations.SignUpUser),
  auth_Controller.SignUpUser
);
auth_Router.post(
  "/login",
  authLimiter,
  validate(AuthValidations.LogInUser),
  auth_Controller.LogInUser
);
auth_Router.get("/refresh", auth_Controller.RefreshToken);
auth_Router.post("/logout", auth_Controller.LogOutUser);

export default auth_Router;
