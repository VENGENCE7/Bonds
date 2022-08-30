import UserService from "../Services/User";

const user_Service = new UserService();

export default class UserController {
  // Create User
  async CreateUser(req, res, next) {
    //call Service
    let user = req.body;
    const result = await user_Service.CreateUser(user);
    if (result) {
      res.status(201).json({ message: "User Saved", data: result });
    } else {
      res.send("ERROR");
    }
  }

  // Find User By Id
  async FindUserById(req, res, next) {
    //call Service
    let id = req.query.id;
    const result = await user_Service.FindUserById(id);
    if (result) {
      res.status(201).json({ message: "User Found", data: result });
    } else {
      res.send("ERROR");
    }
  }

  // Delete User By Id
  async DeleteUserById(req, res, next) {
    //call Service
    let id = req.query.id;
    const result = await user_Service.DeleteUserById(id);
    if (result) {
      res.send({ message: "User Deleted", data: result });
    } else {
      res.send("ERROR");
    }
  }

  // Update User
  async UpdateUser(req, res, next) {
    //call Service
    let id = req.query.id;
    const user = req.body;
    const result = await user_Service.UpdateUser(id, user, { new: true });
    if (result) {
      res.send({ message: "User Updated", data: result });
    } else {
      res.send("ERROR");
    }
  }
}
