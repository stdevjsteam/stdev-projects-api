import { Sequelize, Instance, INTEGER, STRING } from 'sequelize';

import { SequelizeAttributes } from '../types';
import { UserAttributes } from '../types/user';

export class UserModel implements UserAttributes {
  constructor(
      public email: string,
      public password: string,
      public id?: number,
      public token?: string
  ) {}
}

export type UsersInstance = Instance<UserAttributes> & UserAttributes;

export default (sequalize: Sequelize) => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: STRING,
      allowNull: false
    }
  };
  return sequalize.define<UsersInstance, UserAttributes>('users', attributes);
};