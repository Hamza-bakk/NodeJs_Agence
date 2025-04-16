import { Agence } from "../model/Agence.js";

export const GetAllAgence = async (req, res) => {
  try {
    const agence = await Agence.findAll();
    agence
      ? res.json(agence)
      : res.status(404).json({ error: "No Agence found" });
  } catch (error) {
    console.error("Error fetching Agence:", error);
    throw new Error("Internal server error");
  }
};



export const DeleteAgence = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Agence.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: "Agence deleted successfully" });
    } else {
      res.status(404).json({ error: "Agence not found" });
    }
  } catch (error) {
    console.error("Error deleting Agence:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
