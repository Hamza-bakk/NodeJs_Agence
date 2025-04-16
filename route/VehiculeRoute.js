import { Router } from "express";
import { GetAllVehicule } from "../controler/VehiculeController.js";

const VehiculeRouter = Router();

VehiculeRouter.get("/vehicule", GetAllVehicule);
VehiculeRouter.delete("/vehicule/:id", DeleteVehicule);

export default VehiculeRouter

