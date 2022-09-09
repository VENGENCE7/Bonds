import Express from "express";
const root_Router = Express.Router();

root_Router.get("/", (req, res) => {
  res.send("Welcome to Bonds !!");
});

export default root_Router;
