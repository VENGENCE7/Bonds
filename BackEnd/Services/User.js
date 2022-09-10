import User from "../Models/Users";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const saltRounds = 10;

export default class UserService {
  //  @FIND_ALL_USERS
  async FindAllUsers() {
    // displays all users in the database USER
    const result = await User.find();
    if (result && result.length > 0) {
      return result;
    } else {
      throw new Error("databaseEmpty");
    }
  }

  //  @FIND_USER_BY_ID
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
          as: "MyData",
        },
      },
      {
        // feild is unwinded from an array and shown as ana object
        $unwind: "$MyData",
      },
    ]);

    if (result[0] && result[0] !== null) {
      return result[0];
    } else if (result === null) {
      throw new Error("notFound");
    } else {
      throw new Error("invalidID");
    }
  }

  //  @DELETE_USER_BY_ID
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

  //  @UPDATE_USER
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
