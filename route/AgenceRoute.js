import { Router } from "express";

import { GetAllAgence, UpdateAgence } from "../controler/AgenceController.js";
import { GetAllAgence, DeleteAgence } from "../controler/AgenceController.js";

const AgenceRouter = Router();

AgenceRouter.get("/agence", GetAllAgence);
AgenceRouter.put("agence", UpdateAgence);
AgenceRouter.delete("/agence/:id", DeleteAgence);

export default AgenceRouter;
