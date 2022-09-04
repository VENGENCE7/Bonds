import express from "express";
import { validate } from "express-validation";

// Import User Controller
import UserController from "../Controllers/User";
//  Import Validation
import UserValidations from "../Validations/User";

const user_Router = express.Router();
const user_Controller = new UserController();

user_Router.get("/allusers", user_Controller.FindAllUsers);
user_Router.get("/search", user_Controller.FindUserById);
user_Router.delete("/delete", user_Controller.DeleteUserById);
user_Router.post(
  "/signup",
  validate(UserValidations.SignUpUser),
  user_Controller.SignUpUser
);
user_Router.post(
  "/login",
  validate(UserValidations.LogInUser),
  user_Controller.LogInUser
);
user_Router.put(
  "/update",
  validate(UserValidations.UpdateUser),
  user_Controller.UpdateUser
);

export default user_Router;
