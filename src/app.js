import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// whenever we use a middleware or want to do a configuration setting we use it through app.use()
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cookieParser is basically use when we want to access users browser from our server and also
// set its cookies i.e., to perform CRUD operations on users browser
app.use(cookieParser());

// routes import
import { userRouter } from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
