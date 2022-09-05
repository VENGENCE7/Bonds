import DataService from "../Services/Data";
import { DataError } from "../ErrorMessages/Data";

const data_Service = new DataService();

export default class DataController {
  // get All Data
  async getData(req, res, next) {
    //call Service
    try {
      const result = await data_Service.getData();
      res.status(200).json({ message: "Data Found", data: result });
    } catch (err) {
      next({
        status: DataError[err.message]?.status,
        message: DataError[err.message]?.errormessage,
      });
    }
  }

  // Add Data
  async addData(req, res, next) {
    //call Service
    try {
      let data = req.body;
      const result = await data_Service.addData(data);
      res.status(201).json({ message: "Data Added", data: result });
    } catch (err) {
      next({
        status: DataError[err.message]?.status,
        message: DataError[err.message]?.errormessage,
      });
    }
  }

  // Update Data
  async updateData(req, res, next) {
    //call Service
    try {
      let id = req.query.id;
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

  // Find Data By Id
  async findDataById(req, res, next) {
    //call Service
    try {
      let id = req.query.id;
      const result = await data_Service.FindDataById(id);
      res.status(200).json({ message: "data Found", data: result });
    } catch (err) {
      next({
        status: DataError[err.message]?.status,
        message: DataError[err.message]?.errormessage,
      });
    }
  }

  // Delete Data By Id
  async deleteDataById(req, res, next) {
    //call Service
    try {
      let id = req.query.id;
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
