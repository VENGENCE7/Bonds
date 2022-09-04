import UserService from "../Services/User";
import { UserError } from "../ErrorMessages/User";

const user_Service = new UserService();

export default class UserController {
  // Signup User
  async SignUpUser(req, res, next) {
    //call Service
    try {
      let user = req.body;
      const result = await user_Service.SignUpUser(user);
      res.status(201).json({ message: "Account Created", data: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // Login user
  async LogInUser(req, res, next) {
    //call Service
    try {
      let user = req.body;
      const result = await user_Service.LogInUser(user);
      res.status(200).json({ message: "Account Logged IN", data: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // Find All Users
  async FindAllUsers(req, res, next) {
    //call Service
    try {
      const result = await user_Service.FindAllUsers();
      res.send({ message: "Account List", Accounts: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // Find User By Id
  async FindUserById(req, res, next) {
    //call Service
    try {
      let id = req.query.id;
      const result = await user_Service.FindUserById(id);
      res.send({ message: "Account Found", data: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // Delete User By Id
  async DeleteUserById(req, res, next) {
    //call Service
    try {
      let id = req.query.id;
      const result = await user_Service.DeleteUserById(id);
      res.send({ message: "Account Deleted", data: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // Update User
  async UpdateUser(req, res, next) {
    //call Service
    try {
      let id = req.query.id;
      const user = req.body;
      const result = await user_Service.UpdateUser(id, user, { new: true });
      res.send({ message: "Account Updated", old_data: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }
}
