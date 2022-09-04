import User from "../Models/Users";
import bcrypt from "bcryptjs";

export default class UserService {
  //  ADD USER
  async SignUpUser(user) {
    // check for existing user
    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      throw new Error("userAllreadyExists");
    } else {
      // creating new User
      const addUser = new User(user);
      addUser.password = bcrypt.hashSync(addUser.password);
      const result = await addUser.save();
      if (result) {
        return result;
      } else {
        throw new Error("unabletoSignUp");
      }
    }
  }
  // LOG IN USER
  async LogInUser(user) {
    // check for existing user
    const userExist = await User.findOne({ email: user.email });
    console.log(userExist);
    if (!userExist) {
      throw new Error("notFound");
    } else {
      // check password
      const isPasswordCorrect = bcrypt.compareSync(
        user.password,
        userExist.password
      );
      if (isPasswordCorrect) {
        const result = { message: "LogIn Successful" };
        return result;
      } else {
        throw new Error("incorrectPassword");
      }
    }
  }
  //  FIND ALL USERS
  async FindAllUsers() {
    const result = await User.find();
    if (result && result.length > 0) {
      return result;
    } else {
      throw new Error("databaseEmpty");
    }
  }
  //  FIND USER BY ID
  async FindUserById(userID) {
    const result = await User.findById(userID);
    if (result) {
      return result;
    } else {
      throw new Error("notFound");
    }
  }
  //  Delete USER BY ID
  async DeleteUserById(userID) {
    const result = await User.findByIdAndDelete(userID);
    if (result && result.length > 0) {
      return result;
    } else {
      throw new Error("notFound");
    }
  }
  //  Update USER
  async UpdateUser(userID, updatedDATA) {
    updatedDATA.password ? bcrypt.hashSync(updatedDATA.password) : {};
    const result = await User.findByIdAndUpdate(userID, updatedDATA);
    if (result && result.length > 0) {
      return result;
    } else {
      throw new Error("notFound");
    }
  }
}
