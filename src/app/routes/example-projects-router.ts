import { Routing } from './routing';
import { ExampleProjectsController } from '../controllers/example-projects.controller';
import { PassportMiddleWare } from '../middlewares/passport';
import { adminMiddleware } from '../middlewares/admin';

export class ExampleProjectsRouter extends Routing {
  private exampleProjectsController: ExampleProjectsController;
  
  constructor() {
    super();
  }

  init() {
    this.exampleProjectsController = new ExampleProjectsController();
  }

  route(): void {

    this.router.post('/',      PassportMiddleWare.passport.authenticate('jwt', { session: false }), adminMiddleware, this.exampleProjectsController.addProject.bind(this.exampleProjectsController));  // Create

    this.router.get('/',       PassportMiddleWare.passport.authenticate('jwt', { session: false }), this.exampleProjectsController.getProjects.bind(this.exampleProjectsController));    // Read

    // this.router.put('/',    PassportMiddleWare.passport.authenticate('jwt', { session: false }),   this.projectsController.getProjects.bind(this.projectsController));    // Update

    this.router.delete('/:id', PassportMiddleWare.passport.authenticate('jwt', { session: false }), this.exampleProjectsController.removeProject.bind(this.exampleProjectsController));  // Delete
  }
}