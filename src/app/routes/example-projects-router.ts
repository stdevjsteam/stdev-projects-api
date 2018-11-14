import { Routing } from './routing';
import { ExampleProjectsController } from '../controllers/example-projects.controller';

export class ExampleProjectsRouter extends Routing {
  private exampleProjectsController: ExampleProjectsController;
  
  constructor() {
    super();
  }

  init() {
    this.exampleProjectsController = new ExampleProjectsController();
  }

  route(): void {

    this.router.post('/',      this.exampleProjectsController.addProject.bind(this.exampleProjectsController));  // Create

    this.router.get('/',       this.exampleProjectsController.getProjects.bind(this.exampleProjectsController));    // Read

    // this.router.put('/',       this.projectsController.getProjects.bind(this.projectsController));    // Update

    this.router.delete('/:id', this.exampleProjectsController.removeProject.bind(this.exampleProjectsController));  // Delete
  }
}