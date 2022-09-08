// ================================= Libraries Import

import express from "express";
import mongoose from "mongoose";
import cors from "cors"

// ================================= Config Import

// SERVER Config
import { server } from "./Configurations/server";
// CORS config
import { corsConfig } from "./Configurations/cors";

// ================================= Middleware Import

// ErrorHandler
import errorHandler from "./Middleware/ErrorHandler";

// ================================= Routes Import

// User
import user_Router from "./Routes/User";
//  Data
import data_Router from "./Routes/Data";

const app = express();
app.use(cors(corsConfig))
app.use(express.json());

// ROutes
app.use("/user", user_Router);
app.use("/data", data_Router);
app.use(errorHandler);

// DB connection
mongoose
  .connect(server.connection_url)
  .then(() => console.log("Database connected Successfully !!! "))
  .then(() =>
    app.listen(server.port, () =>
      console.log(`Listening on PORT ${server.port}`)
    )
  )
  .catch((err) => console.log(err, "\n Error connecting to database :("));
