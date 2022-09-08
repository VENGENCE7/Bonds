export const UserError = {
  notFound: {
    status: 404,
    errormessage: "User Not In Database",
  },
  databaseEmpty: {
    status: 404,
    errormessage: "Database Empty",
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
  mailAllreadyInUse: {
    status: 409,
    errormessage: "Mail Id allready used by another User",
  },
  invalidID: {
    status: 400,
    errormessage: "ID not Valid",
  },
};

// :{
//   status: ,
//   errormessage: "",
// }
