import * as Sequelize from 'sequelize';

import { BaseService } from '../shared/base.service';
import { PublicProjectInstance } from '../models/public-projects.model';
import { IResult } from '../types/result';
import { PublicProjectsAttributes } from '../types/project';

export class PublicProjectsService extends BaseService<PublicProjectInstance, PublicProjectsAttributes> {

  constructor(model: Sequelize.Model<PublicProjectInstance, PublicProjectsAttributes>) {
    super(model);
  }

  public async addProject (project: PublicProjectsAttributes): Promise<IResult> {
    return this.model.findOne({ where: { name: project.name } }).then((existingProject: PublicProjectsAttributes) => {
      if(existingProject) {
        return this.getResult(422, null, false, 'Project with this name does already exists.');
      } else {
        return this.addItem(project).then((newProject: PublicProjectsAttributes) => {
          return this.getResult(201, null, true, 'Project has been successfully added', newProject);
        })
      }
    });
  }

  public async getAllProjects (): Promise<IResult> {
    return this.getAll().then((projects: PublicProjectsAttributes[]) => {
      return this.getResult(200, null, true, '', projects);
    });
  }

  public async removeProject (id: number): Promise<IResult> {
    return this.removeItem(id).then((count: number) => {
      return this.getResult(202, null, true, '', count);
    });
  }
}