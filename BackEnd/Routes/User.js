import express from "express";

// Import User Controller
import UserController from "../Controllers/User";

const user_Router = express.Router();
const user_Controller = new UserController();

user_Router.post("/create", user_Controller.CreateUser);

export default user_Router;
