import express from "express";
import { validate } from "express-validation";

// Import Data Controller
import DataController from "../Controllers/Data";
//  Import Validation
import DataValidations from "../Validations/Data";

const data_Router = express.Router();
const data_Controller = new DataController();

data_Router.get("/get", data_Controller.getData);
data_Router.get("/find", data_Controller.findDataById);
data_Router.delete("/delete", data_Controller.deleteDataById);
data_Router.post(
  "/add",
  validate(DataValidations.addOrUpdateData),
  data_Controller.addData
);
data_Router.put(
  "/update",
  validate(DataValidations.addOrUpdateData),
  data_Controller.updateData
);

export default data_Router;
