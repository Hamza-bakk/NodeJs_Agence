import { Router } from "express";

import {
  CreateUser,
  DeleteUser,
  GetAllUser,
  GetUserById,
  UpdateUser,
} from "../controler/UserControler.js";

const UserRouter = Router();

UserRouter.get("/users", GetAllUser);
UserRouter.get("/users/:id", GetUserById);
UserRouter.post("/users", CreateUser);
UserRouter.put("/users/:id", UpdateUser);
UserRouter.delete("/users/:id", DeleteUser);

export default UserRouter;
