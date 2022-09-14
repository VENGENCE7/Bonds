import User from "../Models/Users";
import bcrypt from "bcryptjs";
import TokenService from "./Token";

const saltRounds = 10;
const token_Service = new TokenService();

export default class AuthService {
  //  @SIGNUP_USER
  async SignUpUser(user) {
    // check for existing user
    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      throw new Error("userAllreadyExists");
    } else {
      // creating new User
      const addUser = new User(user);
      addUser.password = bcrypt.hashSync(addUser.password, saltRounds);
      const saved = await addUser.save();
      if (saved && saved !== null) {
        // service to create access token
        const token = token_Service.CreateToken(saved);
        if ((token && token !== null) || result !== {}) {
          const result = {
            message: "Account Successfully Created !!",
            data: saved,
            token: token,
          };
          return result;
        } else {
          throw new Error("tokenCreationFailed");
        }
        // return saved;
      } else {
        throw new Error("unabletoSignUp");
      }
    }
  }

  // @LOGIN_USER
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
        // service to create access token
        const result = token_Service.CreateToken(userExist);
        if ((result && result !== null) || result !== {}) {
          return result;
        } else {
          throw new Error("tokenCreationFailed");
        }
      } else {
        throw new Error("incorrectPassword");
      }
    }
  }
}
