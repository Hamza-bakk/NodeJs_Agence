import { User } from "../model/UserAccount.js";

export const GetAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    users ? res.json(users) : res.status(404).json({ error: "No users found" });
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Internal server error");
  }
};

export const CreateUser = async () => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const GetUserById = async () => {
  try {
    const users = await User.findByPk(req.params.id);
    users ? res.json(users) : res.status(404).json({ error: "User not found" });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const UpdateUser = async () => {
  try {
    const user = await User.update(req.body, { where: { id: req.params.id } });
    user
      ? res.json("User updated successfully")
      : res.status(404).json({ error: "User not found" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const DeleteUser = async () => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    user
      ? res.json("User deleted successfully")
      : res.status(404).json({ error: "User not found" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
