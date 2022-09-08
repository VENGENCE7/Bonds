import User from "../Models/Users";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const saltRounds = 10;

export default class UserService {
  //  @ADD USER
  async SignUpUser(user) {
    // check for existing user
    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      throw new Error("userAllreadyExists");
    } else {
      // creating new User
      const addUser = new User(user);
      addUser.password = bcrypt.hashSync(addUser.password, saltRounds);
      const result = await addUser.save();
      if (result && result !== null) {
        return result;
      } else {
        throw new Error("unabletoSignUp");
      }
    }
  }

  // @LOG IN USER
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

  //  @FIND ALL USERS
  async FindAllUsers() {
    // displays all users in the database USER
    const result = await User.find();
    if (result && result.length > 0) {
      return result;
    } else {
      throw new Error("databaseEmpty");
    }
  }

  //  @FIND USER BY ID
  async FindUserById(userID) {
    // find user by id
    const result = await User.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(userID) },
      },
      {
        $lookup: {
          // database that is being matched with  db2 [DATA]
          from: "datas",
          // feild of db1 [USER]
          localField: "_id",
          // feild of db2 [DATA]
          foreignField: "userId",
          // feild displayed as
          as: "YourData",
        },
      },
    ]);

    if (result && result !== null) {
      return result;
    } else if (result === null) {
      throw new Error("notFound");
    } else {
      throw new Error("invalidID");
    }
  }

  //  @Delete USER BY ID
  async DeleteUserById(userID) {
    // find user by id and delete user
    const result = await User.findByIdAndDelete(userID);
    if (result && result !== null) {
      return result;
    } else if (result === null) {
      throw new Error("notFound");
    } else {
      throw new Error("invalidID");
    }
  }

  //  @Update USER
  async UpdateUser(userID, updatedDATA) {
    // check for id being allready being used by another user
    const userExist = await User.findOne({ email: updatedDATA.email });
    if (userExist) {
      throw new Error("mailAllreadyInUse");
    } else {
      // updates passwords
      updatedDATA.password
        ? bcrypt.hashSync(updatedDATA.password, saltRounds)
        : {};
      // find user by id and updates data
      const result = await User.findByIdAndUpdate(userID, updatedDATA);
      if (result && result !== null) {
        return result;
      } else if (result === null) {
        throw new Error("notFound");
      } else {
        throw new Error("invalidID");
      }
    }
  }
}
