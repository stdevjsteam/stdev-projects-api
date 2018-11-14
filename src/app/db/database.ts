import * as Sequelize from "sequelize";

import publicProjectsFactory, { PublicProjectInstance } from "../models/public-projects.model";
import { PublicProjectsAttributes, ExampleProjectsAttributes } from "../types/project";
import exampleProjectsFactory, { ExampleProjectsInstance } from "../models/example-projects.model";

export interface IDB {
  sequelize?: Sequelize.Sequelize;
  Sequelize?: Sequelize.SequelizeStatic;
  PublicProjects?: Sequelize.Model<PublicProjectInstance, PublicProjectsAttributes>;
  ExampleProjects?: Sequelize.Model<ExampleProjectsInstance, ExampleProjectsAttributes>;
}

class Database {
  private env = process.env.NODE_ENV || "development";
  private config = require("../../../db-config.json")[this.env];
  private sequelize: Sequelize.Sequelize;
  public db: IDB = {};

  constructor() {
    this.sequelize = new Sequelize(process.env.DATABASE_URL || this.config.url, {
      "dialect": "postgres",
      "operatorsAliases": false
    });
    this.db = {
      sequelize: this.sequelize,
      Sequelize,
      PublicProjects: publicProjectsFactory(this.sequelize),
      ExampleProjects: exampleProjectsFactory(this.sequelize)
    };

    Object.values(this.db).forEach((model: any) => {
      if (model.associate) {
        model.associate(this.db);
      }
    });
  }
}

export const database = new Database();