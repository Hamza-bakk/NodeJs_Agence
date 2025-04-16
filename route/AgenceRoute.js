import { Router } from "express";
import { GetAllAgence, DeleteAgence } from "../controler/AgenceController.js";

const AgenceRouter = Router();

AgenceRouter.get("/agence", GetAllAgence);
AgenceRouter.delete("/agence/:id", DeleteAgence);

export default AgenceRouter;
