import { Sequelize, Instance, INTEGER, STRING } from "sequelize";

import { SequelizeAttributes } from "../types";
import { ExampleProjectsAttributes } from "../types/project";

export type ExampleProjectsInstance = Instance<ExampleProjectsAttributes> & ExampleProjectsAttributes;

export default (sequalize: Sequelize) => {
  const attributes: SequelizeAttributes<ExampleProjectsAttributes> = {
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
    repository: {
      type: STRING,
      allowNull: false
    }
  };
  return sequalize.define<ExampleProjectsInstance, ExampleProjectsAttributes>('Example_projects', attributes);
};