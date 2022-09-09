import Data from "../Models/Data";

export default class DataService {
  //  @FIND_ALL_DATA
  async getData() {
    // displays all users in the database USER
    const result = await Data.find();
    if (result && result !== null) {
      return result;
    } else {
      throw new Error("noDataFound");
    }
  }

  //  @ADD_DATA
  async addData(data) {
    // adding User Data
    const addData = new Data(data);
    const result = await addData.save();
    if (result && result !== null) {
      return result;
    } else {
      throw new Error("unabletoAddData");
    }
  }

  //  @UPDATE_DATA
  async updateData(dataID, updatedDATA) {
    // find data by id and updates data
    const result = await Data.findByIdAndUpdate(dataID, updatedDATA);
    if (result && result !== null) {
      return result;
    } else if (result === null) {
      throw new Error("invalidID");
    } else {
      throw new Error("idError");
    }
  }

  //  @FIND_DATA_BY_ID
  async FindDataById(dataID) {
    // find Data by id
    const result = await Data.findById(dataID);
    if (result && result !== null) {
      return result;
    } else if (result === null) {
      throw new Error("invalidID");
    } else {
      throw new Error("idError");
    }
  }

  //  @DELETE_DATA
  async DeleteDataById(dataID) {
    // find Data by id and delete Data
    const result = await Data.findByIdAndDelete(dataID);
    if (result && result !== null) {
      return result;
    } else if (result === null) {
      throw new Error("invalidID");
    } else {
      throw new Error("idError");
    }
  }
}
