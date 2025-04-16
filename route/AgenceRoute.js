import { Router } from "express";

import {
  CreateAgence,
  GetAllAgence,
  UpdateAgence,
  DeleteAgence,
} from "../controler/AgenceController.js";

const AgenceRouter = Router();

AgenceRouter.get("/agence", GetAllAgence);
AgenceRouter.post("/agence", CreateAgence);
AgenceRouter.put("/agence/:id", UpdateAgence);
AgenceRouter.delete("/agence/:id", DeleteAgence);

export default AgenceRouter;
