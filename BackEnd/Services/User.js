import User from "../Models/Users";

export default class UserService {
  //  ADD USER
  async CreateUser(user) {
    const addUser = new User(user);
    return await addUser.save();
    
  }
}
