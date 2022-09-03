// ================================= Libraries Import

import express from "express";
import mongoose from "mongoose";

// ================================= Files/modules Import

// Config
import { config } from "./Configurations/config";
import errorHandler from "./Middleware/ErrorHandler";
// User
import user_Router from "./Routes/User";

const app = express();
app.use(express.json());

// ROutes
app.use("/user", user_Router);
app.use(errorHandler);

mongoose
  .connect(config.connection_url)
  .then(() => console.log("Database connected Successfully !!! "))
  .then(() =>
    app.listen(config.port, () =>
      console.log(`Listening on PORT ${config.port}`)
    )
  )
  .catch((err) => console.log(err, "\n Error connecting to database :("));
