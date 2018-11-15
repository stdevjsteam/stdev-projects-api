import { Request, Response } from 'express';
import { database } from '../db/database';
import { BaseController } from '../shared/base.controller';
import { UsersService } from '../services/users.service';

export class UsersController extends BaseController<UsersService> {
  
  constructor () {
    super(new UsersService(database.db.Users));
  }

  public async login(req: Request, res: Response): Promise<void> {
    this.handle(this.service.login(req.body), res);
  }

  public async register(req: Request, res: Response): Promise<void> {
    this.handle(this.service.addUser(req.body), res);
  }

}