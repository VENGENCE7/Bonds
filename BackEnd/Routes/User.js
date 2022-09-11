import express from "express";
import { validate } from "express-validation";

// Import User Controller
import UserController from "../Controllers/User";

//  Import Validation
import UserValidations from "../Validations/User";

// import Authenticator
import Authenticate from "../Middleware/Authenticator";

const user_Router = express.Router();
const user_Controller = new UserController();

user_Router.get("/allusers", user_Controller.FindAllUsers);
user_Router.get("/search", user_Controller.FindUserById);
user_Router.get("/data", Authenticate, user_Controller.FindUserDataByUserId);
user_Router.delete("/delete", Authenticate, user_Controller.DeleteUserById);
user_Router.put(
  "/update",
  validate(UserValidations.UpdateUser),
  Authenticate,
  user_Controller.UpdateUser
);

export default user_Router;
