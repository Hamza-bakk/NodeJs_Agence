import { Router } from "express";
import { GetAllVehicule } from "../controler/VehiculeController.js";

const VehiculeRouter = Router();

VehiculeRouter.get("/vehicule", GetAllVehicule);

export default VehiculeRouter;
