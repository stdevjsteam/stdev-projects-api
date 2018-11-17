import * as Sequelize from 'sequelize';

import { BaseService } from '../shared/base.service';

import { IResult } from '../types/result';
import { ExampleProjectsAttributes } from '../types/project';
import { ExampleProjectsInstance } from '../models/example-projects.model';

export class ExampleProjectsService extends BaseService<ExampleProjectsInstance, ExampleProjectsAttributes> {

  constructor(model: Sequelize.Model<ExampleProjectsInstance, ExampleProjectsAttributes>) {
    super(model);
  }

  public async addProject (project: ExampleProjectsAttributes): Promise<IResult> {
    return this.model.findOne({ where: { name: project.name } }).then((existingProject: ExampleProjectsAttributes) => {
      if(existingProject) {
        return this.getResult(422, null, false, 'Project with this name does already exists.');
      } else {
        return this.addItem(project).then((newProject: ExampleProjectsAttributes) => {
          return this.getResult(201, null, true, 'Project has been successfully added', newProject);
        })
      }
    })
  }

  public async getAllProjects (): Promise<IResult> {
    return this.getAll().then((projects: ExampleProjectsAttributes[]) => {
      return this.getResult(200, null, true, '', projects);
    });
  }

  public async removeProject (userId: number, projectId: number): Promise<IResult> {
    return this.removeItem(projectId).then((count: number) => {
      return this.getResult(202, null, true, '', count);
    });
  }
}