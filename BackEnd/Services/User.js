import User from "../Models/Users";

export default class UserService {
  //  ADD USER
  async CreateUser(user) {
    const addUser = new User(user);
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
  async UpdateUser(userID,updatedDATA) {
    return await User.findByIdAndUpdate(userID,updatedDATA);
  }
}
