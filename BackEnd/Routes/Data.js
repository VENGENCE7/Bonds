import express from "express";
import { validate } from "express-validation";

// Import Data Controller
import DataController from "../Controllers/Data";
//  Import Validation
import DataValidations from "../Validations/Data";

const data_Router = express.Router();
const data_Controller = new DataController();

data_Router
  .get("/allData", data_Controller.allData)
  .get("/find", data_Controller.findDataById)
  .delete("/delete", data_Controller.deleteDataById)
  .post(
    "/add",
    validate(DataValidations.addOrUpdateData),
    data_Controller.addData
  )
  .put(
    "/update",
    validate(DataValidations.addOrUpdateData),
    data_Controller.updateData
  );

export default data_Router;
