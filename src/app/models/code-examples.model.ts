import { SequelizeAttributes } from "../types";
import { Sequelize, Instance, INTEGER, STRING } from "sequelize";

export interface ProjectAttributes {
  id?: string;
  name: string;
  technology: string;
  developers: string;
}

export type ProjectInstance = Instance<ProjectAttributes> & ProjectAttributes;

export default (sequalize: Sequelize) => {
  const attributes: SequelizeAttributes<ProjectAttributes> = {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING,
      allowNull: false
    },
    technology: {
      type: STRING,
      allowNull: false
    },
    developers: {
      type: STRING,
      allowNull: false
    }
  };
  return sequalize.define<ProjectInstance, ProjectAttributes>('Projects', attributes);
};