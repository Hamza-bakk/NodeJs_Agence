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
