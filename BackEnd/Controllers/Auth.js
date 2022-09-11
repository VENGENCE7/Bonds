import AuthService from "../Services/Auth";
import TokenService from "../Services/Token";
import { AuthError } from "../ErrorMessages/Auth";
import { tokenconfig } from "../Configurations/token";

const auth_Service = new AuthService();
const token_Service = new TokenService();

export default class AuthController {
  // @desc Signup User
  // @route POST /auth/signup
  // @access Public
  async SignUpUser(req, res, next) {
    //call Service
    try {
      const user = req.body;
      const result = await auth_Service.SignUpUser(user);

      // creating secure cookie with refresh token
      res.cookie("bonds_jwt", result.token.rToken, {
        // accessible by web server only
        httpOnly: true,
        // https
        secure: true,
        // cross site cookie
        sameSite: "None",
        // cookie expiry:set to 7days
        maxAge: parseInt(tokenconfig.cookielife, 10),
      });

      res.status(201).json({
        message: result.message,
        data: result.data,
        accessToken: result.token.aToken,
      });
    } catch (err) {
      next({
        status: AuthError[err.message]?.status,
        message: AuthError[err.message]?.errormessage,
      });
    }
  }

  // @desc Login user
  // @route POST /auth/login
  // @access Public
  async LogInUser(req, res, next) {
    //call Service
    try {
      const user = req.body;
      const result = await auth_Service.LogInUser(user);

      // creating secure cookie with refresh token
      res.cookie("bonds_jwt", result.rToken, {
        // accessible by web server only
        httpOnly: true,
        // https
        secure: true,
        // cross site cookie
        sameSite: "None",
        // cookie expiry:set to 7days
        maxAge: parseInt(tokenconfig.cookielife, 10),
      });
      // sending access token
      res.status(200).json({ accessToken: result.aToken });
    } catch (err) {
      next({
        status: AuthError[err.message]?.status,
        message: AuthError[err.message]?.errormessage,
      });
    }
  }

  // @desc Refresh
  // @route GET /auth/refresh
  // @access Public - coz access token has expired
  async RefreshToken(req, res, next) {
    const cookie = req.cookies;
    // checks for refresh token if available
    if (!cookie?.bonds_jwt)
      return res.status(401).json({ message: "Unauthorized , Log in again " });
    try {
      const refreshAccessToken = await token_Service.RefreshToken(
        cookie.bonds_jwt
      );
      // sending access token
      res.status(200).json(refreshAccessToken);
    } catch (err) {
      next({
        status: AuthError[err.message]?.status,
        message: AuthError[err.message]?.errormessage,
      });
    }
  }

  // @desc Logout user
  // @route POST /auth/logout
  // @access Public - to clear cookies if exists
  async LogOutUser(req, res, next) {
    const cookie = req.cookies;
    // checks for refresh token if available
    // 204 =: Request successful but no COntent
    if (!cookie?.bonds_jwt) return res.sendStatus(204);
    res.clearCookie("bonds_jwt", {
      // accessible by web server only
      httpOnly: true,
      // https
      secure: true,
      // cross site cookie
      sameSite: "None",
    });
    res.json({ message: "Cookie Cleared :)" });
  }
}
