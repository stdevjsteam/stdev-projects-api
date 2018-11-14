import { Routing } from './routing';
import { PublicProjectsController } from '../controllers/public-projects.controller';

export class PublicProjectsRouter extends Routing {
  private projectsController: PublicProjectsController;
  
  constructor() {
    super();
  }

  init() {
    this.projectsController = new PublicProjectsController();
  }

  route(): void {

    this.router.post('/',      this.projectsController.addProject.bind(this.projectsController));  // Create

    this.router.get('/',       this.projectsController.getProjects.bind(this.projectsController));    // Read

    // this.router.put('/',       this.projectsController.getProjects.bind(this.projectsController));    // Update

    this.router.delete('/:id', this.projectsController.removeProject.bind(this.projectsController));  // Delete
  }
}