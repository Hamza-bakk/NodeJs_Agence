import { db } from "../db.js";
import { DataTypes } from "sequelize";

export const Product = db.define("Products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  libelle: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 20],
    },
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});
