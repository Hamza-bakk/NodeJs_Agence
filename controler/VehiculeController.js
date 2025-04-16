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
export const CreateVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.create(req.body);
    vehicule
      ? res.json(vehicule)
      : res.status(404).json({ error: "vehicule not found" });
  } catch (error) {
    console.error("Error creating vehicule:", error);
    res.status(500).json({ error: "Internal server error" });
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

export const DeleteVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.destroy({ where: { id: req.params.id } });
    vehicule
      ? res.json("vehicule deleted successfully")
      : res.status(404).json({ error: "vehicule not found" });
  } catch (error) {
    console.error("Error deleting vehicule:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
