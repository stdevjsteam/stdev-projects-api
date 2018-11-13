import * as Sequelize from 'sequelize';
import { BaseService } from '../shared/base.service';
import { ProjectInstance, ProjectAttributes } from '../models/projects.model';
import { IResult } from '../types/result.d';

export class ProjectsService extends BaseService<ProjectInstance, ProjectAttributes> {

  constructor(model: Sequelize.Model<ProjectInstance, ProjectAttributes>) {
    super(model);
  }

  public async addProject (project: ProjectAttributes): Promise<IResult> {
    return this.model.findOne({ where: { name: project.name } }).then((existingProject: ProjectAttributes) => {
      if(existingProject) {
        return this.getResult(422, null, false, 'Project with this name does already exists.');
      } else {
        return this.addItem(project).then((newProject: ProjectAttributes) => {
          return this.getResult(201, null, true, 'Project has been successfully added', newProject);
        })
      }
    })
  }

  public async getAllProjects (): Promise<IResult> {
    return this.getAll().then((projects: ProjectAttributes[]) => {
      return this.getResult(200, null, true, '', projects);
    });
  }

  public async removeProject (id: number): Promise<IResult> {
    return this.removeItem(id).then((count: number) => {
      return this.getResult(202, null, true, '', count);
    });
  }
}