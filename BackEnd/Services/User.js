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
    if (!userExist) {
      throw new Error("notFound");
    } else {
      // verifies password and confirms
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
    // displays all users in the database USER
    const result = await User.find();
    if (result && result.length > 0) {
      return result;
    } else {
      throw new Error("databaseEmpty");
    }
  }
  //  FIND USER BY ID
  async FindUserById(userID) {
    // find user by id
    const result = await User.findById(userID);
    if (result) {
      return result;
    } else if (result === null) {
      throw new Error("notFound");
    } else {
      throw new Error("invalidID");
    }
  }
  //  Delete USER BY ID
  async DeleteUserById(userID) {
    // find user by id and delete user
    const result = await User.findByIdAndDelete(userID);
    if (result) {
      return result;
    } else if (result === null) {
      throw new Error("notFound");
    } else {
      throw new Error("invalidID");
    }
  }
  //  Update USER
  async UpdateUser(userID, updatedDATA) {
    // updates passwords
    updatedDATA.password ? bcrypt.hashSync(updatedDATA.password) : {};
    // find user b id and updates data
    const result = await User.findByIdAndUpdate(userID, updatedDATA);
    if (result) {
      return result;
    } else if (result === null) {
      throw new Error("notFound");
    } else {
      throw new Error("invalidID");
    }
  }
}
