import { db } from "../db.js";
import { DataTypes } from "sequelize";
import { Agence } from "./Agence.js";

export const Vehicule = db.define("Vehicule", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  agenceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Agence,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  marque: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modele: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  immatriculation: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  annee: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1900,
      max: new Date().getFullYear(),
    },
  },
  statut: {
    type: DataTypes.ENUM("disponible", "indisponible"),
    defaultValue: "disponible",
    allowNull: false,
  },
  prixParJour: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Vehicule.belongsTo(Agence, { foreignKey: "agenceId", as: "agence" });
Agence.hasMany(Vehicule, { foreignKey: "agenceId", as: "Vehicule" });
