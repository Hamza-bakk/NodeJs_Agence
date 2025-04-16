import { Product } from "../model/Product.js";

export const GetAllProduct = async (req, res) => {
  try {
    const product = await Product.findAll();
    product
      ? res.json(product)
      : res.status(404).json({ error: "No product found" });
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Internal server error");
  }
};

export const CreateProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    product
      ? res.json(product)
      : res.status(404).json({ error: "Product not found" });
  } catch (error) {
    console.error("Error creating Product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const GetProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    product
      ? res.json(product)
      : res.status(404).json({ error: "Product not found" });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    product
      ? res.json("Product updated successfully")
      : res.status(404).json({ error: "Product not found" });
  } catch (error) {
    console.error("Error updating Product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const product = await Product.destroy({ where: { id: req.params.id } });
    product
      ? res.json("Product deleted successfully")
      : res.status(404).json({ error: "Product not found" });
  } catch (error) {
    console.error("Error deleting Product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
