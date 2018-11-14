import { Routing } from './routing';
import { PublicProjectsRouter } from './public-projects-router';
import { ExampleProjectsRouter } from './example-projects-router';

export class Routes extends Routing {
  private publicProjectsRouter: PublicProjectsRouter;
  private exampleProjectsRouter: ExampleProjectsRouter;

  constructor() {
    super();
  }

  init(): void {
    this.publicProjectsRouter = new PublicProjectsRouter();
    this.exampleProjectsRouter = new ExampleProjectsRouter();
  }

  route(): void {
    this.router.use('/projects/', this.publicProjectsRouter.router);
  }
}