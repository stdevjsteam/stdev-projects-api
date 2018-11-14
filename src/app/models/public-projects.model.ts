import { SequelizeAttributes } from '../types';
import { Sequelize, Instance, INTEGER, STRING } from 'sequelize';
import { PublicProjectsAttributes } from '../types/project';

export type ProjectInstance = Instance<PublicProjectsAttributes> & PublicProjectsAttributes;

export default (sequalize: Sequelize) => {
  const attributes: SequelizeAttributes<PublicProjectsAttributes> = {
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
  return sequalize.define<ProjectInstance, PublicProjectsAttributes>('Public_projects', attributes);
};