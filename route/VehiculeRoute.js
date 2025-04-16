import { Router } from "express";
import { GetAllVehicule, UpdateVehicule } from "../controler/VehiculeController.js";

const VehiculeRouter = Router();

VehiculeRouter.get("/vehicule", GetAllVehicule);
VehiculeRouter.put("/vehicule", UpdateVehicule);

export default VehiculeRouter

