export const AuthError = {
  notFound: {
    status: 404,
    errormessage: "User Not In Database, Unauthorzed access",
  },
  unabletoSignUp: {
    status: 404,
    errormessage: "Unable to Sign Up account, **Check Password**",
  },
  userAllreadyExists: {
    status: 409,
    errormessage: "User Allready Exists!!, ** Login Instead **",
  },
  incorrectPassword: {
    status: 400,
    errormessage: "Incorrect Password",
  },
  incompleteFeilds: {
    status: 400,
    errormessage: " All feilds required !!",
  },
  tokenCreationFailed: {
    status: 500,
    errormessage: "Token generation failed , Try again",
  },
  Forbidden: {
    status: 403,
    errormessage: "Forbidden Access",
  },
  unauthorized: {
    status: 401,
    errormessage: "Unauthorized Access, User Not Found, Login Again",
  },
};

// :{
//   status: ,
//   errormessage: "",
// }
