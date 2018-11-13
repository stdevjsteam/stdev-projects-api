import { Request, Response } from 'express';
import { database } from '../db/database';
import { BaseController } from '../shared/base.controller';
import { ProjectsService } from '../services/projects.service';

export class ProjectsController extends BaseController<ProjectsService> {
  
  constructor () {
    super(new ProjectsService(database.db.Projects));
  }

  public async addProject(req: Request, res: Response): Promise<void> {
    this.handle(this.service.addProject(req.body), res);
  }

  public async getProjects(req: Request, res: Response): Promise<void> {
    this.handle(this.service.getAllProjects(), res);
  }

  public async removeProject(req: Request, res: Response): Promise<void> {
    this.handle(this.service.removeProject(+req.params.id), res);
  }

}