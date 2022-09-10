import jwt from "jsonwebtoken";
import { tokenconfig } from "../Configurations/token";
import User from "../Models/Users";

export default class TokenService {
  // creating access and refresh token
  CreateToken(user) {
    const accessToken = jwt.sign(
      {
        UserInfo: { id: user._id, email: user.email },
      },
      tokenconfig.access,
      { expiresIn: "30s" }
    );

    const refreshToken = jwt.sign({ email: user.email }, tokenconfig.refresh, {
      expiresIn: "7d",
    });

    const result = { aToken: accessToken, rToken: refreshToken };
    return result;
  }

  // checking for refresh token if valid else issuing another one
  async RefreshToken(token) {
    const refreshToken = token;
    let accessToken;
    const result = await jwt.verify(
      refreshToken,
      tokenconfig.refresh,
      async (err, decoded) => {
        if (err) {
          throw new Error("Forbidden");
        }
        // looking for user in database retrieved
        const userFound = await User.findOne({ email: decoded.email });
        if (!userFound) throw new Error("unauthorized");
        // creating new access token
        accessToken = jwt.sign(
          {
            UserInfo: { id: userFound._id, email: userFound.email },
          },
          tokenconfig.access,
          { expiresIn: "30s" }
        );
        return { accessToken };
      }
    );

    return result;
  }
}
