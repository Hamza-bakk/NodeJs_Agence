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
export const UpdateVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.update(req.body, {
      where: { id: req.params.id },
    });
    vehicule
      ? res.json("Vehicule updated successfully")
      : res.status(404).json({ error: "Vehicule not found" });
  } catch (error) {
    console.error("Error updating Vehicule:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};