import User from "../Models/Users";
import bcrypt from "bcryptjs";

export default class UserService {
  //  ADD USER
  async SignupUser(user) {
    const addUser = new User(user);
    addUser.password = bcrypt.hashSync(addUser.password);
    return await addUser.save();
  }
  //  FIND USER BY ID
  async FindUserById(userID) {
    return await User.findById(userID);
  }
  //  Delete USER BY ID
  async DeleteUserById(userID) {
    return await User.findByIdAndDelete(userID);
  }
  //  Update USER
  async UpdateUser(userID, updatedDATA) {
    updatedDATA.password ? bcrypt.hashSync(updatedDATA.password) : {};
    return await User.findByIdAndUpdate(userID, updatedDATA);
  }
}
