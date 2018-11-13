import * as Sequelize from "sequelize";
import projectFactory, { ProjectInstance, ProjectAttributes } from "../models/projects.model";

export interface IDB {
  sequelize?: Sequelize.Sequelize;
  Sequelize?: Sequelize.SequelizeStatic;
  Projects?: Sequelize.Model<ProjectInstance, ProjectAttributes>;
}

class Database {
  private env = process.env.NODE_ENV || "development";
  private config = require("../../../db-config.json")[this.env];
  private sequelize: Sequelize.Sequelize;
  public db: IDB = {};

  constructor() {
    this.sequelize = new Sequelize(process.env.DATABASE_URL || process.env.DATABSE_CONNECTION_URI, {
      "dialect": "postgres",
      "operatorsAliases": false
    });
    this.db = {
      sequelize: this.sequelize,
      Sequelize,
      Projects: projectFactory(this.sequelize)
    };

    Object.values(this.db).forEach((model: any) => {
      if (model.associate) {
        model.associate(this.db);
      }
    });
  }
}

export const database = new Database();