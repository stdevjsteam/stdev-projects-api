import { Routing } from './routing';
import { ProjectsController } from '../controllers/projects.controller';

export class ProjectsRouter extends Routing {
  private projectsController: ProjectsController;
  
  constructor() {
    super();
  }

  init() {
    this.projectsController = new ProjectsController();
  }

  route(): void {

    this.router.post('/',      this.projectsController.addProject.bind(this.projectsController));  // Create

    this.router.get('/',       this.projectsController.getProjects.bind(this.projectsController));    // Read

    // this.router.put('/',       this.projectsController.getProjects.bind(this.projectsController));    // Update

    this.router.delete('/:id', this.projectsController.removeProject.bind(this.projectsController));  // Delete
  }
}