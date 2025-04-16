import { Router } from "express";
import {
  CreateVehicule,
  GetAllVehicule,
  UpdateVehicule,
  DeleteVehicule,
} from "../controler/VehiculeController.js";

const VehiculeRouter = Router();

VehiculeRouter.get("/vehicule", GetAllVehicule);
VehiculeRouter.post("/vehicule", CreateVehicule);
VehiculeRouter.put("/vehicule/:id", UpdateVehicule);
VehiculeRouter.delete("/vehicule/:id", DeleteVehicule);

export default VehiculeRouter;
