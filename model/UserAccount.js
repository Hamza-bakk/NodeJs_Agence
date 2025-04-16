import { db } from "../db.js";
import { DataTypes } from "sequelize";

export const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  },
  login: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      len: [2, 20],
    },
  },
  mdp: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 100],
    },
  },
});
