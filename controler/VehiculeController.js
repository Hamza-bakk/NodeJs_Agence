import { Vehicule } from "../model/Vehicule.js";

export const GetAllVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.findAll();
    vehicule
      ? res.json(vehicule)
      : res.status(404).json({ error: "No Car found" });
  } catch (error) {
    console.error("Error fetching Car:", error);
    throw new Error("Internal server error");
  }
};


