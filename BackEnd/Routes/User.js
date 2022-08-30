import express from "express";
import { validate } from "express-validation";

// Import User Controller
import UserController from "../Controllers/User";
//  Import Validation
import UserValidations from "../Validations/User";

const user_Router = express.Router();
const user_Controller = new UserController();

user_Router.post(
  "/create",
  validate(UserValidations.CreateOrUpdateUser),
  user_Controller.CreateUser
);
user_Router.get("/findbyid", user_Controller.FindUserById);
user_Router.delete("/delete", user_Controller.DeleteUserById);
user_Router.put(
  "/update",
  validate(UserValidations.CreateOrUpdateUser),
  user_Controller.UpdateUser
);

export default user_Router;
