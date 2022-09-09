import DataService from "../Services/Data";
import UserService from "../Services/User";
import { DataError } from "../ErrorMessages/Data";
import { UserError } from "../ErrorMessages/User";

const data_Service = new DataService();
const user_Service = new UserService();

export default class DataController {
  // @desc Get_All_Data
  // @route /data/allData
  // @access Private
  async allData(req, res, next) {
    //call Service
    try {
      const result = await data_Service.allData();
      res.status(200).json({ message: "Data Found", data: result });
    } catch (err) {
      next({
        status: DataError[err.message]?.status,
        message: DataError[err.message]?.errormessage,
      });
    }
  }

  // @desc Add_Data
  // @route /data/add
  // @access Private
  async addData(req, res, next) {
    //call Service
    const data = req.body;
    let existingUser;
    try {
      // check if the userid mentioned is available in database-User
      existingUser = await user_Service.FindUserById(data.userId);
    } catch (err) {
      next({
        status: UserError[err.message]?.status,
        message: UserError[err.message]?.errormessage,
      });
    }
    // if id not valid
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "No User Found, **User ID not in database**" });
    } else {
      // If id is valid-proceeds to save data
      try {
        const result = await data_Service.addData(data);
        // =========== trying
        res.status(201).json({ message: "Data Added", data: result });
      } catch (err) {
        console.log(err);
        next({
          status: DataError[err.message]?.status,
          message: DataError[err.message]?.errormessage,
        });
      }
    }
  }

  // @desc Update_Data
  // @route /data/update
  // @access Private
  async updateData(req, res, next) {
    //call Service
    try {
      const id = req.query.id;
      const data = req.body;
      const result = await data_Service.updateData(id, data, { new: true });
      res.status(200).json({
        message: "Data Updated",
        old_data: result,
        updated_data: data,
      });
    } catch (err) {
      next({
        status: DataError[err.message]?.status,
        message: DataError[err.message]?.errormessage,
      });
    }
  }

  // @desc Find_Data_By_Id
  // @route /data/find
  // @access Private
  async findDataById(req, res, next) {
    //call Service
    try {
      const id = req.query.id;
      const result = await data_Service.FindDataById(id);
      res.status(200).json({ message: "data Found", data: result });
    } catch (err) {
      next({
        status: DataError[err.message]?.status,
        message: DataError[err.message]?.errormessage,
      });
    }
  }

  // @desc Delete_Data_By_Id
  // @route /data/delete
  // @access Private
  async deleteDataById(req, res, next) {
    //call Service
    try {
      const id = req.query.id;
      const result = await data_Service.DeleteDataById(id);
      res.send({ message: "Data Deleted", data: result });
    } catch (err) {
      next({
        status: DataError[err.message]?.status,
        message: DataError[err.message]?.errormessage,
      });
    }
  }
}
