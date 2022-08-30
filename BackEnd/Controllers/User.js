import UserService from "../Services/User";

const user_Service = new UserService();

export default class UserController {
  async CreateUser(req, res, next) {
    //call Service
    let user = req.body;
    const result = await user_Service.CreateUser(user);
    if (result) {
      res.status(200).json({ message:'new record is saved', data: user });
    } else {
      res.send("ERROR");
    }
  }
}
