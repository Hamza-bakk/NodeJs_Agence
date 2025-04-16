import { Router } from "express";

import { GetAllAgence } from "../controler/AgenceController.js";

const AgenceRouter = Router();

AgenceRouter.get("/agence", GetAllAgence);

export default AgenceRouter;
