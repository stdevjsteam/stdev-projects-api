import { Routing } from './routing';
import { ExampleProjectsController } from '../controllers/example-projects.controller';

export class ExampleProjectsRouter extends Routing {
  private projectsController: ExampleProjectsController;
  
  constructor() {
    super();
  }

  init() {
    this.projectsController = new ExampleProjectsController();
  }

  route(): void {

    this.router.post('/',      this.projectsController.addProject.bind(this.projectsController));  // Create

    this.router.get('/',       this.projectsController.getProjects.bind(this.projectsController));    // Read

    // this.router.put('/',       this.projectsController.getProjects.bind(this.projectsController));    // Update

    this.router.delete('/:id', this.projectsController.removeProject.bind(this.projectsController));  // Delete
  }
}