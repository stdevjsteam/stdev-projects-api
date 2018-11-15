import * as Sequelize from 'sequelize';
import { compare as passwordCompare, hash as passwordHash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { BaseService } from '../shared/base.service';
import { IResult } from '../types/result';
import { UserAttributes } from '../types/user';
import { UsersInstance, UserModel } from '../models/users.model';

export class UsersService extends BaseService<UsersInstance, UserAttributes> {

  constructor(model: Sequelize.Model<UsersInstance, UserAttributes>) {
    super(model);
  }

  private async createToken(id: number): Promise<string> {
    const expiresIn: number = 2592000;
    return await sign({ id: id }, 'secretKey', { expiresIn: expiresIn});
  }

  public async login(user: UserAttributes): Promise<IResult> {
    return this.model.findOne({ where: { email: user.email } }).then(async (existingUser: UserAttributes) => {
      if(existingUser) {
        if(await passwordCompare(user.password, existingUser.password)) {
          const user =  new UserModel(existingUser.email, existingUser.password, existingUser.id, await this.createToken(existingUser.id));
          return this.getResult(200, null, true, '', user);
        }
      } else {
        return this.getResult(401, null, false, 'Email or password is incorrect');
      }
    });
  }

  public async addUser(user: UserAttributes): Promise<IResult> {
    return this.model.findOne({ where: { email: user.email } }).then(async (existingUser: UserAttributes) => {
      if(existingUser) {
        return this.getResult(422, null, false, 'This email already exists')
      } else {
        const newUser = new UserModel(user.email, await passwordHash(user.password, 10));
        return this.addItem(newUser).then((newUser: UserAttributes) => {
          return this.getResult(201, null, true, 'Project has been successfully added', newUser);
        })
      }
    });
  }
}