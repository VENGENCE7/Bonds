export const UserError = {
  notFound: {
    status: 404,
    errormessage: "User Not In Database",
  },
  databaseEmpty: {
    status: 404,
    errormessage: "Database Empty",
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
