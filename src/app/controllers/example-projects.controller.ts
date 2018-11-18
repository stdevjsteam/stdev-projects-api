import { Request, Response } from 'express';
import { database } from '../db/database';
import { BaseController } from '../shared/base.controller';
import { ExampleProjectsService } from '../services/example-projects.service';

export class ExampleProjectsController extends BaseController<ExampleProjectsService> {
  
  constructor () {
    super(new ExampleProjectsService(database.db.ExampleProjects));
  }

  public async addProject(req: Request, res: Response): Promise<void> {
    this.handle(this.service.addProject(req.body), res);
  }

  public async getProjects(req: Request, res: Response): Promise<void> {
    this.handle(this.service.getAllByParams(req.query), res);
  }

  public async removeProject(req: Request, res: Response): Promise<void> {
    this.handle(this.service.removeProject(req.user, +req.params.id), res);
  }

}