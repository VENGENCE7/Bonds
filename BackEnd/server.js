// ================================= @Libraries Import

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// ================================= @Config Import

// SERVER Config
import { server } from "./Configurations/server";
// CORS config
import { corsConfig } from "./Configurations/cors";

// ================================= @Middleware Import

// ErrorHandler
import errorHandler from "./Middleware/ErrorHandler";

// ================================= @Routes Import

//  Root
import root_Router from "./Routes/Root";
// User
import user_Router from "./Routes/User";
//  Data
import data_Router from "./Routes/Data";

// ================================= @Express APP

const app = express();
// COMMUNICATION ESSENTIALS

// Cross-Origin Resource Sharing := Cors for server and client communication
app.use(cors(corsConfig));
//  to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: false }));
// analyze incoming Request Object as a JSON Object
app.use(express.json());
// to use cookies
app.use(cookieParser());

// ROUTES
app.use("/", root_Router);
app.use("/user", user_Router);
app.use("/data", data_Router);
app.use(errorHandler);

// DB CONNECTION
mongoose
  .connect(server.connection_url, {
    // Connection Options for smooth communications
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected Successfully !!! "))
  .then(() =>
    app.listen(server.port, () =>
      console.log(`Listening on PORT ${server.port}`)
    )
  )
  .catch((err) => console.log(err, "\n Error connecting to database :("));
