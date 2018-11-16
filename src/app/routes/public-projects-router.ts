import { Routing } from './routing';
import { PublicProjectsController } from '../controllers/public-projects.controller';
import { PassportMiddleWare } from '../middlewares/passport';

export class PublicProjectsRouter extends Routing {
  private publicProjectsController: PublicProjectsController;
  
  constructor() {
    super();
  }

  init() {
    this.publicProjectsController = new PublicProjectsController();
  }

  route(): void {

    this.router.post('/',      this.publicProjectsController.addProject.bind(this.publicProjectsController));  // Create

    this.router.get('/',       this.publicProjectsController.getProjects.bind(this.publicProjectsController));    // Read

    // this.router.put('/',       this.projectsController.getProjects.bind(this.projectsController));    // Update

    this.router.delete('/:id', PassportMiddleWare.passport.authenticate('jwt', { session: false }), this.publicProjectsController.removeProject.bind(this.publicProjectsController));  // Delete
  }
}