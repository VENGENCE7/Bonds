// ================================= Libraries Import

import express from "express";
import mongoose from "mongoose";

// ================================= Files/modules Import

import { config } from "./Configurations/config";

// ================================= App Config
const app = express();

app.use(express.json());

// ================================= MiddleWare

app.use("/", (req, res, next) => {
  res.status(200).send("Expressed success");
});

// ================================= DB CONFIG

// ================================= API ENDPOINTS

mongoose
  .connect(config.connection_url)
  .then(() => console.log("Database connected Successfully !!! "))
  .then(() =>
    app.listen(config.port, () =>
      console.log(`Listening on PORT ${config.port}`)
    )
  )
  .catch((err) => console.log(err, "\n Error connecting to database :("));
