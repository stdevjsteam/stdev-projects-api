import { Routing } from './routing';
import { ProjectsRouter } from './projects-router';

export class Routes extends Routing {
  private projectsRouter: ProjectsRouter;

  constructor() {
    super();
  }

  init(): void {
    this.projectsRouter = new ProjectsRouter();
  }

  route(): void {
    this.router.use('/projects/', this.projectsRouter.router);
  }
}