import { Routing } from './routing';
import { PublicProjectsController } from '../controllers/public-projects.controller';
import { PassportMiddleWare } from '../middlewares/passport';
import { adminMiddleware } from '../middlewares/admin';

export class PublicProjectsRouter extends Routing {
  private publicProjectsController: PublicProjectsController;
  
  constructor() {
    super();
  }

  init() {
    this.publicProjectsController = new PublicProjectsController();
  }

  route(): void {

    this.router.post('/',      PassportMiddleWare.passport.authenticate('jwt', { session: false }), adminMiddleware, this.publicProjectsController.addProject.bind(this.publicProjectsController));  // Create

    this.router.get('/',       PassportMiddleWare.passport.authenticate('jwt', { session: false }), this.publicProjectsController.getProjects.bind(this.publicProjectsController));    // Read

    // this.router.put('/',    PassportMiddleWare.passport.authenticate('jwt', { session: false }),   this.projectsController.getProjects.bind(this.projectsController));    // Update

    this.router.delete('/:id', PassportMiddleWare.passport.authenticate('jwt', { session: false }), this.publicProjectsController.removeProject.bind(this.publicProjectsController));  // Delete
  }
}