import { Router } from "express";

import { GetAllAgence, UpdateAgence } from "../controler/AgenceController.js";

const AgenceRouter = Router();

AgenceRouter.get("/agence", GetAllAgence);
AgenceRouter.put("agence", UpdateAgence);

export default AgenceRouter;
