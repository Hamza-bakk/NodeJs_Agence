import express from "express";
import { db } from "./db.js";
import UserRouter from "./route/UserRoute.js";
import ProductRouter from "./route/ProductRoute.js";
import AgenceRouter from "./route/AgenceRoute.js";

import dotenv from "dotenv";
import VehiculeRouter from "./route/VehiculeRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", UserRouter);
app.use("/", ProductRouter);
app.use("/", AgenceRouter);
app.use("/", VehiculeRouter);

db.sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port http://localhost:${process.env.PORT}`
      );
    });
    console.log("Database connected successfully and User model created");
  })
  .catch((err) => {
    console.log("Error creating table User", err);
  });
