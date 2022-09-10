import UserService from "../Services/User";
import { UserError } from "../ErrorMessages/User";

const user_Service = new UserService();

export default class UserController {
  // @desc Find All Users
  // @route GET /user/allusers
  // @access Private
  async FindAllUsers(req, res, next) {
    //call Service
    try {
      const result = await user_Service.FindAllUsers();
      res.status(200).json({ message: "Account List", Accounts: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // @desc Find User By Id
  // @route GET /user/search
  // @access Public
  async FindUserById(req, res, next) {
    //call Service
    try {
      const id = req.query.id;
      const result = await user_Service.FindUserById(id);
      res.status(200).json({ message: "Account Found", data: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // @desc Delete User By Id
  // @route DELETE /user/delete
  // @access Private
  async DeleteUserById(req, res, next) {
    //call Service
    try {
      const id = req.query.id;
      const result = await user_Service.DeleteUserById(id);
      res.status(200).json({ message: "Account Deleted", data: result });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }

  // @desc Update User
  // @route PUT /user/update
  // @access Private
  async UpdateUser(req, res, next) {
    //call Service
    try {
      const id = req.query.id;
      const user = req.body;
      const result = await user_Service.UpdateUser(id, user, { new: true });
      res.status(200).json({
        message: "Account Updated",
        old_data: result,
        updated_data: user,
      });
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
  }
}
