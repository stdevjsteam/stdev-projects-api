import { Request, Response } from 'express';
import { database } from '../db/database';
import { BaseController } from '../shared/base.controller';
import { PublicProjectsService } from '../services/public-projects.service';

export class PublicProjectsController extends BaseController<PublicProjectsService> {
  
  constructor () {
    super(new PublicProjectsService(database.db.PublicProjects));
  }

  public async addProject(req: Request, res: Response): Promise<void> {
    this.handle(this.service.addProject(req.body), res);
  }

  public async getProjects(req: Request, res: Response): Promise<void> {
    this.handle(this.service.getAllByParams(req.query), res);
  }

  public async removeProject(req: Request, res: Response): Promise<void> {
    this.handle(this.service.removeProject(+req.params.id), res);
  }

}